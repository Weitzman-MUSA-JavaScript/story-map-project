import { SlideDeck } from './slidedeck.js';
const SmoothRenderer = L.SVG.extend({
  // Override the default _onZoom function, which simply scales the lower
  // resolution shapes. Instead, we want to reproject the shapes at each new
  // zoom level, as is done by default when zooming ends.
  _onZoom: function () {
    this._onZoomEnd();
    this._update();
  },
});

const map = L.map('map', { renderer: new SmoothRenderer(), scrollWheelZoom: false }).setView([0, 0], 0);

// ## The Base Tile Layer
const baseTileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png?key=cb1_3nr5_1_a495e7b51cea217486734425', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
});
baseTileLayer.addTo(map);

// ## Interface Elements
const container = document.querySelector('.slide-section');
const slides = document.querySelectorAll('.slide');
const slideOptions = {
  'second-slide': {
    style: (feature) => {
      return {
        color: '#722F37',
        fillColor: '#9B2226',
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
        color: '#722F37',
        fillColor: '#9B2226',
        fillOpacity: 0.5,
      };
    },
    onEachFeature: (feature, layer) => {
      layer.bindTooltip(feature.properties.label);
    },
  },

  'forth-slide': {
    style: (feature) => {
      return {
        color: '#B8860B',
        fillColor: '#F3E5AB',
        fillOpacity: 0.5,
      };
    },
    onEachFeature: (feature, layer) => {
      layer.bindTooltip(feature.properties.label);
    },
  },

  'fifth-slide': {
    style: (feature) => {
      return {
        color: '#722F37',
        fillColor: '#9B2226',
        fillOpacity: 0.5,
      };
    },
    onEachFeature: (feature, layer) => {
      layer.bindTooltip(feature.properties.label);
    },
  },

  'sixth-slide': {
    style: (feature) => {
      return {
        color: '#C5A059',
        fillColor: '#FFFDD0',
        fillOpacity: 0.5,
      };
    },
    onEachFeature: (feature, layer) => {
      layer.bindTooltip(feature.properties.label);
    },
  },

  'seventh-slide': {
    style: (feature) => {
      return {
        color: '#C5A059',
        fillColor: '#FFFDD0',
        fillOpacity: 0.5,
      };
    },
    onEachFeature: (feature, layer) => {
      layer.bindTooltip(feature.properties.label);
    },
  },

  'eighth-slide': {
    style: (feature) => {
      return {
        color: '#2D6A4F',
        fillColor: '#74C69D',
        fillOpacity: 0.5,
      };
    },
    onEachFeature: (feature, layer) => {
      layer.bindTooltip(feature.properties.label);
    },
  },

  'ninth-slide': {
    style: (feature) => {
      return {
        color: '#2D6A4F',
        fillColor: '#74C69D',
        fillOpacity: 0.5,
      };
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
