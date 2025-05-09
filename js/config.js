/*
config.js file
*/

/*

HEADER SECTION
*/
let topTitleDiv = "<h4>Pennsylvania charging stations map</h4>";
let titleDiv = "<h1>Exploring Charging stations in Pennsylvania</h1>";
let bylineDiv = "<p>Shuya Guan<br>Sept 24th 2024</p>";
let descriptionDiv = `
<p>The Pennsylvania Electric Vehicle Charging Station Map provides a detailed breakdown of charging station density across various regions in the state. Major metropolitan areas such as Philadelphia and Pittsburgh boast a higher concentration of charging stations, making it convenient for urban EV drivers to find nearby facilities. Highways and intercity routes are also well-equipped with charging points, allowing for seamless long-distance travel.</p>
<p>In contrast, rural regions and smaller towns may have fewer stations, but the map helps identify key charging locations to ensure drivers are never too far from a power source. The map also highlights different types of charging options, from rapid chargers to standard ones, catering to diverse vehicle needs.</q>
<p>The map also highlights various types of charging options, from rapid chargers to standard ones, catering to the diverse needs of different vehicles. This tool is particularly valuable for electric vehicle owners, urban planners, and researchers in clean energy infrastructure, offering insights into the distribution of charging stations and the variety of charging facilities available.</q>
<div style="max-width:100%; text-align:center; margin-left:auto; margin-right:auto">
  <img src="data/images/commercial-ev-charging-station.jpg" alt="Image caption" style="max-width:75%; height:auto;">
</div>
<p><em>Charging station of EV</em></p>
<p><br></p>
<p style="text-align:center">Scroll to continue<br>▼</p>
`;

/*

CHAPTERS
*/

let divChapter1 =`
<h3>Overview of Charging stations in Pennsylvania</h3>
<p>This map provides an overview of charging stations across Pennsylvania. Each point on the map represents a charging station, regardless of how many charging ports (EVSE) are available at that location. The station count is based on these points, clearly illustrating the distribution of charging facilities across different regions in Pennsylvania. Station addresses are accurately mapped using an automatic geocoding tool. In some cases, station locations are provided directly by external sources (such as station operators) and verified through a Geographic Information System (GIS). These verified coordinates take precedence over automatically generated data, ensuring location accuracy. This provides a reliable reference for EV drivers planning routes, urban planners designing infrastructure, and researchers analyzing the charging network.</p>
`;

let divChapter2 =`
<h3>Southeastern Metropolitan Area of Pennsylvania (Philadelphia and Surroundings)</h3>
<p>The southeastern metropolitan area of Pennsylvania, including Philadelphia and its surrounding suburbs, has the highest concentration of charging stations. This area has a large number of electric vehicle users, and the primary charging stations are located near shopping malls, large office buildings, and residential areas.</p>
`;

let divChapter3 =`
<h3>Central Pennsylvania (Harrisburg and Agricultural Areas)</h3>
<p>Central Pennsylvania is mainly an agricultural and rural area, where charging stations are relatively sparse, primarily found in small towns and highway service areas. The layout of charging stations in this region helps meet the needs of long-distance commuting and transportation.</p>
`;

let divChapter4 =`
<h3>Western Pennsylvania Industrial Cities (Pittsburgh)</h3>
<p>The industrial cities of Western Pennsylvania, such as Pittsburgh, also have a relatively dense network of charging stations, especially around industrial areas and business parks. This region is accelerating its transformation to promote the adoption of electric vehicles.</p>
`;

let divChapter5 =`
<h3>Northeastern Pennsylvania Tourist Area (Pocono Mountains)</h3>
<p>The Pocono Mountains in northeastern Pennsylvania are a popular tourist destination, with charging stations primarily located near hotels, resorts, and major attractions. Electric vehicle tourists can conveniently charge their vehicles here and enjoy green travel.</p>
`;

let divChapter6 =`
<h3>Northwestern Pennsylvania (Erie Region)</h3>
<p>Northwestern Pennsylvania is mostly undeveloped and suburban, with relatively sparse charging station coverage. However, there is potential for more charging infrastructure in the future, particularly along Lake Erie and the interstate highways.</p>
`;

/*

FOOTER SECTION
*/

let footerDiv = `
<p>Source: Alternative Fueling Station Locator</p>
`;

/*

MAP AND TRANSITIONS
*/

