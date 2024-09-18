/**
 * A slide deck object
 */
class SlideDeck {
  /**
   * Constructor for the SlideDeck object.
   * @param {NodeList} slides A list of HTML elements containing the slide text.
   * @param {L.map} map The Leaflet map where data will be shown.
   */
  constructor(slides, map) {
    this.slides = slides;
    this.map = map;

    this.dataLayer = L.layerGroup().addTo(map);
    this.currentSlideIndex = 0;
  }


  // eslint-disable-next-line valid-jsdoc
  /**
   * ### updateDataLayer
   *
   * The updateDataLayer function will clear any markers or shapes previously
   * added to the GeoJSON layer on the map, and replace them with the data
   * provided in the `data` argument. The `data` should contain a GeoJSON
   * FeatureCollection object.
   *
   * @param {object} data A GeoJSON FeatureCollection object
   * @return {L.GeoJSONLayer} The new GeoJSON layer that has been added to the
   *                          data layer group.
   */
  updateDataLayer(data, slideID) {
    this.dataLayer.clearLayers();

    if (slideID === 'title-slide') { // first slide map
      const colorForProdTF = (prodTF) => {
        return prodTF === 1 ? '#A92D04' : '#DAD8C9';
      };
      const geoJsonLayer1 = L.geoJSON(data, {
        style: (feature) => {
          const prodTF = feature.properties.prodTF;
          const fillColor = colorForProdTF(prodTF);

          return {
            stroke: true,
            color: '#D3D3D3',
            weight: 0.5,
            fillColor: fillColor,
            fillOpacity: 0.6,
          };
        },
      })
          .bindTooltip((l) => l.feature.properties._State, {
            className: 'custom-tooltip',
          })
          .addTo(this.dataLayer);
      return geoJsonLayer1;
    } else if (slideID === 'second-slide') { // second slide map
      const val = (value) => {
        if (value === 0) {
          return '#DAD8C9';
        } else if (value > 0 && value < 10000) {
          return '#FBAF0A';
        } else if (value >= 10000) {
          return '#A92D04';
        }
      };
      const geoJsonLayer2 = L.geoJSON(data, {
        style: (feature) => {
          const value = feature.properties.value;
          const fillColor = val(value);

          return {
            stroke: true,
            color: '#D3D3D3',
            weight: 0.5,
            fillColor: fillColor,
            fillOpacity: 0.7,
          };
        },
      })
          .bindTooltip((l) => l.feature.properties._State, {
            className: 'custom-tooltip',
          })
          .addTo(this.dataLayer);
      return geoJsonLayer2;
    } else if (slideID === 'third-slide') { // third slide map
      const val = (value) => {
        if (value === 0) {
          return '#DAD8C9';
        } else if (value > 0 && value < 10000) {
          return '#FBAF0A';
        } else if (value >= 10000 && value < 100000) {
          return '#E75304';
        } else if (value >= 100000) {
          return '#A92D04';
        }
      };
      const geoJsonLayer3 = L.geoJSON(data, {
        style: (feature) => {
          const value = feature.properties.value;
          const fillColor = val(value);

          return {
            stroke: true,
            color: '#D3D3D3',
            weight: 0.5,
            fillColor: fillColor,
            fillOpacity: 0.7,
          };
        },
      })
          .bindTooltip((l) => l.feature.properties._State, {
            className: 'custom-tooltip',
          })
          .addTo(this.dataLayer);
      return geoJsonLayer3;
    } else if (slideID === 'fourth-slide') { // fourth slide map
      const val = (value) => {
        if (value >= 0 && value < 100000) {
          return '#FBAF0A';
        } else if (value >= 100000 && value < 200000) {
          return '#E75304';
        } else if (value >= 200000 && value <= 2436351) {
          return '#A92D04';
        }
      };
      const geoJsonLayer4 = L.geoJSON(data, {
        style: (feature) => {
          const value = feature.properties.value;
          const fillColor = val(value);

          return {
            stroke: true,
            color: '#E5E4E2',
            weight: 0.8,
            fillColor: fillColor,
            fillOpacity: 0.8,
          };
        },
      })
          .bindTooltip((l) => l.feature.properties._State, {
            className: 'custom-tooltip',
          })
          .addTo(this.dataLayer);
      return geoJsonLayer4;
    } else if (slideID === 'fifth-slide') {
      const prod = (production) => {
        if (production >= 0 && production < 10000) {
          return '#FBAF0A';
        } else if (production >= 10000 && production < 100000) {
          return '#E75304';
        } else if (production >= 100000 && production <= 913802) {
          return '#A92D04';
        }
      };
      const geoJsonLayer5 = L.geoJSON(data, {
        style: (feature) => {
          const production = feature.properties.production;
          const fillColor = prod(production);

          return {
            stroke: true,
            color: '#E5E4E2',
            weight: 0.8,
            fillColor: fillColor,
            fillOpacity: 0.8,
          };
        },
      })
          .bindTooltip((l) => l.feature.properties._State, {
            className: 'custom-tooltip',
          })
          .addTo(this.dataLayer);
      return geoJsonLayer5;
    } else if (slideID === 'sixth-slide') {
      const prod = (production) => {
        if (production >= 0 && production < 100000) {
          return '#FBAF0A';
        } else if (production >= 100000 && production < 200000) {
          return '#E75304';
        } else if (production >= 200000 && production <= 913802) {
          return '#A92D04';
        }
      };
      const geoJsonLayer6 = L.geoJSON(data, {
        style: (feature) => {
          const production = feature.properties.production;
          const fillColor = prod(production);

          return {
            stroke: true,
            color: '#E5E4E2',
            weight: 0.8,
            fillColor: fillColor,
            fillOpacity: 0.8,
          };
        },
      })
          .bindTooltip((l) => {
            const name = l.feature.properties.NAME;
            const production = l.feature.properties.production;

            return `<div class="custom-tooltip">
                      <strong>${name}</strong><br>
                      Production: ${production} gallons
                    </div>`;
          })
          .addTo(this.dataLayer);
      return geoJsonLayer6;
    } else {
      const geoJsonLayer = L.geoJSON(data, {
        style: (feature) => {
          return {
            stroke: true,
            color: '#E5E4E2',
            weight: 0.8,
            fillColor: '#A92D04',
            fillOpacity: 0.8,
          };
        },
      })
          .bindTooltip((l) => l.feature.properties.name)
          .addTo(this.dataLayer);
      return geoJsonLayer;
    }
  }

