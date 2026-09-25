# Philadelphia’s Rising Waterfront

## Project Overview

Philadelphia’s Rising Waterfront is an interactive story map that explores how increasing water levels could affect low-lying areas along Philadelphia’s Delaware and Schuylkill River waterfronts.

The story presents six inundation scenarios, ranging from 1 to 6 feet above Mean Higher High Water (MHHW). As users scroll, the map shows how the potential inundation area expands with each additional foot. A comparison map displays all six scenarios together, followed by a conclusion about waterfront planning and adaptation.

These scenarios represent changes in water level rather than predictions for specific years. The maps are intended as a screening and planning reference.

## View the Story Map

[Open Philadelphia’s Rising Waterfront](https://jasach29.github.io/story-map-project/)

## Story Content

* Introduction to Philadelphia’s waterfront
* 1 foot above MHHW
* 2 feet above MHHW
* 3 feet above MHHW
* 4 feet above MHHW
* 5 feet above MHHW
* 6 feet above MHHW
* Comparison of all six scenarios
* Planning for a changing waterfront

## Data Sources

The basemap is the Esri World Light Gray Canvas basemap.

Sea-level-rise inundation data was provided by the NOAA Office for Coastal Management through the Sea Level Rise Viewer.

* [NOAA Sea Level Rise Data](https://coast.noaa.gov/digitalcoast/data/slr.html)
* [NOAA Sea Level Rise Viewer](https://coast.noaa.gov/slr/)

## Methods

The NOAA inundation layers were prepared in ArcGIS Pro and exported as GeoJSON files using the WGS 1984 coordinate system. The individual scenarios are displayed through Leaflet using a graduated blue color palette. The comparison map combines the six GeoJSON datasets to illustrate how the potential inundation footprint expands as water levels increase.

## Tools

* ArcGIS Pro
* HTML
* CSS
* JavaScript
* Leaflet
* GeoJSON
* GitHub Pages

## Author

Acharee Sirisan (Jaja)
Master of Landscape Architecture and Master of Urban Spatial Analytics
University of Pennsylvania
