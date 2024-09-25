/*
Welcome to the config.js file
It holds the actual content of chapters, the transitions, and other
important information for the storymap.
########################################################################
Contents:
*/

/*
########################################################################
HEADER SECTION
*/
const topTitleDiv = '<h4>JavaScript Assignment 1 - Storymap</h4>';
const titleDiv = '<h1>Major Military Facilities in the United States</h1>';
const bylineDiv = '<p>Jun, Youngsang<br>September 25, 2024</p>';
const descriptionDiv = `
<p>This storymap aims to provide a brief history of the U.S. military and an overview of major military bases for those who may work for/with U.S. Forces regarding U.S. military facilities in the future.
</p>

<p><br></p>
<p style="text-align:center">Scroll to continue<br>▼</p>
`;

/*
########################################################################
CHAPTERS
*/

const divChapter1 =`
<h3>History of the U.S. Forces</h3>
<p>The U.S. military formed on June 14, 1775, during the American Revolution with the country’s first formal fighting force, the Continental Army, led by George Washington. In 1789, the U.S. government established the Department of War as a federal executive in charge of warfare, and took charge of the U.S. <font color=green><b>Army</b></font>, <font color=blue><b>Navy</b></font>, and <font color=red><b>Marine Corps</b></font>. In 1798, the Department of Navy was established as a federal executive in charge of naval warfare. Starting in 1834, the Marine Corps came under the control of the Department of Navy. In 1947, by the National Security Act, National Military Establishment and Department of the <font color=skyblue><b>Air Force</b></font> was established, and in 1949 the National Military Establishment was reorganized into the U.S. Department of Defense (DoD), which continues to control each of the military branches to this day. </p>
<h3> About <a href="https://geospatial-usace.opendata.arcgis.com/maps/fc0f38c5a19a46dbacd92f2fb823ef8c/about">Military Installations, Ranges, and Training Areas (MIRTA) Data</a> </h3>
<p>The DoD installations are commonly referred to as a base, camp, post, station, yard, center, homeport facility for any ship, or other activity under the jurisdiction, custody, control of the DoD. Publicly releasable locations of DoD Sites in the 50 states, Puerto Rico, and Guam available through data.gov. This dataset was created from source data provided by the four Military Service Component headquarters and was compiled by the Defense Installation Spatial Data Infrastructure (DISDI) Program within the Office of the Deputy Under Secretary of Defense for Installations and Environment, Business Enterprise Integration Directorate. Sites were selected from the 2009 Base Structure Report (BSR), a summary of the DoD Real Property Inventory.</p>
`;

const divChapter2 =`
<h3>West Point (New York)</h3>
<iframe src="https://www.youtube.com/embed/zw97_4VTu6c?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<p>West Point is the oldest continuously occupied regular army post in the U.S. West Point had a major role in U.S. history during the American Revolution. General George Washington considered West Point the most important strategic location in America and in 1778 selected Thaddeus Kosciuszko, a Polish engineer, to design the fortifications for West Point. Washington later transferred his headquarters near West Point in 1779. American Continental Line soldiers constructed forts, gun batteries, and redoubts and installed a 65-ton iron chain across the Hudson River to block British invasions along the main transportation waterway. Since 1802, the <a href="https://www.westpoint.edu/">United States Military Academy</a> has been located.</p>
`;

const divChapter3 =`
<h3>Eglin Air Force Base (Florida)</h3>
<img src="data/images/240801-F-KO637-1614.JPG">
<p>With a prominent role in airpower history, Eglin Air Force Base is the largest air force base in the U.S., covering an area of approximately 724 square miles. In 1931, personnel of the Army Air Corps Tactical School looking for a site for a bombing and gunnery range, saw the potential of the sparsely populated forested areas surrounding Valparaiso, Florida, and the vast expanse of the adjacent Gulf of Mexico. The base was named Eglin Field in honor of Lieutenant Colonel Frederick I. Eglin, U.S. Air Corps, killed on 1 January 1937 in an aircraft crash. Today in Eglin Air Force Base, the 96th Test Wing tests and evaluates non-nuclear munitions, electronic combat systems and navigation/guidance systems.</p>
`;

const divChapter4 =`
<h3>Naval Station Norfolk (Virginia)</h3>
<img src="./data/images/naval.JPG">
<p>Naval Station Norfolk is the largest naval complex in the world, and is geographically located in the Southeastern corner of the Commonwealth of Virginia. The area is collectively known as "Hampton Roads" and is commonly referred to as such by the residents of the area. Built in 1917, shortly after the U.S. entered World War I,  separate Naval Station Norfolk and Naval Air Station Norfolk were merged into a single installation to be called Naval Station Norfolk in 1999.</p>
`;

