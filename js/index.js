import { SlideDeck } from './slidedeck.js';

const map = L.map('map', { scrollWheelZoom: false }).setView([1.3521, 103.8198], 12);
const mapboxKey = 'pk.eyJ1IjoieWp0aSIsImEiOiJjbXR1amNmYm0wbDYxMndvaXN4eTJvMDRkIn0.bNNFtykpp1aHpvlsFUJ3YA'
const mapboxStyle = 'mapbox/dark-v11'

// ## The Base Tile Layer
const baseTileLayer = L.tileLayer(`https://api.mapbox.com/styles/v1/${mapboxStyle}/tiles/512/{z}/{x}/{y}{r}?access_token=${mapboxKey}`, {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
baseTileLayer.addTo(map);

// ## Interface Elements
const container = document.querySelector('.slide-section');
const slides = document.querySelectorAll('.slide');

const slideOptions = {
  'second-slide': {
    style: (feature) => {
      return {
        color: 'red',
        fillColor: 'green',
        fillOpacity: 0.5,
      };
    },
    onEachFeature: (feature, layer) => {
      layer.bindTooltip(feature.properties.label);
    },
  },
  'third-slide': {
    style: (feature) => {
      return {
        color: 'blue',
        fillColor: 'yellow',
        fillOpacity: 0.5,
      };
    },
    onEachFeature: (feature, layer) => {
      layer.bindTooltip(feature.properties.label);
    },
  },
  'hawker_maxwell': {
    pointToLayer: (feature, latlng) => L.circleMarker(latlng, {
      radius: 7,
      color: '#ffffff',
      weight: 2,
      fillColor: '#f08a24',
      fillOpacity: 0.9,
    }),

    onEachFeature: (feature, layer) => {
      const name = feature.properties.NAME;
      const url = feature.properties.PHOTOURL?.replace(/^http:/, 'https:')
      const address = feature.properties.ADDRESS_MYENV;
      const addressMarkup = address
        ? `<h2>${address}</h2>`
        : '';

      layer.bindTooltip(`<div class="tooltip-content">
                <img class="hawker-photo" src="${url}" alt="">
                <h1>${name}</h1>
                ${addressMarkup}
            </div>
        `, {
        direction: 'top',
        sticky: true,
        className: 'hawker-tooltip',
      });
    },
  },
  'hawker_1970s': {
    pointToLayer: (feature, latlng) => L.circleMarker(latlng, {
      radius: 7,
      color: '#ffffff',
      weight: 2,
      fillColor: '#f08a24',
      fillOpacity: 0.9,
    }),

    onEachFeature: (feature, layer) => {
      const name = feature.properties.NAME;
      const url = feature.properties.PHOTOURL?.replace(/^http:/, 'https:')
      const address = feature.properties.ADDRESS_MYENV;
      const addressMarkup = address
        ? `<h2>${address}</h2>`
        : '';

      layer.bindTooltip(`<div class="tooltip-content">
                <img class="hawker-photo" src="${url}" alt="">
                <h1>${name}</h1>
                ${addressMarkup}
            </div>
        `, {
        direction: 'top',
        sticky: true,
        className: 'hawker-tooltip',
      });
    },
  },
  'hawker_present': {
    pointToLayer: (feature, latlng) => L.circleMarker(latlng, {
      radius: 7,
      color: '#ffffff',
      weight: 2,
      fillColor: '#f08a24',
      fillOpacity: 0.9,
    }),

    onEachFeature: (feature, layer) => {
      const name = feature.properties.NAME;
      const url = feature.properties.PHOTOURL?.replace(/^http:/, 'https:')
      const address = feature.properties.ADDRESS_MYENV;
      const addressMarkup = address
        ? `<h2>${address}</h2>`
        : '';

      layer.bindTooltip(`<div class="tooltip-content">
                <img class="hawker-photo" src="${url}" alt="">
                <h1>${name}</h1>
                ${addressMarkup}
            </div>
        `, {
        direction: 'top',
        sticky: true,
        className: 'hawker-tooltip',
      });
    },
  },
};

// ## The SlideDeck object
const deck = new SlideDeck(container, slides, map, slideOptions);

document.addEventListener('scroll', () => deck.calcCurrentSlideIndex());

deck.preloadFeatureCollections();
deck.syncMapToCurrentSlide();
