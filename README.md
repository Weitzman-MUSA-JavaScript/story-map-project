# When blood takes a shortcut

An interactive story map by **Frederick Abalo**, developed as an independent JavaScript course project at the University of Pennsylvania.

[Read the story](https://freddie999.github.io/story-map-project/) · [Portfolio](https://freddie999.github.io/portfolio/)

## The question

How does geography shape the journey of urgently needed medical supplies in Rwanda? The story follows road and aerial connections, then compares modeled outbound travel times across a screened set of delivery-site records. Published maternal-health research provides context, separately from the modeled route comparison.

My target audience is health planners, medical-logistics practitioners, and readers interested in how geography affects access to essential supplies.

## Implementation

- JavaScript modules and Leaflet, with a persistent map and scroll-driven scenes.
- Precomputed GeoJSON layers, route reveals, consistent time legends, and interactive point details.
- HTML narrative and a [companion travel-time table](accessibility-table.html).
- Reduced-motion handling in the map transitions.

On phones, the map stays above the scrolling story. A skip link leads to the narrative, and covered desktop map controls stay out of the keyboard navigation order. Routes draw outward from Muhanga as each scene becomes active. Roads appear first in the six-facility scene, followed by flights. These animations illustrate the paths; their speed does not represent travel time. Readers who prefer reduced motion see complete, static routes.

Scenes load individually and are cached as you read. If a scene fails, a message and retry button appear while the story and travel-time table remain available.

## Read locally

Serve the repository root over HTTP so the scene data can load:

```sh
uv run --no-project python -m http.server 8000
```

Open http://localhost:8000. An internet connection is required for the basemap and externally hosted assets. The Mapbox basemap uses a browser-visible public token; deployments should use a token restricted to their own allowed URLs. No private credential is required for the narrative.

## Interpretation

Travel times are modeled outbound transport estimates, not observed complete deliveries. They exclude preparation, waiting, unloading, return travel, traffic, and weather. Name-screened delivery-site records are not a verified register of blood recipients or a national facility census. Route comparisons do not estimate lives saved.

Flight minutes are calculated as distance in meters ÷ 28.7 meters per second ÷ 60, assuming a constant speed of about 103 km/h. The network overview uses mean outbound distances across route options. The six examples use the supplied compiled three-dimensional distance of each selected planned route. Map lines are simplified for display; that geometry is not used to recalculate the published times or distances.

This project relates to my prior work at Zipline and is an independent academic analysis. Public availability of the existing map does not establish redistribution rights for underlying source datasets; those sources are not bundled by this portfolio update.

## Sources and credit

- [Knowledge at Wharton research summary](https://knowledge.wharton.upenn.edu/article/how-rwanda-is-using-drones-to-improve-health-care/) — health-outcome context.
- OpenStreetMap contributors and OSRM — modeled road-network context; source details appear in the story.
- Mapbox — basemap and boundary metadata.
- Course-provided scrolling-map structure — adapted for this authored narrative.

The story contains additional citations and comparison notes alongside the relevant scenes.
