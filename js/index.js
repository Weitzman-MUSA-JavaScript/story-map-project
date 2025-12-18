import { SlideDeck } from './slidedeck.js';
const map = L.map('map', {scrollWheelZoom: false}).setView([35.9, -110.5], 9); 

// ## The Base Tile Layer
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/512/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoieGlhb3lvLXUiLCJhIjoiY21mZWMyOG8zMDU3eDJpcTV1ZTc3bTk4aiJ9.5llx8QlyUtZfoA2n9GDH9g', {
    maxZoom: 19,
    tileSize: 512,
    zoomOffset: -1,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// ## Interface Elements
const container = document.querySelector('.slide-section');
const slides = document.querySelectorAll('.slide');

const slideOptions = {
    'title-slide': {
    style: (feature) => {
      return feature.properties.NAME?.includes("Hopi") 
        ? { color: '#fff', weight: 1 }
        : { color: '#8F372E', weight: 0.7, fillColor: '#8F372E', fillOpacity: 0.7 };
    },
    onEachFeature: (feature, layer) => {
      layer.bindTooltip(feature.properties.label); 
    },
  },


'second-slide': {
    pointToLayer: (feature, latlng) => {
      return L.marker(latlng, {
        icon: L.divIcon({
          className: 'custom-cross', 
          html: '+',                  
          iconSize: [20,20],         
          iconAnchor: [10, 10],       
        })
      });
    },
    onEachFeature: (feature, layer) => {
      layer.bindTooltip(feature.properties.label);
    },
  },

'third-slide': {
    pointToLayer: (feature, latlng) => {
      return L.marker(latlng, {
        icon: L.divIcon({
          className: 'custom-cross1', 
          html: '+',                  
          iconSize: [20,20],         
          iconAnchor: [10, 10],       
        })
      });
    },
    onEachFeature: (feature, layer) => {
      layer.bindTooltip(feature.properties.label);
    },
  },

  'fourth-slide': {
    pointToLayer: (feature, latlng) => {
      return L.marker(latlng, {
        icon: L.divIcon({
          className: 'custom-cross', 
          html: '+',                  
          iconSize: [20,20],         
          iconAnchor: [10, 10],       
        })
      });
    },
    onEachFeature: (feature, layer) => {
      layer.bindTooltip(feature.properties.label);
    },
  },

   'fifth-slide': {
    pointToLayer: (feature, latlng) => {
      return L.marker(latlng, {
        icon: L.divIcon({
          className: 'custom-cross', 
          html: '+',                  
          iconSize: [20,20],         
          iconAnchor: [10, 10],       
        })
      });
    },
    onEachFeature: (feature, layer) => {
      layer.bindTooltip(feature.properties.label);
    },
  },

  'sixth-slide': {
    pointToLayer: (feature, latlng) => {
      return L.marker(latlng, {
        icon: L.divIcon({
          className: 'custom-cross', 
          html: '+',                  
          iconSize: [20,20],         
          iconAnchor: [10, 10],       
        })
      });
    },
    onEachFeature: (feature, layer) => {
      layer.bindTooltip(feature.properties.label);
    },
  },
};




// ## The SlideDeck object
const deck = new SlideDeck(container, slides, map, slideOptions);

document.addEventListener('scroll', () => deck.calcCurrentSlideIndex());

deck.preloadFeatureCollections();
deck.syncMapToCurrentSlide();




const carousels = document.querySelectorAll('.carousel-track');

carousels.forEach(track => {
  const items = track.querySelectorAll('.carousel-item');
  let index = 0;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  // Scroll to switch
  track.addEventListener('wheel', e => {
    e.preventDefault();
    index = e.deltaY > 0
      ? (index + 1) % items.length
      : (index - 1 + items.length) % items.length;
    update();
  }, { passive: false });

  // Click to switch
  items.forEach(item => item.addEventListener('click', () => {
    index = (index + 1) % items.length;
    update();
  }));
});