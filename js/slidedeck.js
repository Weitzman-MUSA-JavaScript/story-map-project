/**
 * A slide deck object
 * Modified from original slidedeck by Mjumbe.
 */
class SlideDeck {
  /**
   * Constructor for the SlideDeck object.
   * @param {NodeList} slides A list of HTML elements containing the slide text.
   * @param {L.map} map The Leaflet map where data will be shown.
   *
   */
  constructor(slides, map) {
    this.slides = slides;
    this.map = map;
    this.dataLayer = L.layerGroup().addTo(map);
    this.currentSlideIndex = 0;
    this.pointData = undefined;
    this.yearLayers = undefined;
    this.year = 1937;
  }

  /**
   * ### updateDataLayer
   * Adds or removes layers from the layerGroup on the map based on the input year
   *
   * @param {Integer} updateYear New year to update geodata to
   */
  updateDataLayer(updateYear) {
    if (this.yearLayers.has(updateYear)) {
      if (this.year < updateYear) {
        for (let i = this.year + 1; i <= updateYear; i++) {
          this.yearLayers.get(i).addTo(this.dataLayer);
        }
        this.year = updateYear;
      } else if (this.year > updateYear) {
        for (let i = this.year; i > updateYear; i--) {
          this.yearLayers.get(i).remove();
        }
        this.year = updateYear;
      }
    }
  }

  /**
   * ### loadGeoData
   *
   * Load the slide's features from a GeoJSON file.
   *
   * @param {map} options Style map for points
  */
  async loadGeoData(options) {
    if (this.pointData === undefined) {
      const resp = await fetch(`data/thinned_geodata.geojson`);
      this.pointData = await resp.json();
    }
    if (this.yearLayers === undefined) {
      this.constructLayers(this.pointData, options);
    }
  }

  /** Constructs map of layers with their year_completed as the key
   *
   * @param {geoJSONjson} data geodata of HDB locations
   * @param {map} options Style map for points displayed
   */
  constructLayers(data, options) {
    let filteredData;
    let layer;
    this.yearLayers = new Map;

    const defaultOptions = {
      pointToLayer: (feature, latlng) => L.circleMarker(latlng),
      style: (feature) =>
        feature.geometry.type === 'Point' ?
          { stroke: false,
            radius: Math.max(1, feature.properties.blocks / 5),
            fillOpacity: 1,
            color: '#AA4A44' } :
          {},
      interactive: true,
    };

    for (let year = 1937; year <= 2024; year++) {
      filteredData = this.pointData.features.filter(
          (feature) => feature.properties.year_completed <= year);
      layer = L.geoJSON(filteredData, options || defaultOptions);
      // .bindTooltip((l) => l.feature.properties.label)
      this.yearLayers.set(year, layer);
    }
  }

  /**
   * ### hideAllSlides
   *
   * Add the hidden class to all slides' HTML elements.
   *
   * @param {NodeList} slides The set of all slide elements, in order.
   */
  hideAllSlides() {
    for (const slide of this.slides) {
      slide.classList.add('hidden');
    }
  }

  /**
   * ### syncMapToSlide
   *
   * Go to the slide that matches the specified ID.
   *
   * @param {HTMLElement} slide The slide's HTML element
   */
  async syncMapToSlide(slide) {
    this.updateDataLayer(this.getCurrentYear());
  }

  /**
   * Show the slide with ID matched by currentSlideIndex. If currentSlideIndex is
   * null, then show the first slide.
   */
  syncMapToCurrentSlide() {
    const slide = this.slides[this.currentSlideIndex];
    this.syncMapToSlide(slide);
  }

  /**
   * Increment the currentSlideIndex and show the corresponding slide. If the
   * current slide is the final slide, then the next is the first.
   */
  goNextSlide() {
    this.currentSlideIndex++;

    if (this.currentSlideIndex === this.slides.length) {
      this.currentSlideIndex = 0;
    }

    this.syncMapToCurrentSlide();
  }

  /**
   * Decrement the currentSlideIndes and show the corresponding slide. If the
   * current slide is the first slide, then the previous is the final.
   */
  goPrevSlide() {
    this.currentSlideIndex--;

    if (this.currentSlideIndex < 0) {
      this.currentSlideIndex = this.slides.length - 1;
    }

    this.syncMapToCurrentSlide();
  }

  /**
   * ### preloadFeatureCollections
   *
   * Initiate a fetch on all slide data so that the browser can cache the
   * requests. This way, when a specific slide is loaded it has a better chance
   * of loading quickly.
   * @param {map} options Style map for points
   */
  preloadFeatureCollections(options) {
    this.loadGeoData(options);
  }

  /**
   * Calculate the current slide index based on the current scroll position.
   */
  calcCurrentSlideIndex() {
    const scrollPos = window.scrollY;
    const windowHeight = window.innerHeight;

    let i;
    for (i = 0; i < this.slides.length; i++) {
      const slidePos =
        this.slides[i].offsetTop - scrollPos + windowHeight * 0.7;
      if (slidePos >= 0) {
        break;
      }
    }

    this.syncMapToCurrentSlide();
  }

  /**
   * Calculate the current slide index based on the current scroll position.
   * @return {Integer} year based on current scroll position
   */
  getCurrentYear() {
    if (window.scrollY < 1000) {
      return (1937);
    } else if (window.scrollY < 2400) {
      return (Math.round((window.scrollY - 1000) / (2400-1000) * (1960-1937)) + 1937);
    } else if (window.scrollY < 4000) {
      return (Math.round((window.scrollY - 2400) / (4000-2400) * (1980-1960)) + 1960);
    } else if (window.scrollY < 5200) {
      return (Math.round((window.scrollY - 4000) / (5200-4000) * (2000-1980)) + 1980);
    } else {
      return (Math.round((window.scrollY - 5200) / (6400-5200) * (2023-2000)) + 2000);
    }
  }
}

export { SlideDeck };
