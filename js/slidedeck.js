/**
 * A slide deck object
 */
class SlideDeck {
  /**
   * Constructor for the SlideDeck object.
   * @param {Node} container The container element for the slides.
   * @param {NodeList} slides A list of HTML elements containing the slide text.
   * @param {L.map} map The Leaflet map where data will be shown.
   * @param {object} slideOptions The options to create each slide's L.geoJSON
   *                              layer, keyed by slide ID.
   */
  constructor(container, slides, map, slideOptions = {}) {
    this.container = container;
    this.slides = slides;
    this.map = map;
    this.slideOptions = slideOptions;

    this.dataLayer = L.layerGroup().addTo(map);
    this.currentSlideIndex = 0;
    this.wayneAvenueMarker = null;

    this.layerData = {};
  }

  /**
   * ### updateDataLayer
   *
   * The updateDataLayer function will clear any markers or shapes previously
   * added to the GeoJSON layer on the map, and replace them with the data
   * provided in the `data` argument. The `data` should contain a GeoJSON
   * FeatureCollection object.
   *
   * @param {object} data A GeoJSON FeatureCollection object
   * @param {object} options Options to pass to L.geoJSON
   * @return {L.GeoJSONLayer} The new GeoJSON layer that has been added to the
   *                          data layer group.
   */
  updateDataLayer(data, options) {
    this.dataLayer.clearLayers();

    const defaultOptions = {
      pointToLayer: (p, latlng) => L.marker(latlng),
      style: (feature) => feature.properties.style,
      onEachFeature: (feature, layer) => {
        if (feature.properties && feature.properties.label) {
          layer.bindTooltip(feature.properties.label);
        }
      }
    };
    const geoJsonLayer = L.geoJSON(data, options || defaultOptions)
      .addTo(this.dataLayer);

    return geoJsonLayer;
  }

  /**
   * ### addLayer
   *
   * Add a GeoJSON layer to the data layer group without clearing existing layers.
   *
   * @param {object} data A GeoJSON FeatureCollection object
   * @param {object} options Options to pass to L.geoJSON
   * @return {L.GeoJSONLayer} The new GeoJSON layer that has been added to the
   *                          data layer group.
   */
  addLayer(data, options) {
    const defaultOptions = {
      pointToLayer: (p, latlng) => L.marker(latlng),
      style: (feature) => feature.properties.style,
      onEachFeature: (feature, layer) => {
        if (feature.properties && feature.properties.label) {
          layer.bindTooltip(feature.properties.label);
        }
      }
    };
    const geoJsonLayer = L.geoJSON(data, options || defaultOptions)
      .addTo(this.dataLayer);

    return geoJsonLayer;
  }

  /**
   * ### getSlideFeatureCollection
   *
   * Load the slide's features from a GeoJSON file.
   *
   * @param {string} name The name of the GeoJSON file (without extension)
   * @return {object} The FeatureCollection as loaded from the data file
   */
  async getFeatureCollection(name) {
    try {
      const resp = await fetch(`data/${name}.geojson`);
      const data = await resp.json();
      this.layerData[name] = data;
      return data;
    } catch (error) {
      console.error(`Error loading ${name} data:`, error);
      return null;
    }
  }

  /**
   * Create Wayne Avenue marker
   */
  createWayneAvenueMarker() {
    const wayneAveCoords = [40.0298, -75.1501];

    // create divicon
    const wayneIcon = L.divIcon({
      className: 'wayne-avenue-marker',
      html: `
            <div class="wayne-marker-container">
                <div class="wayne-marker-pin"></div>
                <div class="wayne-marker-label">4300 Block Wayne Ave</div>
            </div>
        `,
      iconSize: [200, 60],
      iconAnchor: [100, 50]
    });

    this.wayneAvenueMarker = L.marker(wayneAveCoords, { icon: wayneIcon })
      .bindPopup(`
            <div class="wayne-popup">
                <h4>4300 Block of Wayne Avenue</h4>
                <div class="resident-quote">
                    <p><em>"I would like to thank the Nicetown CDC for helping us clean up our block. Our block is primarily senior citizens, so the large pieces of debris we had trouble removing ourselves, but the Same Day Work and Pay participants were very helpful, and we appreciate you all. This is a very good program, and we all hope that you continue the program throughout the summer."</em></p>
                    <p class="quote-attribution">- Local Resident</p>
                </div>
            </div>
        `, {
        maxWidth: 350,
        className: 'wayne-popup-container'
      });
  }

