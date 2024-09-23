import { SlideDeck } from './slidedeck.js';
require('dotenv').config();

const map = L.map('map', {scrollWheelZoom: false}).setView([0, 0], 0);
const Mapboxkey = process.env.MAPBOX_API_KEY;
const Mapboxstyle = 'mapbox/dark-v11'

// ## The Base Tile Layer
const baselayer = L.tileLayer(`https://api.mapbox.com/styles/v1/${Mapboxstyle}/tiles/512/{z}/{x}/{y}{r}?access_token=${Mapboxkey}`,
{zoomOffset: -1, tileSize: 512}
);
baselayer.addTo(map);

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
  },
  'third-slide': {
    style: (feature) => {
      return {
        color: 'blue',
        fillColor: 'yellow',
        fillOpacity: 0.5,
      };
    },
  },
};

// ## The SlideDeck object
const deck = new SlideDeck(container, slides, map);

document.addEventListener('scroll', () => deck.calcCurrentSlideIndex());

deck.preloadFeatureCollections();
deck.syncMapToCurrentSlide();
