/* eslint-disable require-jsdoc */
import { SlideDeck } from './slidedeck.js';

//
// Create autoplay functionality for the image slideshow.
// Some of this chunk of code is referenced from ChatGPT.
const imagesShow = document.querySelectorAll('.imageshow img');
let imageCurrentIndex = 0;

function showNextImage() {
  imagesShow[imageCurrentIndex].style.opacity = 0;
  imageCurrentIndex = (imageCurrentIndex + 1) % imagesShow.length;
  imagesShow[imageCurrentIndex].style.opacity = 1;
}

setInterval(showNextImage, 2400);

imagesShow[imageCurrentIndex].style.opacity = 1;

//
// Create a new Leaflet map object to be displayed in the #map div
//
const element = document.querySelector('#map');
const map = L.map(element, {scrollWheelZoom: false}).setView([0, 0], 0);

//
// Add a base layer to the map
//
const mapboxKey = 'pk.eyJ1IjoieHV5YW9oYW4iLCJhIjoiY20xN3l1aDl0MHlhdTJqb3NrN3JzcHZ3ZyJ9.W0K0GomuRMj9lrIY029KoA';
const mapboxStyle = 'mapbox/light-v11';

const baseLayer = L.tileLayer(
    `https://api.mapbox.com/styles/v1/${mapboxStyle}/tiles/512/{z}/{x}/{y}{r}?access_token=${mapboxKey}`, {
      tileSize: 512,
      zoomOffset: -1,
      detectRetina: true,
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    });
baseLayer.addTo(map);

//
// ## Interface Elements
//
const container = document.querySelector('.slide-section');
const slides = document.querySelectorAll('.slide');

// Define each slide's different style options.
const slideOptions = {
  'first-slide': {
    style: (feature) => {
      const number = feature.properties.Other;
      const name = feature.properties.Name;

      // Define fillColor based on the number of national parks in each country.
      const fiveQuantileColor = (value) => {
        if (value === 0) {
          return 'rgba(247, 249, 232, 0.75)';
        } else if (value >= 1 && value <= 4) {
          return 'rgba(206, 210, 189, 0.75)';
        } else if (value >= 5 && value <= 10) {
          return 'rgba(165, 170, 146, 0.75)';
        } else if (value >= 11 && value <= 23) {
          return 'rgba(123, 131, 102, 0.75)';
        } else if (value >= 24 && value <= 685) {
          return 'rgba(82, 91, 59, 0.75)';
        } else {
          return 'rgba(0, 0, 0, 0)';
        }
      };

      // Apply a different style for the United States.
      const fillColor = name === 'United States' ? 'rgba(254, 186, 7, 0.5)' : fiveQuantileColor(number);
      const borderColor = name === 'United States' ? 'rgba(254, 186, 7, 1)' : 'grey';
      const borderWeight = name === 'United States' ? 2.4 : 0.5;

      return {
        fillColor: fillColor,
        color: borderColor,
        weight: borderWeight,
        fillOpacity: 1,
      };
    },
  },

  'second-slide': {
    pointToLayer: (feature, latlng) => {
      const name = feature.properties.Name;

      // Create a special marker for Yellowstone National Park.
      // Some of this chunk of code is referenced from ChatGPT.
      if (name === 'Yellowstone') {
        const animatedCircle = L.circleMarker(latlng, {
          radius: 10,
          color: 'rgba(254, 186, 7, 0.9)',
          weight: 3,
          fillColor: 'rgba(254, 186, 7, 0.5)',
          fillOpacity: 1,
          className: 'expanding-circle',
        });

        let growing = true;
        const minRadius = 8;
        const maxRadius = 16;
        const animationSpeed = 100;
        let animationInterval;

        const startAnimation = () => {
          animationInterval = setInterval(() => {
            const currentRadius = animatedCircle.getRadius();
            if (growing) {
              animatedCircle.setRadius(currentRadius + 1);
              if (currentRadius >= maxRadius) growing = false;
            } else {
              animatedCircle.setRadius(currentRadius - 1);
              if (currentRadius <= minRadius) growing = true;
            }
          }, animationSpeed);
        };

        const stopAnimation = () => {
          clearInterval(animationInterval);
        };

        map.on('zoomstart', stopAnimation);
        map.on('zoomend', startAnimation);

        map.on('movestart', stopAnimation);
        map.on('moveend', startAnimation);

        startAnimation();

        return animatedCircle;
      }

      // Create a default circle marker for other national parks.
      return L.circleMarker(latlng, {
        radius: 6,
        color: 'rgba(123, 131, 102, 0.9)',
        weight: 2.4,
        fillColor: 'rgba(165, 170, 146, 0.6)',
        fillOpacity: 1,
      });
    },
  },

  'third-slide': {
    style: (feature) => {
      const geometryType = feature.geometry.type;

      if (geometryType === 'Polygon' || geometryType === 'MultiPolygon') {
        return {
          color: 'rgba(123, 131, 102, 0.9)',
          fillColor: 'rgba(165, 170, 146, 0.2)',
          fillOpacity: 1,
          weight: 4,
        };
      } else {
        return {
          color: 'rgba(254, 186, 7, 1)',
          weight: 2.4,
        };
      }
    },
  },

  'fourth-slide': {
    pointToLayer: (feature, latlng) => {
      const geometryType = feature.geometry.type;

      // Create a custom icon for the location point.
      if (geometryType === 'Point') {
        const locationIcon = L.icon({
          iconUrl: 'data/image/locationIcon.png',
          iconSize: [28, 46],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
        });

        const marker = L.marker(latlng, { icon: locationIcon });

        // Add a custom tooltip to show the name of visitor centers permanently.
        marker.bindTooltip(feature.properties.Name, {
          permanent: true,
          direction: 'bottom',
          className: 'custom-tooltip',
        }).openTooltip();

        return marker;
      }
    },

    style: (feature) => {
      const geometryType = feature.geometry.type;

      if (geometryType === 'Polygon' || geometryType === 'MultiPolygon') {
        return {
          color: 'rgba(123, 131, 102, 0.9)',
          fillColor: 'rgba(165, 170, 146, 0.2)',
          fillOpacity: 1,
          weight: 4,
        };
      }
    },
  },

  'fifth-slide': {
    pointToLayer: (feature, latlng) => {
      const geometryType = feature.geometry.type;

      // Create a custom icon for the location point.
      if (geometryType === 'Point') {
        const locationIcon = L.icon({
          iconUrl: 'data/image/locationIcon.png',
          iconSize: [32, 52],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
        });

        const marker = L.marker(latlng, { icon: locationIcon });

        return marker;
      }
    },
  },
};

//
// ## The SlideDeck object
//
const deck = new SlideDeck(container, slides, map, slideOptions);

document.addEventListener('scroll', () => deck.calcCurrentSlideIndex());

deck.preloadFeatureCollections();
deck.syncMapToCurrentSlide();