  /**
   * ### syncMapToSlide
   *
   * @param {HTMLElement} slide The slide's HTML element
   */
  async syncMapToSlide(slide) {
    const slideId = slide.id;
    const options = this.slideOptions[slideId];

    this.dataLayer.clearLayers();

    if (this.wayneAvenueMarker && this.map.hasLayer(this.wayneAvenueMarker)) {
      this.map.removeLayer(this.wayneAvenueMarker);
    }

    const slide2Overlay = document.getElementById('slide2-overlay');
    const originalSlide2 = document.getElementById('slide2');

    if (slideId === 'slide2' && options && options.overlay) {
      if (slide2Overlay) slide2Overlay.classList.add('active');
      if (originalSlide2) {
        originalSlide2.style.opacity = '0';
        originalSlide2.style.pointerEvents = 'none';
      }
      return;
    } else {
      if (slide2Overlay) slide2Overlay.classList.remove('active');
      if (originalSlide2) {
        originalSlide2.style.opacity = '1';
        originalSlide2.style.pointerEvents = 'initial';
      }
    }

    if (slideId === 'slide1') {
      if (!this.layerData['Vacant_Indicators_Land']) {
        await this.getFeatureCollection('Vacant_Indicators_Land');
      }
      if (this.layerData['Vacant_Indicators_Land']) {
        this.updateDataLayer(this.layerData['Vacant_Indicators_Land'], options);
      }
    } else if (slideId === 'slide3') {
      // Load PHS Landcare Data
      if (!this.layerData['phs_landcare']) {
        await this.getFeatureCollection('phs_landcare');
      }
      if (this.layerData['phs_landcare']) {
        this.updateDataLayer(this.layerData['phs_landcare'], options);
      }
    } else if (slideId === 'slide4' && options && options.multiLayer) {
      const layerPromises = options.layers.map(async (layerName) => {
        if (!this.layerData[layerName]) {
          await this.getFeatureCollection(layerName);
        }
        return { name: layerName, data: this.layerData[layerName] };
      });

      const layers = await Promise.all(layerPromises);

      layers.forEach(layer => {
        if (layer.data) {
          let layerOptions = {};

          switch (layer.name) {
            case 'phs_landcare':
              layerOptions = {
                style: {
                  color: '#1b5e20',
                  weight: 2,
                  opacity: 1,
                  fillColor: '#388e3c',
                  fillOpacity: 0.7
                },
                onEachFeature: this.createPHSPopup
              };
              break;
            case 'Commercial_Corridors':
              layerOptions = {
                style: {
                  color: '#f57c00',
                  weight: 2,
                  opacity: 0.8,
                  fillColor: '#ffb74d',
                  fillOpacity: 0.6
                },
                onEachFeature: this.createGenericPopup('Commercial Corridor')
              };
              break;
            case 'Schools_Parcels':
              layerOptions = {
                style: {
                  color: '#1976d2',
                  weight: 2,
                  opacity: 0.8,
                  fillColor: '#64b5f6',
                  fillOpacity: 0.6
                },
                onEachFeature: this.createSchoolPopup
              };
              break;
            case 'bus_transit_shelters':
              layerOptions = {
                pointToLayer: (feature, latlng) => L.circleMarker(latlng, {
                  radius: 5,
                  fillColor: '#9c27b0',
                  color: '#6a1b9a',
                  weight: 2,
                  opacity: 0.8,
                  fillOpacity: 0.7
                }),
                onEachFeature: this.createGenericPopup('Bus Transit Shelter')
              };
              break;
            case 'Trolley_Stations':
              layerOptions = {
                pointToLayer: (feature, latlng) => L.circleMarker(latlng, {
                  radius: 6,
                  fillColor: '#e91e63',
                  color: '#ad1457',
                  weight: 2,
                  opacity: 0.8,
                  fillOpacity: 0.7
                }),
                onEachFeature: this.createTrolleyPopup
              };
              break;
          }

          this.addLayer(layer.data, layerOptions);
        }
      });
    } else if (slideId === 'slide5' && options && options.specialMarker) {
      if (!this.layerData['phs_landcare']) {
        await this.getFeatureCollection('phs_landcare');
      }
      if (this.layerData['phs_landcare']) {
        const phsOptions = {
          style: {
            color: '#1b5e20',
            weight: 2,
            opacity: 1,
            fillColor: '#388e3c',
            fillOpacity: 0.7
          },
          onEachFeature: this.createPHSPopup
        };
        this.updateDataLayer(this.layerData['phs_landcare'], phsOptions);
      }

      if (this.wayneAvenueMarker) {
        this.wayneAvenueMarker.addTo(this.map);
      }
    }

    if (options && options.view) {
      requestAnimationFrame(() => {
        this.map.setView([options.view.lat, options.view.lng], options.view.zoom);
        setTimeout(() => this.map.invalidateSize(), 50);
      });
    }
  }

