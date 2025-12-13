## Introduction

This storymap presents the impact of SEPTA's Summer 2025 service cuts by showing the location and spatial extent of the eliminated or shortened routes in the context of the entire network.

## Data 

The underlying data for the storymap comes from SEPTA's GTFS archive; I compare the [last GTFS update](https://github.com/septadev/GTFS/releases/tag/v202508242) prior to the cuts with the first update describing service after the [restoration of service](https://github.com/septadev/GTFS/releases/tag/v202509141). (I use the post-cut period schedule so that seasonal routes, like school-focused routes that were affected by the cuts, can be shown appropriately.)

I then use an R script (under the `r` directory) to read in the GTFS data (via the `tidytransit` package), add relevant attributes, and export route segments as geojson files.
