/**
 * A slide deck object
 */
class SlideDeck {
  /**
   * Constructor for the SlideDeck object.
   * @param {NodeList} slides A list of HTML elements containing the slide text.
   * @param {L.map} map The Leaflet map where data will be shown.
   */
  constructor(container, slides, map, legend) {
    this.container = container;
    this.slides = slides;
    this.map = map;
    this.legend = legend;

    this.dataLayer = L.layerGroup().addTo(map);
    this.currentSlideIndex = 0;
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
   * @return {L.GeoJSONLayer} The new GeoJSON layer that has been added to the
   *                          data layer group.
   */
  updateDataLayer(data) {
    this.dataLayer.clearLayers();


    // Fill aesthetics
    function getColor(rank) {
      switch (rank) {
        case 1: return "salmon";
        case 2: return "gold";
        case 3: return "olivedrab";
        case 4: return "darkcyan";
        case 5: return "navy";
        case 6: return "purple";
        case 7: return "orchid";
        case 8: return "skyblue";
        case 9: return "plum";
        case 10: return "lightpink";
        default: return "gray"; // Default color if cuisine is not found
      }
    }


/*   // Legend styling
  // Get unique cuisine values for each geojson
  const cuisines = data.features.map(feature => feature.properties.cuisine);
  const uniqueCuisines = [...(new Set(cuisines))];
  const rank = data.features.map(feature => feature.properties.rank);

  this.legend.div.innerHTML = "";
  for (const cuisine of uniqueCuisines) {
    this.legend.div.innerHTML +=
        '<i style="background:' + getColor(rank) + '"></i> ' +
        cuisine + '<br>';
} */

  // Extract cuisines and ranks from the GeoJSON data
const cuisines = data.features.map(feature => feature.properties.cuisine);
const uniqueCuisines = [...new Set(cuisines)];

// Create a mapping from cuisine to its rank
const cuisineToRank = {};

// Populate the mapping (assuming each cuisine has a unique rank)
data.features.forEach(feature => {
    const cuisine = feature.properties.cuisine;
    const rank = feature.properties.rank;
    // If a cuisine appears multiple times, ensure the rank is consistent
    if (!(cuisine in cuisineToRank)) {
        cuisineToRank[cuisine] = rank;
    }
});

// Initialize the legend content
this.legend.div.innerHTML = "";

// Iterate over each unique cuisine to add to the legend
uniqueCuisines.forEach(cuisine => {
    const rank = cuisineToRank[cuisine];
    const color = getColor(rank);
    
    // Append the legend item
    this.legend.div.innerHTML +=
        `<i style="background:${color}; width: 18px; height: 18px; display: inline-block; margin-right: 8px;"></i> ${cuisine}<br>`;
});


  // Style point
  function stylePoint(feature) {
    const rank = feature.properties.rank;
    const color = getColor(rank); 
  
    return {
      fillColor: color,
      weight: 1,
      color: 'white',
      fillOpacity: 0.7, 
      interactive: true
    };
  }
  


  const geoJsonLayer = L.geoJSON(data, {
    style: stylePoint, // Apply style to points
    pointToLayer: (feature, latlng) => {
      const color = getColor(feature.properties.rank);
      return L.circleMarker(latlng, {
        radius: 4,
        fillColor: color, 
        color: 'white', 
        weight: 2,
        opacity: 0.2,
        fillOpacity: 5,
      });
    }
  })
    .addTo(this.dataLayer);

    geoJsonLayer.bindTooltip((layer) =>{
      const restaurant = layer.feature.properties.name;
      const cuisine = layer.feature.properties.cuisine;
      const cuisine_group = data.name;
      return `${restaurant} - ${cuisine} - ${cuisine_group}`
      })
    
      
    return geoJsonLayer;
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
    const collection = await this.getSlideFeatureCollection(slide);
    const layer = this.updateDataLayer(collection);

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
