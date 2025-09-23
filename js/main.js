import { SlideDeck } from './slides.js';

const mapElement = document.querySelector('#MapBox');

const MapBox = L.map(mapElement, {maxZoom: 13, minZoom: 12}).setView([55.67, 12.55], 12);

const mapboxKey = 'pk.eyJ1IjoiYXNobGV5MjAyNCIsImEiOiJjbTB5YnIxbGcwbWRjMmxvZXgxcDByNHMyIn0.PcNKFY-I3-mGCV1w1t3DhA';
const mapboxStyle = 'mapbox/light-v11';

L.tileLayer(`https://api.mapbox.com/styles/v1/${mapboxStyle}/tiles/512/{z}/{x}/{y}{r}?access_token=${mapboxKey}`, {
  tileSize: 512,
  zoomOffset: -1,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(MapBox);


const slides = document.querySelectorAll('.slide');
const deck = new SlideDeck(slides, MapBox);

document.addEventListener('scroll', () => deck.calcCurrentSlideIndex());

deck.preloadFeatureCollections();
deck.syncMapToCurrentSlide();


/*
const responseTransitCount = await fetch("shapesTransitCounts.json"); //first slide
const dataTransitCount = await responseTransitCount.json();

const dataTransitCountLayer = L.geoJSON(dataTransitCount, {
    pointToLayer: (feature, latlng) => L.circleMarker(latlng),
    style: (feature) => {
      const value = feature.properties.cykler_7_19;

      let color;
      if (value <= 20) {
        color = '#d1e6f9';
      } else if (value <= 1000) {
        color = '#9bcef3';
      } else if (value <= 3000) {
        color = '#67b6ed';
      } else if (value <= 5000) {
        color = '#2e8be7';
      } else {
        color = '#005bc1';
      }

      return {
        radius: 3,
        fillColor: color,
        color: color,
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };
    }
  }).addTo(MapBox);*/
