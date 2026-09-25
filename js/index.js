import { SlideDeck } from './slidedeck.js';

const map = L.map('map', { scrollWheelZoom: false }).setView([39.9526, -75.1652], 11);

// ## The Base Tile Layer
const baseTileLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 16,
  attribution: 'Tiles &copy; Esri',
});
baseTileLayer.addTo(map);

// ## Interface Elements
const container = document.querySelector('.slide-section');
const slides = document.querySelectorAll('.slide');

const slideOptions = {
  'rise-1ft': {
    style: () => ({
      color: '#7aa6c2',
      fillColor: '#d6e6f2',
      fillOpacity: 0.7,
      weight: 1,
    }),
  },

  'rise-2ft': {
    style: () => ({
      color: '#5f8fb2',
      fillColor: '#b8d5e8',
      fillOpacity: 0.7,
      weight: 1,
    }),
  },

  'rise-3ft': {
    style: () => ({
      color: '#477aa4',
      fillColor: '#8ebbd7',
      fillOpacity: 0.7,
      weight: 1,
    }),
  },

  'rise-4ft': {
    style: () => ({
      color: '#326597',
      fillColor: '#609cc6',
      fillOpacity: 0.7,
      weight: 1,
    }),
  },

  'rise-5ft': {
    style: () => ({
      color: '#204e7d',
      fillColor: '#397cad',
      fillOpacity: 0.7,
      weight: 1,
    }),
  },

  'rise-6ft': {
    style: () => ({
      color: '#102f5c',
      fillColor: '#174f87',
      fillOpacity: 0.75,
      weight: 1,
    }),
  },

  'comparison': {
    style: (feature) => {
      const colors = {
        1: '#d6e6f2',
        2: '#b8d5e8',
        3: '#8ebbd7',
        4: '#609cc6',
        5: '#397cad',
        6: '#174f87',
      };

      return {
        color: colors[feature.properties.slr_ft],
        fillColor: colors[feature.properties.slr_ft],
        fillOpacity: 0.09,
        weight: 0.5,
      };
    },
  },
  'conclusion': { style: (feature) => {
    const colors = {
      1: '#d6e6f2',
      2: '#b8d5e8',
      3: '#8ebbd7',
      4: '#609cc6',
      5: '#397cad',
      6: '#174f87',
    };

    return {
      color: colors[feature.properties.slr_ft],
      fillColor: colors[feature.properties.slr_ft],
      fillOpacity: 0.09,
      weight: 0.5,
    };
  },
  },
};

// ## The SlideDeck object
const deck = new SlideDeck(container, slides, map, slideOptions);

document.addEventListener('scroll', () => deck.calcCurrentSlideIndex());

deck.preloadFeatureCollections();
deck.syncMapToCurrentSlide();
