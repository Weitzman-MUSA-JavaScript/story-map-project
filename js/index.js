import { SlideDeck } from './slidedeck.js';

const map = L.map('map').setView([0, 0], 0);

// ## The Base Tile Layer
const baseTileLayer = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
  {
    maxZoom: 16,
    attribution: 'Tiles © Esri — National Geographic'
  }
);
baseTileLayer.addTo(map);

// ## Interface Elements
const slides = document.querySelectorAll('.slide');
const slidePrevButton = document.querySelector('#prev-slide');
const slideNextButton = document.querySelector('#next-slide');

const slideOptions = {
  maritime_silk_road: {
    pointToLayer: (feature, latlng) => L.circleMarker(latlng, {
      radius: 7,
      color: '#3b2f2f',    
      weight: 2,
      fillColor: '#d4a017', 
      fillOpacity: 0.95
    }),
    style: () => ({
      color: '#b45309',
      weight: 3,
      opacity: 0.9
    })
  },

  east_asia_legend: {
    pointToLayer: (feature, latlng) => L.circleMarker(latlng, {
      radius: 7,
      color: '#3b2f2f',
      weight: 2,
      fillColor: '#c2410c',
      fillOpacity: 0.95
    }),
    style: () => ({ color: '#c2410c', weight: 3, opacity: 0.9 })
  },

  constructions: {
    pointToLayer: (feature, latlng) => L.circleMarker(latlng, {
      radius: 7,
      color: '#3b2f2f',
      weight: 2,
      fillColor: '#7f1d1d', 
      fillOpacity: 0.95
    }),
    style: () => ({ color: '#7f1d1d', weight: 3, opacity: 0.9 })
  },

  shipyard: {
    keepView: true, 
    modal: {
      content: ` <img src="picutures/1.png" alt="Treasure shipyard"> `
    },
    photoMarker: {
      latlng: [32.066316176904564, 118.7287574047071], 
      tooltip: 'Treasure Shipyard'
    }
  },
  tianfei_palace: {
  keepView: true,
  imageId: 2
  },
  jingjue_temple: {
  keepView: true,
  imageId: 3
  }
};

const modalEl = document.getElementById('media-modal');
const modalContentEl = document.getElementById('media-modal-content');
const modalCloseEl = document.getElementById('media-modal-close');
const modalBackdropEl = document.getElementById('media-backdrop');

function openModal(html) {
  modalContentEl.innerHTML = html;
  modalEl.classList.remove('is-hidden');
}

function closeModal() {
  modalEl.classList.add('is-hidden');
  modalContentEl.innerHTML = '';
  document.body.style.overflow = '';
}

modalCloseEl.addEventListener('click', closeModal);
modalBackdropEl.addEventListener('click', closeModal);

window.__openStoryModal = openModal;
window.__closeStoryModal = closeModal;

const deck = new SlideDeck(slides, map, slideOptions);

slidePrevButton.addEventListener('click', () => deck.goPrevSlide());
slideNextButton.addEventListener('click', () => deck.goNextSlide());

deck.preloadFeatureCollections();
deck.showCurrentSlide();
