import { SlideDeck } from './slidedeck.js';

const map = L.map('map', {scrollWheelZoom: false}).setView([39.95, -75.16], 12);
const Mapboxkey = 'pk.eyJ1IjoibWp1bWJlLXRlc3QiLCJhIjoiY2w3ZTh1NTIxMTgxNTQwcGhmODU2NW5kaSJ9.pBPd19nWO-Gt-vTf1pOHBA';
const Mapboxstyle = 'mapbox/light-v11';

const baseTileLayer = L.tileLayer(`https://api.mapbox.com/styles/v1/${Mapboxstyle}/tiles/512/{z}/{x}/{y}{r}?access_token=${Mapboxkey}`, {
  maxZoom: 16,
});

baseTileLayer.addTo(map);

// ## Interface Elements
const container = document.querySelector('.slide-section');
const slides = document.querySelectorAll('.slide');

// ## The SlideDeck object
const deck = new SlideDeck(container, slides, map);

document.addEventListener('scroll', () => deck.calcCurrentSlideIndex());

deck.preloadFeatureCollections();
deck.syncMapToCurrentSlide();