  /**
   * Create PHS LandCare Popup
   */
  createPHSPopup = (feature, layer) => {
    if (feature.properties) {
      let popupContent = '<div class="popup-content">';
      popupContent += '<h4>PHS LandCare Site</h4>';

      Object.keys(feature.properties).forEach(key => {
        if (feature.properties[key] && key !== 'geometry') {
          popupContent += `<p><strong>${key}:</strong> ${feature.properties[key]}</p>`;
        }
      });

      popupContent += '</div>';
      layer.bindPopup(popupContent);
    }
  }

  createGenericPopup = (title) => {
    return (feature, layer) => {
      if (feature.properties) {
        let popupContent = '<div class="popup-content">';
        popupContent += `<h4>${title}</h4>`;

        Object.keys(feature.properties).forEach(key => {
          if (feature.properties[key] && key !== 'geometry') {
            popupContent += `<p><strong>${key}:</strong> ${feature.properties[key]}</p>`;
          }
        });

        popupContent += '</div>';
        layer.bindPopup(popupContent);
      }
    };
  }

  createSchoolPopup = (feature, layer) => {
    if (feature.properties) {
      let popupContent = '<div class="popup-content">';
      popupContent += '<h4>School</h4>';

      if (feature.properties.SCHOOL_NAME) {
        popupContent += `<p><strong>School Name:</strong> ${feature.properties.SCHOOL_NAME}</p>`;
      }
      if (feature.properties.ADDRESS) {
        popupContent += `<p><strong>Address:</strong> ${feature.properties.ADDRESS}</p>`;
      }
      if (feature.properties.GRADE_LEVEL) {
        popupContent += `<p><strong>Grade Level:</strong> ${feature.properties.GRADE_LEVEL}</p>`;
      }

      Object.keys(feature.properties).forEach(key => {
        if (feature.properties[key] && key !== 'geometry' &&
          key !== 'SCHOOL_NAME' && key !== 'ADDRESS' && key !== 'GRADE_LEVEL') {
          popupContent += `<p><strong>${key}:</strong> ${feature.properties[key]}</p>`;
        }
      });

      popupContent += '</div>';
      layer.bindPopup(popupContent);
    }
  }

  createTrolleyPopup = (feature, layer) => {
    if (feature.properties) {
      let popupContent = '<div class="popup-content">';
      popupContent += '<h4>Trolley Station</h4>';

      if (feature.properties.STATION_NAME) {
        popupContent += `<p><strong>Station:</strong> ${feature.properties.STATION_NAME}</p>`;
      }

      Object.keys(feature.properties).forEach(key => {
        if (feature.properties[key] && key !== 'geometry' && key !== 'STATION_NAME') {
          popupContent += `<p><strong>${key}:</strong> ${feature.properties[key]}</p>`;
        }
      });

      popupContent += '</div>';
      layer.bindPopup(popupContent);
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
  async preloadFeatureCollections() {
    const dataFiles = [
      'Vacant_Indicators_Land',
      'phs_landcare',
      'Commercial_Corridors',
      'Schools_Parcels',
      'bus_transit_shelters',
      'Trolley_Stations'
    ];

    await Promise.all(dataFiles.map(file => this.getFeatureCollection(file)));
  }

  /**
   * Calculate the current slide index based on the current scroll position.
   */
  calcCurrentSlideIndex() {
    const scrollPos = window.scrollY - this.container.offsetTop;
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
