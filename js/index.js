import { SlideDeck } from './slidedeck.js';

const map = L.map('map', {scrollWheelZoom: false}).setView([0, 0], 0);

// ## The Base Tile Layer
const mapboxStyle = 'mapbox/streets-v12';
const mapboxKey = 'pk.eyJ1IjoidHV0dXRpbmQiLCJhIjoiY20weThlMHN1MDE5ZTJtcHZ6NWZ3cHZ0OSJ9.Lkd2ywOlbefcS46ePd5tuA';

const baseLayer = L.tileLayer(
    `https://api.mapbox.com/styles/v1/${mapboxStyle}/tiles/{z}/{x}/{y}{r}?access_token=${mapboxKey}`,
    { zoomOffset: -1, tileSize: 512 },
);
baseLayer.addTo(map);

// ## Interface Elements
const slides = document.querySelectorAll('.slide');

const slideOptions = {
  'phase1to3': {
    style: (feature) => {
      return {
        color: 'purple',
        fillColor: 'purple',
        fillOpacity: 0.5,
      };
    },
  },
  'phase1': {
    style: (feature) => {
      return {
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.5,
      };
    },
  },
  'done': {
    style: (feature) => {
      return {
        color: 'green',
        fillColor: 'green',
        fillOpacity: 0.5,
      };
    },
  },
  'not_done': {
    style: (feature) => {
      return {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.5,
      };
    },
  },
  'not_done_ex': {
    style: (feature) => {
      return {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.5,
      };
    },
  },
  'phase2': {
    style: (feature) => {
      return {
        color: 'orange',
        fillColor: 'orange',
        fillOpacity: 0.5,
      };
    },
  },
  'phase3': {
    style: (feature) => {
      return {
        color: 'turquoise',
        fillColor: 'turquoise',
        fillOpacity: 0.5,
      };
    },
  },
};

// ## The SlideDeck object
const deck = new SlideDeck(slides, map, slideOptions);

document.addEventListener('scroll', () => deck.calcCurrentSlideIndex());

deck.preloadFeatureCollections();
deck.syncMapToCurrentSlide();
