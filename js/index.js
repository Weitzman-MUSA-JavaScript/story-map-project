/* global L */

import { VisMap } from './vismap.js';

const map = L.map('map', {scrollWheelZoom: false}).setView([39.9800, -75.1200], 11);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/light-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZnJhbmtjaCIsImEiOiJjbG95aTZhbGQwM2ZwMmhxb3BvOGE3cjExIn0.9FCYx6xJ-wp8YEgk7VpG0Q' 
}).addTo(map);

const visMap = new VisMap(map);

visMap.setDataPoints([0, 10000, 20000, 50000, 100000, 150000, 200000]);  

visMap.loadGeoJson('philly.geojson')
    .then(() => {
        const slides = document.querySelectorAll('.slide');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const year = entry.target.getAttribute('data-year');
                    visMap.visualize(`stop_counts_${year}`);
                }
            });
        }, { threshold: 0.8 }); 

        slides.forEach(slide => observer.observe(slide));

        visMap.visualize('stop_counts_2018');
    });