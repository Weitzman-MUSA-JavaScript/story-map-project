import { SlideDeck } from './slidedeck.js';

const map = L.map('map', {scrollWheelZoom: false}).setView([0, 0], 0);


const baseTileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZW16aG91IiwiYSI6ImNtMG9henVrdjA2bGwya3EwNWh6OGh1emgifQ.d2Xo2TLSYAGCMqvccySJSA', {
  maxZoom: 16,
  attribution: '&copy; <a href="https://www.mapbox.com/" target="_blank">Mapbox</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
  id: 'mapbox/streets-v11', // You can change this to any Mapbox style
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiZW16aG91IiwiYSI6ImNtMG9henVrdjA2bGwya3EwNWh6OGh1emgifQ.d2Xo2TLSYAGCMqvccySJSA',
});
baseTileLayer.addTo(map);

// ## Interface Elements
const slides = document.querySelectorAll('.slide');

// ## The SlideDeck object
const deck = new SlideDeck(slides, map);

document.addEventListener('scroll', () => deck.calcCurrentSlideIndex());

deck.preloadFeatureCollections();
deck.syncMapToCurrentSlide();
