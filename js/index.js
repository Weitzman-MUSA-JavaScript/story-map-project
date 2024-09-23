import { SlideDeck } from './slidedeck.js';

const mapElement = document.querySelector('#map');
var map = L.map(mapElement).setView([35.652, 139.839], 5);

const mapboxKey = 'pk.eyJ1IjoiZWNoaW5saSIsImEiOiJjbTEybWVsY3kwZW1nMmxwbTY4bGx1dDM1In0.Cncmmjeonp1yp1AXZrOqvQ'
const mapboxStyle = 'echinli/cm1ekw8xv013701pc62pr00jo'
// ## The Base Tile Layer
const baseTileLayer = L.tileLayer(`http://api.mapbox.com/styles/v1/${mapboxStyle}/tiles/512/{z}/{x}/{y}?access_token=${mapboxKey}`, {
  tileSize: 512,
  zoomOffset: -1,
  maxZoom: 16,
  attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
});
baseTileLayer.addTo(map);

// ## Interface Elements
const slides = document.querySelectorAll('.slide');

// ## The SlideDeck object
const deck = new SlideDeck(slides, map);

document.addEventListener('scroll', () => deck.calcCurrentSlideIndex());

deck.preloadFeatureCollections();
deck.syncMapToCurrentSlide();
