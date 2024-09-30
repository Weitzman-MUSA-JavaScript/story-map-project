/**
 * A slide deck object
 */
class SlideDeck {
  /**
   * Constructor for the SlideDeck object.
   * @param {NodeList} slides A list of HTML elements containing the slide text.
   * @param {L.Map} map The Leaflet map where data will be shown.
   * @param {Object} layerOptions An object containing styling choices for the layers.
   */
  constructor(slides, map, layerOptions) {
    this.slides = slides;
    this.map = map;
    this.layerOptions = layerOptions;

    this.dataLayer = L.layerGroup().addTo(map);
    this.currentSlideIndex = 0;
  }

  /**
 * ### updateDataLayer
 *
 * Clears previous markers or shapes, and replaces them with the new GeoJSON data.
 * @param {object} data A GeoJSON FeatureCollection object.
 * @param {object} [options] Optional parameter that specifies layer styling and other settings.
 * @return {L.GeoJSONLayer} The new GeoJSON layer added to the data layer group.
 */
  updateDataLayer(data, options) {
    this.dataLayer.clearLayers();
    const geoJsonLayer = L.geoJSON(data, options || {
      pointToLayer: (p, latlng) => L.marker(latlng),
      style: (feature) => {
        return {
          fillColor: 'red',
        };
      },
    })
        .bindTooltip((l) => l.feature.properties.label)
        .addTo(this.dataLayer);

    return geoJsonLayer;
  }
  /**
   * ### getSlideFeatureCollection
   * Load the slide's features from a GeoJSON file.
   * @param {HTMLElement} slide The slide's HTML element.
   * @return {object} The FeatureCollection as loaded from the data file.
   */
  async getSlideFeatureCollection(slide) {
    const resp = await fetch(`data/${slide.id}.json`);
    const data = await resp.json();
    return data;
  }

  /**
   * ### hideAllSlides
   * Add the hidden class to all slides' HTML elements.
   */
  hideAllSlides() {
    for (const slide of this.slides) {
      slide.classList.add('hidden');
    }
  }

  /**
   * ### syncMapToSlide
   * Sync the map with the features of the given slide.
   * @param {HTMLElement} slide The slide's HTML element.
   */
  async syncMapToSlide(slide) {
    const collection = await this.getSlideFeatureCollection(slide);
    const layerOptions = this.layerOptions[slide.id];
    const layer = this.updateDataLayer(collection, layerOptions);

    const boundsFromBbox = (bbox) => {
      const [west, south, east, north] = bbox;
      return L.latLngBounds(L.latLng(south, west), L.latLng(north, east));
    };

    const handleFlyEnd = () => {
      if (slide.showpopups) {
        layer.eachLayer((l) => {
          l.bindTooltip(l.feature.properties.label, { permanent: true });
          l.openTooltip();
        });
      }
      this.map.removeEventListener('moveend', handleFlyEnd);
    };

    this.map.addEventListener('moveend', handleFlyEnd);
    if (collection.bbox) {
      this.map.flyToBounds(boundsFromBbox(collection.bbox));
    } else {
      this.map.flyToBounds(layer.getBounds());
    }
  }

  /**
   * Sync the map with the current slide.
   */
  syncMapToCurrentSlide() {
    const slide = this.slides[this.currentSlideIndex];
    this.syncMapToSlide(slide);
  }

  /**
   * Increment to the next slide and sync the map.
   */
  goNextSlide() {
    this.currentSlideIndex++;
    if (this.currentSlideIndex === this.slides.length) {
      this.currentSlideIndex = 0;
    }
    this.syncMapToCurrentSlide();
  }

  /**
   * Decrement to the previous slide and sync the map.
   */
  goPrevSlide() {
    this.currentSlideIndex--;
    if (this.currentSlideIndex < 0) {
      this.currentSlideIndex = this.slides.length - 1;
    }
    this.syncMapToCurrentSlide();
  }

  /**
   * Preload feature collections for all slides.
   */
  preloadFeatureCollections() {
    for (const slide of this.slides) {
      this.getSlideFeatureCollection(slide);
    }
  }

  /**
   * Calculate the current slide index based on the scroll position.
   */
  calcCurrentSlideIndex() {
    const scrollPos = window.scrollY;
    const windowHeight = window.innerHeight;

    let i;
    for (i = 0; i < this.slides.length; i++) {
      const slidePos = this.slides[i].offsetTop - scrollPos + windowHeight * 0.7;
      if (slidePos >= 0) {
        break;
      }
    }

    if (i !== this.currentSlideIndex) {
      this.currentSlideIndex = i;
      this.syncMapToCurrentSlide();
    }
  }
}

export { SlideDeck };
