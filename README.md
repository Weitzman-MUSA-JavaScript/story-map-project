# One-Day Guide to Philadelphia StoryMap
Created by Lu Yii Wong 

Fall 2025

## Content Overview

This project is an interactive story map designed to guide first-time visitors through a curated one-day walking itinerary in Philadelphia. The StoryMap presents a sequence of stops organized by **morning**, **afternoon**, and **evening**, highlighting cultural institutions, historic landmarks, public spaces, and local food recommendations.

Each slide includes:

* A short description of a featured location
* A clickable map view with markers
* Custom walking paths connecting each stop
* Relevant images, links, and additional context

The experience begins at **30th Street Station** and concludes at **Independence Hall and the Liberty Bell**, offering a complete and realistic one-day sightseeing route through Center City and Old City.

**Target audience:**
Visitors with limited time (one day) to explore Philadelphia who want a guided, walkable, and visually engaging introduction to major attractions, food stops, and historic sites.

---

## Stops Highlighted in the StoryMap

**Morning**

* 30th Street Station
* Schuylkill Banks trail
* The Rocky Statue & Steps
* Breakfast at The Garden (Barnes Foundation)

**Afternoon**

* LOVE Park
* City Hall & Dilworth Plaza
* Reading Terminal Market
* Chinatown

**Evening**

* Elfreth’s Alley
* Betsy Ross House & garden
* Cheesesteak stop in Old City
* Independence Hall
* Liberty Bell

---

## Data Sources & Citations

* **Location Data:** All latitude/longitude coordinates were derived using **Google Maps** (accessed 2025).

* **Walking Path Geometry** Walking path linework (morning, afternoon, evening routes) was created manually using [https://geojson.io](https://geojson.io) and exported as `LineString` features.

* **Image Citations:** All images are credited directly on the individual slides where they appear. Sources include Visit Philadelphia, Instagram profiles, official museum websites, and personal photographs shot by me.

* **Map Tiles:** Basemap tiles provided by:
  * **CARTO** Light Basemap
  * **© OpenStreetMap contributors** (Displayed using Leaflet)

---

## Accessibility Notes

* All images include `alt` text
* Heading structure uses `<h1>` for title slides and `<h2>` for all stops
* Links are keyboard navigable
* Tested with Chrome Lighthouse accessibility checker

---

## Acknowledgements

This project was created as part of a JavaScript story maps assignment using a slide deck template. Special thanks to the course instructor, Mjumbe Poe, for providing the template and technical guidance.
