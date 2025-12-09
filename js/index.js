import { SlideDeck } from './slidedeck.js';
// adjust for the view to start in Philadelphia instead of World
// const map = L.map('map').setView([0, 0], 0);
const map = L.map('map').setView([39.9526, -75.1652], 13);


// ## The Base Tile Layer
// Changing the default base map
// CARTO Light Map
L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    {
      maxZoom: 19,
      attribution:
      '&copy; OpenStreetMap contributors &copy; CARTO',
    },
).addTo(map);

// Stadia map
/** L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}.png',
  {
    maxZoom: 20,
    attribution: '&copy; OSM &copy; Stadia Maps'
  }
).addTo(map); */


/** const baseTileLayer = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg', {
  maxZoom: 16,
  attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
});
baseTileLayer.addTo(map); */

// ## Interface Elements
const slides = document.querySelectorAll('.slide');
const slidePrevButton = document.querySelector('#prev-slide');
const slideNextButton = document.querySelector('#next-slide');

const slideOptions = {}; // now nothing special per slide


// ## The SlideDeck object
const deck = new SlideDeck(slides, map, slideOptions);

slidePrevButton.addEventListener('click', () => deck.goPrevSlide());
slideNextButton.addEventListener('click', () => deck.goNextSlide());

deck.preloadFeatureCollections();
deck.showCurrentSlide();
