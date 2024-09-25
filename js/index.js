import { SlideDeck } from './slidedeck.js';

// const map = L.map('map', {scrollWheelZoom: false}).setView([0, 0], 0);

const mapElement = document.querySelector('#map');
const map = L.map(mapElement, {maxZoom: 18, zoomsnap: 0, scrollWheelZoom: false}).setView([1.3521, 103.8198], 12);
const mapboxKey = 'pk.eyJ1Ijoic2Vhbm1rb2giLCJhIjoiY20weGI2bm8zMGJmOTJqcHEzeTRnZXEwcCJ9.8OStU7WetpCxZ9YiUCiigA';
const mapboxStyle = 'mapbox/dark-v11';

L.tileLayer(`https://api.mapbox.com/styles/v1/${mapboxStyle}/tiles/512/{z}/{x}/{y}{r}?access_token=${mapboxKey}`, {
  tileSize: 512,
  zoomOffset: -1,
  detectRetina: true,
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// ## Interface Elements
const slides = document.querySelectorAll('.slide');

// ## The SlideDeck object
const deck = new SlideDeck(slides, map);

document.addEventListener('scroll', () => {
  const yearDisplay = document.getElementById('year-display');
  yearDisplay.innerHTML = `${deck.getCurrentYear()}`;
  deck.calcCurrentSlideIndex();
});

deck.preloadFeatureCollections();
deck.syncMapToCurrentSlide();