const divChapter5 =`
<h3>Camp Pendleton (California)</h3>
<img src="data/images/240508-M-RA094-1040.JPG">
<p>Marine Corps Base Camp Pendleton, the Corps' largest West Coast expeditionary training facility, encompasses more than 125,000 acres of Southern California terrain. The site of Camp Pendleton, where Capt. Gaspar de Portola, a Spaniard, anchored in 1781, was used as Franciscan missions and farm for over 150 years. However in 1941, since the expansion of all U.S. armed forces was authorized by President Roosevelt's proclamation for an unlimited national emergency, it became a Marine Corps base. Camp Pendleton serves as the headquarters of the U.S. Marine Corps Forces, Pacific and is one of the Department of Defense's busiest installations and offers a broad spectrum of training facilities for many units. 
</p>
`;

const divChapter6 =`
<h3>Peterson Space Force Base (Colorado)</h3>
<img src="./data/images/221005-X-IF173-2002.JPG">
<p>Peterson Space Force Base (SFB) is located in Colorado Springs, Colorado, at an altitude of 6,035 feet and shares runways with the Colorado Springs Airport. Peterson SFB traces its roots to the Colorado Springs Army Air Base, established in 1942, at the Colorado Springs Municipal Airport, which had been in operation since 1926. The base renamed to Peterson Army Air Base, in honor of the late 1st Lt. Edward J. Peterson, who was killed in a test flight in 1942. In 2020, the 21st Space Wing was reorganized as part of Space Base Delta 1. Peterson Air Force Base was renamed Peterson Space Force Base in 2021.</p>

`;

/*
########################################################################
FOOTER SECTION
*/

const footerDiv = `
<h3>Epilogue</h3>
<p>11 years ago today, I honorably completed my mandatory military service with Korean Augmentation to the United States Army (KATUSA). 5 years ago today, while working for the Ministry of National Defense, the Republic of Korea (ROK) as a civil servant, my team conducted a consultation with the U.S. Forces Korea (USFK) regarding the relocation of U.S. military facilities stationed at the ROK Air Bases. Today I am glad to be here in the U.S., studying Urban Spatial Analytics project using JavaScript at the University of Pennsylvania. I hope this storymap will be helpful to those who start to work for/with the U.S. military.</p>
<div style="max-width:70%; text-align:center; margin-left:auto; margin-right:auto">
  <img src="./data/images/1265217_586456401413183_310314933_o.jpg" alt="Image caption" style="max-width:90%; height:auto;">
</div>
<p align="center"><em>September 25, 2013, Camp Red Cloud, USFK base in Korea</em></p>
<div style="max-width:70%; text-align:center; margin-left:auto; margin-right:auto">
  <img src="./data/images/190925_MND-USFK.png" alt="Image caption" style="max-width:90%; height:auto;">
</div>
<p align="center"><em>September 25, 2019, Camp Humphreys, USFK base in Korea</em></p>
<h3>Reference</h3>
<a href="https://www.military.com/history">https://www.military.com/history</a><br>
<a href="https://www.westpoint.edu/about/history-of-west-point/brief-history-of-west-point">https://www.westpoint.edu/about/history-of-west-point/brief-history-of-west-point</a><br>
<a href="https://www.eglin.af.mil/About-Us/History/">https://www.eglin.af.mil/About-Us/History/</a><br>
<a href="https://cnrma.cnic.navy.mil/Installations/NAVSTA-Norfolk/">https://cnrma.cnic.navy.mil/Installations/NAVSTA-Norfolk/</a><br>
<a href="https://www.pendleton.marines.mil/Main-Menu/Introduction/">https://www.pendleton.marines.mil/Main-Menu/Introduction/</a><br>
<a href="https://www.petersonschriever.spaceforce.mil/">https://www.petersonschriever.spaceforce.mil/</a><br>
Storymap Template: <a href="https://pointsunknown.nyc/">https://pointsunknown.nyc/</a><br>
Data: <a href="https://geospatial-usace.opendata.arcgis.com/maps/fc0f38c5a19a46dbacd92f2fb823ef8c/about">Military Installations, Ranges, and Training Areas (MIRTA) Data, U.S. Army Corps of Engineers Geospatial</a>
`;

/*
########################################################################
MAP AND TRANSITIONS - THE MAIN CONFIGURATION SECTION
*/

