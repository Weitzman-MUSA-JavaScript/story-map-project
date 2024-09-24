import { SlideDeck } from './slidedeck.js';

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
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
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
    
      if (name === 'Yellowstone') {
        const animatedCircle = L.circleMarker(latlng, {
          radius: 10,
          color: 'orange',
          fillColor: 'red',
          fillOpacity: 1,
          className: 'expanding-circle',
        });
    
        let growing = true;
        const minRadius = 10;
        const maxRadius = 20;
        const animationSpeed = 100; // 动画速度，单位：毫秒
        let animationInterval;
    
        // 动态扩散效果
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
    
        // 停止动画
        const stopAnimation = () => {
          clearInterval(animationInterval);
        };
    
        // 开始时停止动画，结束时恢复动画
        map.on('zoomstart', stopAnimation);  // 缩放开始时停止动画
        map.on('zoomend', startAnimation);   // 缩放结束时恢复动画
    
        // 同样适用于地图移动
        map.on('movestart', stopAnimation);
        map.on('moveend', startAnimation);
    
        // 初始化时启动动画
        startAnimation();
    
        return animatedCircle;
      }
    
      // 其他国家的默认标记样式
      return L.circleMarker(latlng, {
        radius: 8,
        color: 'red',
        fillColor: 'green',
        fillOpacity: 1,
      });
    },
  },

  'third-slide': {
    style: (feature) => {
      return {
        color: 'blue',
        fillColor: 'yellow',
        fillOpacity: 1,
      };
    },
  },

  'fourth-slide': {
    style: (feature) => {
      return {
        color: 'red',
        fillColor: 'green',
        fillOpacity: 1,
      };
    },
  },

  'fifth-slide': {
    style: (feature) => {
      return {
        color: 'red',
        fillColor: 'green',
      };
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
