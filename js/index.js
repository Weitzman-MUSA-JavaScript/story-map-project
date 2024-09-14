import { SlideDeck } from './slidedeck.js';

const map = L.map('map', {scrollWheelZoom: false}).setView([0, 0], 0);

const mapboxStyle = 'mapbox/light-v11';
const mapboxKey = 'pk.eyJ1IjoiZW16aG91IiwiYSI6ImNtMG9henVrdjA2bGwya3EwNWh6OGh1emgifQ.d2Xo2TLSYAGCMqvccySJSA';

const baseTileLayer = L.tileLayer(
    `https://api.mapbox.com/styles/v1/${mapboxStyle}/tiles/{z}/{x}/{y}{r}?access_token=${mapboxKey}`,
    {
      maxZoom: 16,
      attribution: '&copy; <a href="https://www.mapbox.com/" target="_blank">Mapbox</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
      tileSize: 512,
      zoomOffset: -1,
    },
);
baseTileLayer.addTo(map);

// ## Interface Elements
const slides = document.querySelectorAll('.slide');

// ## The SlideDeck object
const deck = new SlideDeck(slides, map);

document.addEventListener('scroll', () => deck.calcCurrentSlideIndex());

deck.preloadFeatureCollections();
deck.syncMapToCurrentSlide();
