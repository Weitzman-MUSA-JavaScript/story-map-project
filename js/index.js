import { SlideDeck } from './slidedeck.js';

const map = L.map('map', { scrollWheelZoom: false }).setView([39.9526, -75.1652], 12);

const baseTileLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
});
baseTileLayer.addTo(map);

const container = document.querySelector('.slide-section');
const slides = document.querySelectorAll('.slide');

const slideOptions = {
  'slide1': {
    style: {
      color: '#c62828',
      weight: 2,
      opacity: 0.9,
      fillColor: '#ef5350',
      fillOpacity: 0.7
    },
    onEachFeature: function (feature, layer) {
      if (feature.properties) {
        let popupContent = '<div class="popup-content">';
        popupContent += '<h4>Vacant Lot</h4>';

        if (feature.properties.ADDRESS) {
          popupContent += `<p><strong>Address:</strong> ${feature.properties.ADDRESS}</p>`;
        }
        if (feature.properties.OWNER_NAME) {
          popupContent += `<p><strong>Owner:</strong> ${feature.properties.OWNER_NAME}</p>`;
        }
        if (feature.properties.ZONING) {
          popupContent += `<p><strong>Zoning:</strong> ${feature.properties.ZONING}</p>`;
        }

        popupContent += '</div>';
        layer.bindPopup(popupContent);
      }
    },
    view: { lat: 39.9926, lng: -75.1652, zoom: 12 }
  },
  'slide2': {
    // special overlay
    overlay: true
  },
  'slide3': {
    style: {
      color: '#1b5e20',
      weight: 2,
      opacity: 1,
      fillColor: '#388e3c',
      fillOpacity: 0.7
    },
    onEachFeature: function (feature, layer) {
      if (feature.properties) {
        let popupContent = '<div class="popup-content">';
        popupContent += '<h4>PHS LandCare Site</h4>';

        Object.keys(feature.properties).forEach(key => {
          if (feature.properties[key] && key !== 'geometry') {
            popupContent += `<p><strong>${key}:</strong> ${feature.properties[key]}</p>`;
          }
        });

        popupContent += '</div>';
        layer.bindPopup(popupContent);
      }
    },
    view: { lat: 39.9726, lng: -75.1652, zoom: 12 }
  },
  'slide4': {
    view: { lat: 39.9726, lng: -75.1652, zoom: 12 },
    multiLayer: true,
    layers: ['phs_landcare', 'Commercial_Corridors', 'Schools_Parcels', 'bus_transit_shelters', 'Trolley_Stations']
  },
  'slide5': {
    view: { lat: 39.9998, lng: -75.1501, zoom: 13 },
    specialMarker: true
  }
};

const deck = new SlideDeck(container, slides, map, slideOptions);


window.addEventListener('scroll', () => deck.calcCurrentSlideIndex());


function initialize() {
  deck.preloadFeatureCollections();
  deck.syncMapToCurrentSlide();
  deck.createWayneAvenueMarker();
}

document.addEventListener('DOMContentLoaded', initialize);
