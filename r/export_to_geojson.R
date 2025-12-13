# Purpose -------------------------------------------------------------------------------------
# Read SEPTA's GTFS feeds pre- and post-cuts and export needed subsets of data as geojson files.

# Preliminaries -------------------------------------------------------------------------------

library(tidyverse)
library(tidylog)
library(janitor)
library(tidytransit)

# Set path relative to location of this script
setwd(dirname(this.path::this.dir()))

data_dir <- str_c(getwd(), "/data")

# Pre-cut data --------------------------------------------------------------------------------

normal_raw <- read_gtfs(str_c(data_dir, "raw", "normal", "bus", "google_bus.zip", sep = "/"))

# Read shapes and stops as sf objects for mapping
normal_sf <- gtfs_as_sf(normal_raw)

# Route linestrings
normal_geometry <- normal_sf[["shapes"]]

normal_routes <- normal_sf[["routes"]]

normal_trips <- normal_sf[["trips"]]

# Regional rail data
normal_rail_raw <- read_gtfs(str_c(data_dir, "raw", "normal", "rail", "google_rail.zip", sep = "/"))
normal_rail_sf <- gtfs_as_sf(normal_rail_raw)
normal_rail_geometry <- normal_rail_sf[["shapes"]]
normal_rail_trips <- normal_rail_sf[["trips"]]

# Post-cut data --------------------------------------------------------------------------------

cut_raw <- read_gtfs(str_c(data_dir, "raw", "cut", "bus", "google_bus.zip", sep = "/"))

# Read shapes and stops as sf objects for mapping
cut_sf <- gtfs_as_sf(cut_raw)

# Route linestrings
cut_geometry <- cut_sf[["shapes"]]

cut_routes <- cut_raw[["routes"]]

cut_trips <- cut_raw[["trips"]]

# Collating information -----------------------------------------------------------------------

# Identify routes which do not exist post-cut
routes_eliminated <- cut_routes %>% 
  filter(str_detect(route_long_name, "ELIMINATED")) %>% 
  pull(route_id)

# Identify routes with reduced stops
# From: https://billypenn.com/2025/08/24/septa-cuts-routes-fares-august-2025/
routes_shortened <- 
  c(2, 3, 5, 7, 9, 17, 27, 43, 61, 84, 115, 124, 125, 433, 441, 495)

# Associate linestrings with route numbers
normal_mapping_data_all <- normal_geometry %>% 
  left_join(normal_trips %>% distinct(shape_id, route_id)) %>% 
  mutate(cut_status = 
           case_when(route_id %in% routes_eliminated ~ "Eliminated",
                     route_id %in% routes_shortened ~ "Shortened",
                     .default = "Remaining"))

# Associate linestrings with route numbers
cut_mapping_data_all <- cut_geometry %>% 
  left_join(cut_trips %>% distinct(shape_id, route_id)) %>% 
  mutate(cut_status = 
           case_when(route_id %in% routes_eliminated ~ "Eliminated",
                     route_id %in% routes_shortened ~ "Shortened",
                     .default = "Remaining"))

# Eliminated/shortened routes only
reduced_routes_mapping_data <- normal_mapping_data_all %>% 
  filter(cut_status == "Eliminated" | cut_status == "Shortened")

eliminated_routes_mapping_data <- normal_mapping_data_all %>% 
  filter(cut_status == "Eliminated")

shortened_routes_before_mapping_data <- normal_mapping_data_all %>% 
  filter(cut_status == "Shortened")

shortened_routes_after_mapping_data <- cut_mapping_data_all %>% 
  filter(cut_status == "Shortened")

remaining_routes_mapping_data <- cut_mapping_data_all %>% 
  filter(cut_status == "Remaining")

# Regional rail
regional_rail_mapping_data <- normal_rail_geometry %>% 
  left_join(normal_rail_trips %>% distinct(shape_id, route_id)) %>% 
  mutate(cut_status = if_else(route_id %in% c("CYN", "CHW", "PAO", "TRE", "WIL"), "Eliminated", "Remaining"))

# Export --------------------------------------------------------------------------------------

sf::st_write(normal_mapping_data_all, 
             str_c(data_dir, "/overall_network.json"), 
             driver = "GeoJSON")

sf::st_write(reduced_routes_mapping_data, 
             str_c(data_dir, "/reduced_network.json"), 
             driver = "GeoJSON")

sf::st_write(eliminated_routes_mapping_data, 
             str_c(data_dir, "/eliminated_routes.json"), 
             driver = "GeoJSON")

sf::st_write(shortened_routes_before_mapping_data, 
             str_c(data_dir, "/shortened_routes_before.json"), 
             driver = "GeoJSON")

sf::st_write(shortened_routes_after_mapping_data, 
             str_c(data_dir, "/shortened_routes_after.json"), 
             driver = "GeoJSON")

sf::st_write(remaining_routes_mapping_data, 
             str_c(data_dir, "/remaining_network.json"), 
             driver = "GeoJSON")

sf::st_write(regional_rail_mapping_data, 
             str_c(data_dir, "/regional_rail_cuts.json"), 
             driver = "GeoJSON")




