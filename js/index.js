/* eslint-disable camelcase */
import { SlideDeck } from './slidedeck.js';

const map = L.map('map', { scrollWheelZoom: false }).setView([0, 0], 0);
const mapboxKey = 'pk.eyJ1IjoiY2xhdWRsb3ciLCJhIjoiY20weTY3MDZoMDNocTJrbXpqa3lqZWJlaSJ9.3N1iXpEvsJ0GwajGVwwkTg';
const mapboxStyle1 = 'mapbox/light-v11';

// ## The Base Tile Layer
const baseTileLayer = L.tileLayer(`https://api.mapbox.com/styles/v1/${mapboxStyle1}/tiles/512/{z}/{x}/{y}{r}?access_token=${mapboxKey}`, {
  maxZoom: 16,
  attribution: '&copy; <a href="https://mapbox.com/" target="_blank">Mapbox</a> &copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
});
baseTileLayer.addTo(map);

// ## The SlideDeck object
// ## Interface Elements
const slides = document.querySelectorAll('.slide');

// ## The SlideDeck object
// ## Icons and Styling Options
const fridgeIcon = L.icon({
  iconUrl: 'data/fridgeicon.png',
  iconSize: [20, 20],
  iconAnchor: [15, 15],
  popupAnchor: [0, -15],
});

const shelterIcon = L.icon({
  iconUrl: 'data/sheltericon.png',
  iconSize: [20, 20],
  iconAnchor: [15, 15],
  popupAnchor: [0, -15],
});

const layerOptions = {
  '1-PA-slide': {
    style: (feature) => {
      const getColor = (FI_Rate) => {
        return FI_Rate > 0.144 ? '#ff0a0a' :
           FI_Rate > 0.131 ? '#ff6600' :
           FI_Rate > 0.123 ? '#ff9b00' :
           FI_Rate > 0.114 ? '#ffcb00' :
           '#fff700';
      };
      const borderColor = feature.properties.County === 'Philadelphia County, Pennsylvania' ? 'blue' : 'black';
      const borderWeight = feature.properties.County === 'Philadelphia County, Pennsylvania' ? 3 : 2;
      return {
        fillColor: getColor(feature.properties.FI_Rate),
        weight: borderWeight,
        opacity: 1,
        color: borderColor,
        fillOpacity: 0.7,
      };
    },
  },
  '2-Poverty-slide': {
    style: (feature) => {
      const getColor = (PercPoor) => {
        return PercPoor > 0.33816 ? '#1527c8' :
        PercPoor > 0.23302 ? '#425dcf' :
        PercPoor > 0.15836 ? '##6f93d7' :
        PercPoor > 0.09148 ? '#9bc9de':
             '#c8ffe5';
      };
      return {
        fillColor: getColor(feature.properties.PercPoor),
        weight: 2,
        opacity: 1,
        color: 'black',
        fillOpacity: 0.7,
      };
    },
    onEachFeature: (feature, layer) => {
      // Calculate the poverty percentage and round it to two decimal places
      const povertyPercentage = (feature.properties.PercPoor * 100).toFixed(2);
      // Bind the tooltip to the polygon
      layer.bindTooltip(`Poverty: ${povertyPercentage} %`, {
        permanent: false, // Tooltip appears on hover
        direction: 'top', // Tooltip position
      });
    },
  },
  '3-CB-slide': {
    style: (feature) => {
      const getColor = (PercCB) => {
        return PercCB > 0.62828 ? '#1527c8' :
        PercCB > 0.53602 ? '#425dcf' :
        PercCB > 0.44682 ? '##6f93d7' :
        PercCB > 0.34192 ? '#9bc9de':
             '#c8ffe5';
      };
      return {
        fillColor: getColor(feature.properties.PercCB),
        weight: 2,
        opacity: 1,
        color: 'black',
        fillOpacity: 0.7,
      };
    },
    onEachFeature: (feature, layer) => {
      const costburdenPercentage = (feature.properties.PercCB * 100).toFixed(2);
      layer.bindTooltip(`Cost-Burdened: ${costburdenPercentage} %`, {
        permanent: false,
        direction: 'top',
      });
    },
  },
  '4-Access-slide': {
    style: (feature) => {
      const getColor = (TOTAL_HPSS) => {
        return TOTAL_HPSS > 5 ? '#3b0d52' :
        TOTAL_HPSS > 3.25 ? '#6a3979' :
        TOTAL_HPSS > 2.25 ? '#9a66a3' :
        TOTAL_HPSS > 1 ? '#cc96cf':
             '#ffc9fd';
      };
      return {
        fillColor: getColor(feature.properties.TOTAL_HPSS),
        fillOpacity: 0.7,
        weight: 0,
        opactiy: 0,
      };
    },
  },
  '5-FS-slide': {
    style: (feature) => {
      const getColor = (PercFS) => {
        return PercFS > 0.43724 ? '#145c49' :
        PercFS > 0.28752 ? '#178556' :
        PercFS > 0.18164 ? '#3faf56' :
        PercFS > 0.07516 ? '#78d848':
             '#bdff23';
      };
      return {
        fillColor: getColor(feature.properties.PercFS),
        weight: 2,
        opacity: 1,
        color: 'black',
        fillOpacity: 0.7,
      };
    },
  },
  '6-ShareFood-slide': {
    pointToLayer: (feature, latlng) => {
      return L.circleMarker(latlng, {
        radius: 10,
        fillColor: '#98FBCB',
        color: 'black',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8,
      });
    },
  },
  '7-HomelessShelter-slide': {
    pointToLayer: (feature, latlng) => {
      const marker = L.marker(latlng, { icon: shelterIcon });
      marker.bindTooltip(feature.properties.name, {
        permanent: false,
        direction: 'top',
      });
      return marker;
    },
  },
  '8-SouthPhilly-slide': {
    pointToLayer: (feature, latlng) => {
      const marker = L.marker(latlng, { icon: fridgeIcon });
      marker.bindTooltip(feature.properties.name, {
        permanent: false,
        direction: 'top',
      });
      return marker;
    },
  },
};

/**
 * Debouncing the execution of a function
 * @param {Function} fn - Function to debounce
 * @param {number} delay - Delay in milliseconds for debouncing
 * @return {Function} Debounced version of the original function
 */
function debounce(fn, delay) {
  let timeoutID;
  return (...args) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const deck = new SlideDeck(slides, map, layerOptions);

document.addEventListener('scroll', debounce(() => deck.calcCurrentSlideIndex(), 200));

deck.preloadFeatureCollections();
deck.syncMapToCurrentSlide();


