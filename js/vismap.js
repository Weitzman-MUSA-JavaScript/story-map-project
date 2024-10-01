/* global L */

import * as d3 from 'https://cdn.skypack.dev/d3';

export class VisMap {
    constructor(map) {
        this.map = map;
        this.currentLayer = null;
        this.legendItems = [];
        this.geojsonLayer = null;  

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.leaflet-interactive') && this.currentLayer) {
                this.resetHighlight();
            }
        });
    }

    loadGeoJson(filename) {

        return fetch(`data/${filename}`)
            .then(response => response.json())
            .then(data => {
                this.geojsonData = data;
                return data;
            });
    }

    setDataPoints(dataPoints) {
        this.dataPoints = dataPoints;
    }

    generateViridisPalette() {
        return d3.scaleSequential(d3.interpolateViridis);
    }

    resetHighlight() {
        if (this.currentLayer) {
            this.geojsonLayer.resetStyle(this.currentLayer); 
            this.currentLayer = null;  
        }
        this.map.closePopup(); 

        this.legendItems.forEach(item => item.classList.remove('highlight'));
    }

    highlightFeature(layer, value) {
        layer.setStyle({
            weight: 3,
            color: 'yellow',
            dashArray: '',
            fillOpacity: 0.7
        });

        const index = this.findLegendIndex(value);
        if (index !== -1) {
            this.legendItems[index].classList.add('highlight');
        }
    }

    findLegendIndex(value) {
        for (let i = 0; i < this.dataPoints.length - 1; i++) {
            if (value >= this.dataPoints[i] && value < this.dataPoints[i + 1]) {
                return i;
            }
        }
        
        if (value >= this.dataPoints[this.dataPoints.length - 1]) {
            return this.dataPoints.length - 1;
        }
        return -1;
    }

    onEachFeature(feature, layer, colname) {
        layer.on('click', () => {
            if (this.currentLayer !== layer) {
                this.resetHighlight();
            }

            const value = feature.properties[colname];
            this.highlightFeature(layer, value);
            this.currentLayer = layer;

            const cutcolname = colname.slice(0, -5);
            const popupContent = `
                ${cutcolname}: <strong>${value.toLocaleString()}<strong/>
            `;

            layer.bindPopup(popupContent).openPopup();
        });
    }

    generateLegend(colname) {
        const existingLegend = document.querySelector('.legend-box');
        if (existingLegend) existingLegend.remove();

        const legend = L.DomUtil.create('div', 'legend-box');
        const colorScale = this.generateViridisPalette();

        this.legendItems = []; 

        const title = document.createElement('div');
        title.className = 'legend-title';
        title.innerHTML = `${colname}`; 
        legend.appendChild(title);

        this.dataPoints.forEach((dataPoint, i) => {
            const legendItem = document.createElement('div');
            legendItem.className = 'legend-item';

            const colorBox = document.createElement('div');
            colorBox.className = 'legend-color';
            colorBox.style.backgroundColor = colorScale(i / (this.dataPoints.length - 1)); 

            const label = (i < this.dataPoints.length - 1)
                ? document.createTextNode(`${Math.round(dataPoint).toLocaleString()} to ${Math.round(this.dataPoints[i + 1]).toLocaleString()}`)
                : document.createTextNode(`≥ ${Math.round(dataPoint).toLocaleString()}`); 

            legendItem.appendChild(colorBox);
            legendItem.appendChild(label);
            legend.appendChild(legendItem);

            this.legendItems.push(legendItem);
        });

        this.map.getContainer().appendChild(legend);
    }

    visualize(colname) {
        this.colname = colname;
        const colorScale = this.generateViridisPalette();

        const style = (feature) => {
            const value = feature.properties[colname];
            const index = this.findLegendIndex(value);
            const normalizedValue = index / (this.dataPoints.length - 1); 
            const color = colorScale(normalizedValue);

            return {
                fillColor: color,
                weight: 0.5,
                opacity: 1,
                color: 'white',
                fillOpacity: 0.7
            };
        };

        if (this.geojsonLayer) {
            this.map.removeLayer(this.geojsonLayer);
        }

        this.geojsonLayer = L.geoJson(this.geojsonData, {
            style,
            onEachFeature: (feature, layer) => this.onEachFeature(feature, layer, colname)
        }).addTo(this.map);

        this.generateLegend(colname);
    }
    
}



