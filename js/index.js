import { SlideDeck } from './slidedeck.js';

const map = L.map('map', {scrollWheelZoom: false}).setView([39.95, -75.16], 10);

// ## The Base Tile Layer
const baseTileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  maxZoom: 16,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
});
baseTileLayer.addTo(map);

// ## Interface Elements
const container = document.querySelector('.slide-section');
const slides = document.querySelectorAll('.slide');

/**
 * Defines colors to be used.
 * @param {string} category The feature attribute relevant for determining color.
 * @return {function} Function specifying color to use.
 */
function getColor(category) {
  return category === 'Eliminated' ? '#800026' :
  category === 'Shortened' ? '#e3ae0cff' :
  category === 'Remaining' ? '#9b9696ff' :
  '#FFFFFF';
}

/**
 * Defines default options for styling features.
 * @param {string} feature The geojson feature.
 * @return {function} Function specifying color to use.
 */
function standardOptions(feature) {
  return {
    color: getColor(feature.properties.cut_status),
    colorOpacity: 0.5,
    weight: 2,
  };
}

const slideOptions = {
  'overall_network': {style: standardOptions},
  'reduced_network': {style: standardOptions},
  'eliminated_routes': {style: standardOptions},
  'shortened_routes_before': {style: standardOptions},
  'shortened_routes_after': {style: standardOptions},
  'remaining_network': {style: standardOptions},
  'regional_rail_cuts': {style: standardOptions},
};

// ## The SlideDeck object
const deck = new SlideDeck(container, slides, map, slideOptions);

document.addEventListener('scroll', () => deck.calcCurrentSlideIndex());

deck.preloadFeatureCollections();
deck.syncMapToCurrentSlide();
