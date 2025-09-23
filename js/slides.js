class SlideDeck {
  constructor(slides, map) {
    this.slides = slides;
    this.map = map;
    this.dataLayer = L.layerGroup().addTo(map);
    this.currentSlideIndex = 0;
    this.scrollCounter = 0;
    this.scrollThreshold = 20;
  }

  updateDataLayer(data, colorField, isPointLayer, slideId) { // this function is written with gpt
    this.dataLayer.clearLayers();

    const geoJsonLayer = L.geoJSON(data, {

      pointToLayer: isPointLayer ? (feature, latlng) => {
        const value = feature.properties[colorField];
        let color;

        switch (slideId) {
          case 'second-slide':
            color = value <= 500 ? '#D3E5FF' :
                            value <= 800 ? '#BDD7E7' :
                            value <= 1100 ? '#6BAED6' :
                            value <= 1400 ? '#3182BD' :
                            value <= 1700 ? '#08519C' : '#003062';
            break;

          case 'third-slide':
            color = value <= 500 ? '#FFF5F0' :
                            value <= 1000 ? '#FEE0D2' :
                            value <= 1500 ? '#FCBBA1' :
                            value <= 2000 ? '#FC9272' :
                            value <= 2500 ? '#FB6A4A' : '#CB181D';
            break;

          default:
            color = '#FFFFFF';
            break;
        }

        return L.circleMarker(latlng, {
          radius: 3,
          fillColor: color,
          color: color,
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8,
        });
      } : null,

      style: !isPointLayer ? (feature) => {
        const value = feature.properties[colorField];
        let color;

        switch (slideId) {
          case 'title-slide':
            color = {
              'B': '#FEDCBC', 'B *': '#FEDCBC', 'B1': '#FEDCBC', 'B1*': '#FEDCBC', 'B2': '#FEBC7A', 'B2*': '#FEBC7A', 'B3': '#FEBC7A', 'B3*': '#FEBC7A', 'B4': '#FEBC7A', 'B4*': '#FEBC7A', 'B5': '#FEBC7A', 'B5*': '#FEBC7A',
              'C': '#BC5F5F', 'C*': '#BC5F5F', 'C *': '#BC5F5F', 'C1': '#BC5F5F', 'C1*': '#BC5F5F', 'C2': '#BC5F5F', 'C2*': '#BC5F5F', 'C3': '#BC5F5F', 'C3*': '#BC5F5F',
              'E0': '#D5B3D5', 'E0*': '#D5B3D5', 'E1': '#D5B3D5', 'E1*': '#D5B3D5', 'E2': '#D5B3D5', 'E2*': '#D5B3D5',
              'H1*': '#9BACD3',
              'J0*': '#B0ACD3', 'J1': '#B0ACD3', 'J1*': '#B0ACD3', 'J2': '#B0ACD3', 'J2*': '#B0ACD3',
              'O': '#DCFE9B', 'O *': '#DCFE9B', 'O1': '#DCFE9B', 'O1*': '#DCFE9B', 'O2': '#DCFE9B', 'O2*': '#DCFE9B', 'O3': '#DCFE9B', 'O3*': '#DCFE9B', 'O4': '#DCFE9B', 'O4*': '#DCFE9B',
              'S': '#FE7A59', 'S *': '#FE7A59', 'S1': '#FE7A59', 'S1*': '#FE7A59', 'S2': '#FE7A59', 'S2*': '#FE7A59', 'S3': '#FE7A59', 'S3*': '#FE7A59',
              'T': '#BCBCBC', 'T *': '#BCBCBC', 'T1': '#BCBCBC', 'T1*': '#BCBCBC', 'T2': '#BCBCBC', 'T2*': '#BCBCBC',
              'V': '#BEE8FF', 'V *': '#BEE8FF',
            }[value] || '#000000';
            break;

          case 'forth-slide': {
            color = value < 6000 ? '#E0BBE4' :
                    value < 20000 ? '#C37DCE' :
                    value < 30000 ? '#9C4E9B' :
                    value < 45000 ? '#6A1B76' : '#4A0072';
          }
            break;
          default:
            color = '#000000';
            break;
        }

        return {
          fillColor: color,
          color: color,
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8,
        };
      } : null,
    }).bindTooltip((l) => l.feature.properties.label)
        .addTo(this.dataLayer);

    return geoJsonLayer;
  }


  async getSlideFeatureCollection(slide) {
    const resp = await fetch(`data/${slide.id}.json`);
    const data = await resp.json();
    return data;
  }

  hideAllSlides() {
    for (const slide of this.slides) {
      slide.classList.add('hidden');
    }
  }

  async syncMapToSlide(slide) {
    const collection = await this.getSlideFeatureCollection(slide);
    const colorField = slide.getAttribute('data-color-field');
    const slideId = slide.id;
    const isPointLayer = slide.id === 'second-slide' || slide.id === 'third-slide';
    const layer = this.updateDataLayer(collection, colorField, isPointLayer, slideId);


    const boundsFromBbox = (bbox) => {
      const [west, south, east, north] = bbox;
      const bounds = L.latLngBounds(
          L.latLng(south, west),
          L.latLng(north, east),
      );
      return bounds;
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

  syncMapToCurrentSlide() {
    const slide = this.slides[this.currentSlideIndex];
    this.syncMapToSlide(slide);
  }

  goNextSlide() {
    this.currentSlideIndex++;

    if (this.currentSlideIndex === this.slides.length) {
      this.currentSlideIndex = 0;
    }

    this.syncMapToCurrentSlide();
  }

  goPrevSlide() {
    this.currentSlideIndex--;

    if (this.currentSlideIndex < 0) {
      this.currentSlideIndex = this.slides.length - 1;
    }

    this.syncMapToCurrentSlide();
  }


  preloadFeatureCollections() {
    for (const slide of this.slides) {
      this.getSlideFeatureCollection(slide);
    }
  }


  calcCurrentSlideIndex() {
    const scrollPos = window.scrollY;
    const windowHeight = window.innerHeight;

    let i=0;
    for (i; i < this.slides.length; i++) {
      const slidePos =
          this.slides[i].offsetTop - scrollPos + windowHeight * 0.7;
      if (slidePos >= 0) {
        break;
      }
    }

    if (i !== this.currentSlideIndex) {
      this.scrollCounter++;
      if (this.scrollCounter >= this.scrollThreshold) {
        this.currentSlideIndex = i;
        this.scrollCounter = 0; // need debug
        this.syncMapToCurrentSlide();
      }
    }
  }
}

export { SlideDeck };