  /**
   * ### getSlideFeatureCollection
   *
   * Load the slide's features from a GeoJSON file.
   *
   * @param {HTMLElement} slide The slide's HTML element. The element id should match the key for the slide's GeoJSON file
   * @return {object} The FeatureCollection as loaded from the data file
   */
  async getSlideFeatureCollection(slide) {
    const resp = await fetch(`data/${slide.id}.json`);
    const data = await resp.json();
    return data;
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
   * Go to the slide that mathces the specified ID.
   *
   * @param {HTMLElement} slide The slide's HTML element
   */
  async syncMapToSlide(slide) {
    if (slide.id.includes('image')) {
      // Hide the map and display the image
      this.map.getContainer().style.display = 'none';
      const image = document.getElementById('slide-image');
      image.style.display = 'block';
      image.src = slide.getAttribute('data-image-src');
    } else if (slide.id === 'chart-slide') {
      // Hide the map and show the chart
      this.map.getContainer().style.display = 'none';
      const chart = document.getElementById('chart-container');
      chart.style.display = 'block';
      chart.src = slide.getAttribute('data-image-src');
    } else {
      // Hide the image and show the map for other slides
      this.map.getContainer().style.display = 'block';
      const image = document.getElementById('slide-image');
      image.style.display = 'none';
      const collection = await this.getSlideFeatureCollection(slide);
      const layer = this.updateDataLayer(collection, slide.id);
      /**
     * Create a bounds object from a GeoJSON bbox array.
     * @param {Array} bbox The bounding box of the collection
     * @return {L.latLngBounds} The bounds object
     */
      const boundsFromBbox = (bbox) => {
        const [west, south, east, north] = bbox;
        const bounds = L.latLngBounds(
            L.latLng(south, west),
            L.latLng(north, east),
        );
        return bounds;
      };
      /**
     * Create a temporary event handler that will show tooltips on the map
     * features, after the map is done "flying" to contain the data layer.
     */
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
   */
  preloadFeatureCollections() {
    for (const slide of this.slides) {
      this.getSlideFeatureCollection(slide);
    }
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

    if (i !== this.currentSlideIndex) {
      this.currentSlideIndex = i;
      this.syncMapToCurrentSlide();
    }
  }
}

export { SlideDeck };
