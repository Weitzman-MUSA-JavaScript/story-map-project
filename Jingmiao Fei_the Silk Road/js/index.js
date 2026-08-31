import { SlideDeck } from './slidedeck.js';

document.cookie = 'same-site-cookie=foo; SameSite=None; Secure';
document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';
function initMapAndSlides(mapId, sectionId, slideDeckClass, layerType) {
 
  const map = L.map(mapId, {
    scrollWheelZoom: false,
    attributionControl: true // 确保 Attribution 控件开启
  }).setView([37, 87],8);

  if (mapId === 'map-0') {
    map.attributionControl.addAttribution('<a href="https://www.flaticon.com/free-icons/london-eye" title="London eye icons">London eye icons by Smashicons - Flaticon</a>');
    map.attributionControl.addAttribution('<a href="https://www.flaticon.com/free-icons/statue-of-liberty" title="statue of liberty icons">Statue of liberty icons created by shmai - Flaticon</a>');
    map.attributionControl.addAttribution('<a href="https://www.flaticon.com/free-icons/beijing" title="beijing icons">Beijing icons created by Freepik - Flaticon</a>');
    map.attributionControl.addAttribution('<a href="https://www.flaticon.com/free-icons/australia" title="australia icons">Australia icons created by Freepik - Flaticon</a>');
    map.attributionControl.addAttribution('<a href="https://www.flaticon.com/free-icons/vietnam" title="vietnam icons">Vietnam icons created by justicon - Flaticon</a>');
    map.attributionControl.addAttribution('<a href="https://www.flaticon.com/free-icons/victoria-day" title="victoria day icons">Victoria day icons created by Freepik - Flaticon</a>');
  }

  if (mapId === 'map-1') {
    map.attributionControl.addAttribution('<a href="https://hub.arcgis.com/maps/Education::the-silk-roadsthen-and-now/about">Silk Road route and cities</a>');
  }

  if (mapId === 'map-2') {
    map.attributionControl.addAttribution('<a href="https://www.naturalearthdata.com/downloads/10m-cultural-vectors/" >Country Boundary</a>');
  }


  // ## The Base Tile Layer
  const baseTileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> contributors',
    maxZoom: 18,
    id: 'jasmine404/cm2ppvdzm002j01nth06gdv4y',  //this is my custom vintage style
    tileSize: 512,
    zoomOffset: -1,
    detectRetina: true,
    accessToken: 'pk.eyJ1IjoiamFzbWluZTQwNCIsImEiOiJjbTEybGFoMXExMm93MnFwdjltNTVuYTY5In0.jcDywHe2QQm4DhVU0hPV9A'  
  });
  baseTileLayer.addTo(map);

  // ## Interface Elements for first map and slides
  const container = document.querySelector(`#${sectionId} .slide-section`);
  const slides = document.querySelectorAll(`#${sectionId} .slide`);

  // ## The SlideDeck objects
  const deck = new slideDeckClass(container, slides, map, layerType);

  document.addEventListener('scroll', () => deck.calcCurrentSlideIndex());

  deck.preloadFeatureCollections();
  deck.syncMapToCurrentSlide(layerType);
}

initMapAndSlides('map-0', 'map-section-0', SlideDeck, 0);
initMapAndSlides('map-1', 'map-section-1', SlideDeck, 1);
initMapAndSlides('map-2', 'map-section-2', SlideDeck, 2); 
