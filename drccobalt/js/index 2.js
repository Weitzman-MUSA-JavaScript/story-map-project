import { SlideDeck } from './slidedeck.js';

const map = L.map('map', {scrollWheelZoom: false}).setView([0, 0], 5);
const Mapboxkey = 'pk.eyJ1IjoiYWF2YW5pMTAzIiwiYSI6ImNtMTgxOGkyZzBvYnQyam16bXFydTUwM3QifQ.hXw8FwWysnOw3It_Sms3UQ'
const Mapboxstyle = 'mapbox/dark-v11'

// ## The Base Tile Layer
const baseTileLayer = L.tileLayer(`https://api.mapbox.com/styles/v1/${Mapboxstyle}/tiles/512/{z}/{x}/{y}{r}?access_token=${Mapboxkey}`, {
  maxZoom: 16
});

baseTileLayer.addTo(map);

/// ## Interface Elements
const container = document.querySelector('.slide-section');
const slides = document.querySelectorAll('.slide');

const slideOptions = {
  'title-slide': {
    style: (feature) => {
      return {
        color: 'white',
        fillColor: 'gray',
        fillOpacity: 0.2,
      };
    },
  },
  'second-slide': {
    pointToLayer: (feature, latlng) => {
      return L.circleMarker(latlng, {
        radius: 8,
        fillColor: 'white',
        color: 'black',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      });
    }
  },
  'third-slide': {
    pointToLayer: (feature, latlng) => {
      return L.circleMarker(latlng, {
        radius: 8,
        fillColor: 'white',
        color: 'black',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      });
    }
  },
  'fourth-slide': {
    pointToLayer: (feature, latlng) => {
      return L.circleMarker(latlng, {
        radius: 8,
        fillColor: 'white',
        color: 'black',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      });
    }
  },
  'fifth-slide': {
    style: (feature) => {
      return {
        color: 'white',
        fillColor: 'gray',
        fillOpacity: 0.2,
      };
    },
  },
  'sixth-slide': {
    style: (feature) => {
      return {
        color: 'white',
        fillColor: 'gray',
        fillOpacity: 0.2,
      };
    },
  },
  'seventh-slide': {
    pointToLayer: (feature, latlng) => {
      return L.circleMarker(latlng, {
        radius: 8,
        fillColor: 'white',
        color: 'black',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      });
    }
  },
  'eight-slide': {
    pointToLayer: (feature, latlng) => {
      return L.circleMarker(latlng, {
        radius: 8,
        fillColor: 'white',
        color: 'black',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      });
    }
  },
  'ninth-slide': {
    pointToLayer: (feature, latlng) => {
      return L.circleMarker(latlng, {
        radius: 8,
        fillColor: 'white',
        color: 'black',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      });
    }
  },
  'tenth-slide': {
    pointToLayer: (feature, latlng) => {
      return L.circleMarker(latlng, {
        radius: 8,
        fillColor: 'white',
        color: 'black',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      });
    }
  },
};

// ## The SlideDeck object
const deck = new SlideDeck(container, slides, map, slideOptions);

document.addEventListener('scroll', () => deck.calcCurrentSlideIndex());

deck.preloadFeatureCollections();
deck.syncMapToCurrentSlide();