var config = {
    // Map style
    style: "mapbox://styles/mapbox/dark-v10",

    // Mapbox token
    accessToken: "pk.eyJ1IjoiZ3NodXlhIiwiYSI6ImNtMWt3eTVqajAyc3cyam9qenVwNjJyamMifQ.Rsl44dpULTeJXxXPiDauFg",
    showMarkers: false,
    markerColor: "#00FF00",
    theme: "light",
    use3dTerrain: false,
    topTitle: topTitleDiv,
    title: titleDiv,
    byline: bylineDiv,
    description: descriptionDiv,
    footer: footerDiv,
    chapters: [
      
      {
        id: "view1",
        alignment: "right",
        hidden: false,
        chapterDiv: divChapter1,
        location: {
          center: [-77.1945, 40.2033], 
          zoom: 9,
          zoomSmall: 11,
          pitch: 45,
          bearing: 10,
        },
        mapAnimation: "flyTo",
        rotateAnimation: true,
        callback: "",
        onChapterEnter: [
            {
                layer: "alt_fuel_stations_points_layer",
                opacity: 1,
                duration: 300,
            },
        ],
        onChapterExit: [
            {
                layer: "alt_fuel_stations_points_layer",
                opacity: 0,
                duration: 300,
            },
          ],
        },
        
        {
        id: "view2",
        alignment: "left",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter2,
        location: {
          center: [-75.1652, 39.9526], // zoom here!
          zoom: 7,
          zoomSmall: 10,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "alt_fuel_stations_points_layer",
                opacity: 1,
                duration: 300,
            },
        ],
        onChapterExit: [
            {
                layer: "alt_fuel_stations_points_layer",
                opacity: 1,
                duration: 300,
            },
        ],
        },
        
        {
            id: "view3",
            alignment: "left",
            hidden: false,
            title: "",
            image: "",
            description: "",
            chapterDiv: divChapter3,
            location: {
              center: [-76.8867, 40.2732], 
              zoom: 9,
              zoomSmall: 11,
              pitch: 0,
              bearing: 0,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: "alt_fuel_stations_line_layer",
                    opacity: 1,
                    duration: 300,
                },
            ],
            onChapterExit: [
                {
                    layer: "alt_fuel_stations_line_layer",
                    opacity: 1,
                    duration: 300,
                },
            ],
          },
        
        {
          id: "view4",
          alignment: "left",
          hidden: false,
          title: "",
          image: "",
          description: "",
          chapterDiv: divChapter4,
          location: {
            center: [-79.9959, 40.4406], 
            zoom: 10,
            zoomSmall: 11,
            pitch: 0,
            bearing: 0,
          },
          mapAnimation: "flyTo",
          rotateAnimation: false,
          callback: "",
          onChapterEnter: [
              {
                  layer: "alt_fuel_stations_line_layer",
                  opacity: 1,
                  duration: 300,
              },
          ],
          onChapterExit: [
              {
                  layer: "alt_fuel_stations_line_layer",
                  opacity: 1,
                  duration: 300,
              },
          ],
        },
        
        {
          id: "view5",
          alignment: "left",
          hidden: false,
          title: "",
          image: "",
          description: "",
          chapterDiv: divChapter5,
          location: {
            center: [-75.1503, 41.1792], 
            zoom: 9,
            zoomSmall: 11,
            pitch: 0,
            bearing: 0,
          },
          mapAnimation: "flyTo",
          rotateAnimation: false,
          callback: "",
          onChapterEnter: [
              {
                  layer: "alt_fuel_stations_line_layer",
                  opacity: 1,
                  duration: 300,
              },
          ],
          onChapterExit: [
              {
                  layer: "alt_fuel_stations_line_layer",
                  opacity: 1,
                  duration: 300,
              },
          ],
        },
        
        {
          id: "view6",
          alignment: "left",
          hidden: false,
          title: "",
          image: "",
          description: "",
          chapterDiv: divChapter6,
          location: {
            center: [-80.0851, 42.1292], 
            zoom: 9,
            zoomSmall: 11,
            pitch: 0,
            bearing: 0,
          },
          mapAnimation: "flyTo",
          rotateAnimation: false,
          callback: "",
          onChapterEnter: [
              {
                  layer: "alt_fuel_stations_line_layer",
                  opacity: 1,
                  duration: 300,
              },
          ],
          onChapterExit: [
              {
                  layer: "alt_fuel_stations_line_layer",
                  opacity: 1,
                  duration: 300,
              },
          ],
        },
    ]};