const config = {
  // Change the map style here
  style: 'mapbox://styles/mapbox/satellite-streets-v12',

  // Replace this with your own Mapbox token!
  accessToken: 'pk.eyJ1IjoieWptYXJrIiwiYSI6ImNtMHlwOG81NTBxZ2kya3BsZXp5MXJ5Z2wifQ.ijwd5rmGXOOJtSao2rNQhg',
  showMarkers: false,
  markerColor: '#ffffff',
  theme: 'dark',
  use3dTerrain: false,
  topTitle: topTitleDiv,
  title: titleDiv,
  byline: bylineDiv,
  description: descriptionDiv,
  footer: footerDiv,
  chapters: [
    // CHAPTER 1
    // ################################################################
    {
      id: 'view1',
      alignment: 'full',
      hidden: false,
      chapterDiv: divChapter1,
      location: {
        center: [-99.95713, 40.38912], // default center
        zoom: 3,
        zoomSmall: 3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'your_line_layer',
          opacity: 1,
          duration: 0,
        },
        {
          layer: 'your_points_layer',
          opacity: 0,
          duration: 300,
        },
        {
          layer: 'your_polygons_layer',
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: 'your_line_layer',
          opacity: 1,
          duration: 300,
        },
        {
          layer: 'your_points_layer',
          opacity: 0,
          duration: 300,
        },
        {
          layer: 'your_polygons_layer',
          opacity: 0,
          duration: 300,
        },
      ],
    },
    // CHAPTER 2
    // ################################################################
    {
      id: 'view2',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '',
      chapterDiv: divChapter2,
      location: {
        center: [-73.99404, 41.39213], // zoom here!
        zoom: 13,
        zoomSmall: 13,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'your_line_layer',
          opacity: 1,
          duration: 300,
        },
        {
          layer: 'your_points_layer',
          opacity: 0,
          duration: 300,
        },
        {
          layer: 'your_polygons_layer',
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: 'your_line_layer',
          opacity: 1,
          duration: 300,
        },
        {
          layer: 'your_points_layer',
          opacity: 0,
          duration: 300,
        },
        {
          layer: 'your_polygons_layer',
          opacity: 0,
          duration: 300,
        },
      ],
    },
    // CHAPTER 3
    // ################################################################
    {
      id: 'view3',
      alignment: 'right',
      hidden: false,
      title: '',
      image: '',
      description: '',
      chapterDiv: divChapter3,
      location: {
        center: [-86.51686, 30.46428],
        zoom: 13,
        zoomSmall: 13,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'your_line_layer',
          opacity: 1,
          duration: 300,
        },
        {
          layer: 'your_points_layer',
          opacity: 0,
          duration: 300,
        },
        {
          layer: 'your_polygons_layer',
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: 'your_line_layer',
          opacity: 1,
          duration: 300,
        },
        {
          layer: 'your_points_layer',
          opacity: 0,
          duration: 300,
        },
        {
          layer: 'your_polygons_layer',
          opacity: 0,
          duration: 300,
        },
      ],
    },
    // CHAPTER 4
    // ################################################################
    {
      id: 'view4',
      alignment: 'left',
      hidden: false,
      title: '',
      image: '',
      description: '',
      chapterDiv: divChapter4,
      location: {
        center: [-76.32042, 36.95463], // zoom here!
        zoom: 13,
        zoomSmall: 13,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'your_line_layer',
          opacity: 1,
          duration: 300,
        },
        {
          layer: 'your_points_layer',
          opacity: 0,
          duration: 300,
        },
        {
          layer: 'your_polygons_layer',
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: 'your_line_layer',
          opacity: 1,
          duration: 300,
        },
        {
          layer: 'your_points_layer',
          opacity: 0,
          duration: 300,
        },
        {
          layer: 'your_polygons_layer',
          opacity: 0,
          duration: 300,
        },
      ],
    },
    // CHAPTER 5
    // ################################################################
    {
      id: 'view5',
      alignment: 'right',
      hidden: false,
      title: 'U.S. Marine',
      image: '',
      description: '',
      chapterDiv: divChapter5,
      location: {
        center: [-117.29593, 33.31256], // zoom here!
        zoom: 13,
        zoomSmall: 13,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'your_line_layer',
          opacity: 1,
          duration: 300,
        },
        {
          layer: 'your_points_layer',
          opacity: 0,
          duration: 300,
        },
        {
          layer: 'your_polygons_layer',
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: 'your_line_layer',
          opacity: 1,
          duration: 300,
        },
        {
          layer: 'your_points_layer',
          opacity: 0,
          duration: 300,
        },
        {
          layer: 'your_polygons_layer',
          opacity: 0,
          duration: 300,
        },
      ],
    },
    // CHAPTER 6
    // ################################################################
    {
      id: 'view6',
      alignment: 'right',
      hidden: false,
      title: 'U.S. Space Force',
      image: '',
      description: '',
      chapterDiv: divChapter6,
      location: {
        center: [-104.69621, 38.82643], // zoom here!
        zoom: 13,
        zoomSmall: 13,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'your_line_layer',
          opacity: 1,
          duration: 300,
        },
        {
          layer: 'your_points_layer',
          opacity: 0,
          duration: 300,
        },
        {
          layer: 'your_polygons_layer',
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: 'your_line_layer',
          opacity: 1,
          duration: 300,
        },
        {
          layer: 'your_points_layer',
          opacity: 0,
          duration: 300,
        },
        {
          layer: 'your_polygons_layer',
          opacity: 0,
          duration: 300,
        },
      ],
    },
  ]};

config();
