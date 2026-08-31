/**
 * A slide deck object
 */
class SlideDeck {

  /**
   * Constructor for the SlideDeck object.
   * @param {NodeList} slides A list of HTML elements containing the slide text.
   * @param {L.map} map The Leaflet map where data will be shown.
   */
  constructor(container, slides, map, layerType) {
    this.container = container;
    this.slides = slides;
    this.map = map;
    this.layerType = layerType;  // Store layerType here

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

  updateDataLayer0(data) {
    this.dataLayer.clearLayers();
    
    const geoJsonLayer = L.geoJSON(data, {
      pointToLayer: function (feature, latlng) {
        // 从 feature 的属性中获取 country 名称
        const country = feature.properties.country;
        
        // 使用 country 名称作为图标文件名
        const iconUrl = `data/icon/${country}.png`; // 替换为实际图标路径
  
        // 创建自定义图标
        const icon = L.icon({
          iconUrl: iconUrl,
          iconSize: [48, 48],         // 设置图标的尺寸
          iconAnchor: [24, 48],       // 设置图标的锚点位置
          popupAnchor: [0, -48]       // 设置弹出框位置
        });
  
        // 使用自定义图标创建 Marker
        return L.marker(latlng, { icon: icon });
      }
    })
    .bindTooltip((l) => l.feature.properties.city) // 为每个点添加 Tooltip
    .addTo(this.dataLayer); // 添加到 dataLayer

    fetch('data/shoppingRoutes.geojson')
        .then(response => response.json())
        .then(data => {
          const lineLayer = L.geoJSON(data, {
            // Add style and behavior options here                      
            style: function (feature) {
              if (feature.geometry.type === "LineString" || feature.geometry.type === "MultiLineString") {
                return {
                  color: "#5d2521",
                  weight: 2
                };
              }
            },
            
          }).addTo(this.dataLayer);
        });  
  
    return geoJsonLayer;
  }
  


  updateDataLayer1(data) {
    this.dataLayer.clearLayers();
    const geoJsonLayer = L.geoJSON(data, {
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
          radius: 1.5,
          fillColor: "#252525",
          color: "#252525",
          weight: 1,
          opacity: 1,
          fillOpacity: 1
        });
      },
      onEachFeature: function (feature, layer) {            
        layer.bindTooltip(feature.properties.label , {
          permanent: true,     
          direction: 'top',  
          className: 'label-tooltip',
        });              
      }
    })
        .addTo(this.dataLayer);
      
        fetch('data/silkroad route.geojson')
        .then(response => response.json())
        .then(data => {
          const lineLayer = L.geoJSON(data, {
            // Add style and behavior options here                      
            style: function (feature) {
              if (feature.geometry.type === "LineString" || feature.geometry.type === "MultiLineString") {
                return {
                  color: "#5d2521",
                  weight: 1
                };
              }
            },
            
          }).addTo(this.dataLayer);
        });  

    return geoJsonLayer;
  }


  updateDataLayer2(data) {
    this.dataLayer.clearLayers();
    const geoJsonLayer = L.geoJSON(data, {
    // pointToLayer: (p, latlng) => L.marker(latlng),
    
    // style: (feature) => feature.properties.style,
    style: function (feature) {
        if (feature.geometry.type === "MultiPolygon") {
          return {
            color: "#A67B5B",  // 边框颜色
            weight: 1,         // 边框宽度
            opacity: 1,        // 边框透明度
            fillColor: "#A67B5B",  // 填充颜色
            fillOpacity: 0.4   // 填充透明度
          };
        }
      },

    })
        .addTo(this.dataLayer);

        fetch('data/silkroad route.geojson')
        .then(response => response.json())
        .then(data => {
          const lineLayer = L.geoJSON(data, {
            // Add style and behavior options here                      
            style: function (feature) {
              if (feature.geometry.type === "LineString" || feature.geometry.type === "MultiLineString") {
                return {
                  color: "#5d2521",
                  weight: 1
                };
              }
            },
            
          }).addTo(this.dataLayer);
        });
        fetch('data/silkroad city.geojson')
        .then(response => response.json())
        .then(data => {
          const pointLayer = L.geoJSON(data, {
            // Add style and behavior options here
            pointToLayer: function (feature, latlng) {
              return L.circleMarker(latlng, {
                radius: 1.5,
                fillColor: "#252525",
                color: "#252525",
                weight: 1,
                opacity: 1,
                fillOpacity: 1
              });
            },
            
            onEachFeature: function (feature, layer) {            
                layer.bindTooltip(feature.properties.label , {
                  permanent: true,     
                  direction: 'top',  
                  className: 'label-tooltip'
                });              
            }
          }).addTo(this.dataLayer);
        });

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
    const resp = await fetch(`data/${slide.id}.geojson`);
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
   * @param {number|string} layerType The type of layer to update (e.g., 1, 2, or 3) 
  */
  async syncMapToSlide(slide, layerType) {
    const collection = await this.getSlideFeatureCollection(slide);
    // const layer = this.updateDataLayer(collection);  
    // Select the appropriate update function based on layerType
  let layer;
  switch (layerType) {
    case 0:
      layer = this.updateDataLayer0(collection);
      break;
    case 1:
      layer = this.updateDataLayer1(collection);
      break;
    case 2:
      layer = this.updateDataLayer2(collection);
      break;
    
    default:
      console.error('Invalid layerType specified');
      return;
  }
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

    const fitOptions = {
      duration: 2,
      easeLinearity: 2,
    };

    this.map.addEventListener('moveend', handleFlyEnd);
     if (collection.bbox){
      this.map.flyToBounds(boundsFromBbox(collection.bbox), fitOptions);
    } else{
      this.map.flyToBounds(layer.getBounds(), fitOptions);
    }
  }

  /**
   * Show the slide with ID matched by currentSlideIndex. If currentSlideIndex is
   * null, then show the first slide.
   */
  // syncMapToCurrentSlide() {
  //   const slide = this.slides[this.currentSlideIndex];
  //   this.syncMapToSlide(slide);
  // }
  syncMapToCurrentSlide(layerType) {
    const slide = this.slides[this.currentSlideIndex];
    if (slide) {
      this.syncMapToSlide(slide,layerType);
    }
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


  calcCurrentSlideIndex() {
    const scrollPos = window.scrollY - this.container.offsetTop;
    const windowHeight = window.innerHeight;
  
    let i;
    for (i = 0; i < this.slides.length; i++) {
      const slidePos = this.slides[i].offsetTop - scrollPos + windowHeight * 0.7;
      if (slidePos >= 0) {
        break;
      }
    }
  
    // Only update if `i` is within bounds and different from currentSlideIndex
    if (i !== this.currentSlideIndex && i < this.slides.length) {
      this.currentSlideIndex = i;
      this.syncMapToCurrentSlide(this.layerType);
    }
  }
  
}

export { SlideDeck };
