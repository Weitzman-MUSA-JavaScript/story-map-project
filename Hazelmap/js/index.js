// index.js

const map = L.map('map', {preferCanvas: true}).setView([39.9526, -75.1652], 12);

// basemap
L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg', {
  maxZoom: 16,
  attribution:
    '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> &copy; <a href="https://stamen.com/">Stamen Design</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);


const startBtn     = document.getElementById('start-btn');
const heroSection  = document.getElementById('hero-section');
const sidePanel    = document.getElementById('side-panel');
const slideContent = document.getElementById('slide-content');


const slides = [
  {
    title: 'Urban Memory of Historic Sites in Philadelphia',
    text: 'Showcasing important historic sites in Philadelphia that form the foundation of the city’s culture and reflect its social and architectural development since its founding.',
    geojson: 'data/historic_sites_philreg.geojson',
    style: { color: '#e67e22', weight: 2, fillColor: '#f39c12', fillOpacity: 0.6 },
    nameField: 'name'
  },
  
  {
    title: 'Representative Historic Public Art Sites',
    text: 'Nine selected historic sites closely related to public art. Click to view details and photos.',
    geojson: 'data/sitesnew.geojson',

  
    style: {
      color: '#e74c3c',
      weight: 2,
      fillColor: '#e74c3c',
      fillOpacity: 1
    },
   
    pointToLayer: (feature, latlng) => {
      return L.circleMarker(latlng, {
        radius: 12,                    
        color: '#3498db',             
        weight: 3,                     
        fillColor: '#fdfefe',         
        fillOpacity: 0.2
      }).bindTooltip(feature.properties.id.toString(), {
        permanent: true,
        direction: 'center',
        className: 'point-id'
      });
    },
   onEachFeature: (feature, layer) => {
  const p = feature.properties;
  console.log(p); 

  layer.bindPopup(`
  <div style="width:240px;padding:10px 12px;font-family:'Segoe UI',sans-serif;
              line-height:1.6;font-size:14px;color:#333;">
    <h3 style="margin-top:0;margin-bottom:8px;font-size:18px;color:#d35400;
               border-bottom:1px solid #eee;padding-bottom:4px;">
      ${p.Name}
    </h3>
    <p style="margin:0;">${p.descrip}</p>
    ${p.image_url ? `<img src="${p.image_url}" style="width:100%;margin-top:8px;border-radius:6px;">` : ''}
  </div>
`);

}

  },
  {
    title: 'Historic Districts & Neighborhood Fabric',
    text: 'Highlight Philadelphia’s officially designated historic districts—places where distinctive architecture and community history are preserved, showing how the city balances growth with the protection of neighborhood character and memory.',
    geojson: 'data/historicdistricts_local.geojson',
    style: { color: '#8e44ad', weight: 2, fillColor: '#9b59b6', fillOpacity: 0.6 },
    nameField: 'DIST_NAME'
  },
  {
    title: 'Iconic Landmarks & Cultural Identity',
    text: 'Present key public artworks and landmark buildings that shape Philadelphia’s cultural identity, illustrating how these enduring icons express the city’s history, creativity, and sense of place.',
    geojson: 'data/Landmark_Points.geojson',
    style: { color: '#2980b9', weight: 2, fillColor: '#3498db', fillOpacity: 0.6 },
    nameField: 'name',
  
    pointToLayer: (feature, latlng) => {
      return L.circleMarker(latlng, {
       radius: 4,            
       color: '#2980b9',
       weight: 1,
       fillColor: '#3498db',
       fillOpacity: 0.6
    });
  }
},

  {
    title: 'Contemporary Public Art & the Percent for Art Program',
    text: 'Focus on Philadelphia’s pioneering “Percent for Art” program, which requires new major developments to commission art for public spaces. This layer highlights recent artworks created under the program, showing how contemporary public art animates plazas, transit hubs, and neighborhood parks while extending the city’s rich cultural legacy.',
    geojson: 'data/percent_for_art_public.geojson',
    style: { color: '#27ae60', weight: 2, fillColor: '#2ecc71', fillOpacity: 0.6 },
    nameField: 'title'
  }
];

let current = 0;           
let currentLayer = null;   


function loadSlide(i) {
  const s = slides[i];
  slideContent.innerHTML = `<h2>${s.title}</h2><p>${s.text}</p>`;

  if (currentLayer) map.removeLayer(currentLayer);

  fetch(s.geojson)
    .then(res => res.json())
    .then(data => {
      currentLayer = L.geoJSON(data, {
        style: s.style,
        
        pointToLayer: s.pointToLayer || undefined,
        onEachFeature: s.onEachFeature || ((f, layer) => {
          
          if (s.nameField) {
            layer.bindPopup(`<b>${f.properties[s.nameField] || '无名称'}</b>`);
          }
        })
      }).addTo(map);

      map.fitBounds(currentLayer.getBounds());
    });
}



startBtn.addEventListener('click', () => {
  heroSection.style.display = 'none';
  sidePanel.classList.remove('hidden');
  loadSlide(current);

  
  fetch('data/City_Plan_Boundary.geojson')
    .then(res => res.json())
    .then(boundary => map.fitBounds(L.geoJSON(boundary).getBounds()));
});


document.getElementById('prev-slide').addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  loadSlide(current);
});


document.getElementById('next-slide').addEventListener('click', () => {
  current = (current + 1) % slides.length;
  loadSlide(current);
});

