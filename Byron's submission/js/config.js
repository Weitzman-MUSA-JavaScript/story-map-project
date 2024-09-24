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
let topTitleDiv = "<h4>2024 MUSA 611 JavaScript for Planners Story Map Project</h4>";
let titleDiv = "<h1>How accessible is your new home?</h1>";
let bylineDiv = "<p>Byron Huang<br>18 Sep 2024</p>";
let descriptionDiv = `
<p>Welcome!</p>
<p>In October 2024, the government of Singapore will be launching <span style="background-color: yellow;">15 new public housing projects</span> for <a href="https://homes.hdb.gov.sg/home/landing" target="_blank">sale</a>. If you are a prospective homebuyer, how would you choose which project to apply to?</p>
<p>This story map is aimed at illustrating the accessibility of these upcoming public housing projects. One common pain point for prospective homebuyers is comparing the accessibility of different projects.</p>
<p>To aid in the comparison process, the government releases Town Maps (such as the one pictured below), but these are static and comparing projects within the same launch is still not straightforward.</p>
<p> As such, this story map addresses this issue by experimenting with new ways of comparing sites within the same sales launch, using various accessibility indicators.</p>
<p><br></p>
<div style="max-width:70%; text-align:center; margin-left:auto; margin-right:auto">
  <img src="./data/images/sample_townmap.webp" alt="Sample town map" style="max-width:75%; height:auto;">
</div>
<p><em>Above: An example of a static Town Map provided by the Singapore government for prospective buyers, showing parks, cycle paths, stations, and some neighborhood amenities.</em></p>
<p><br></p>
<p>To facilitate comparison between different sites, accessibility metrics are calculated in ArcGIS and presented in the map views below. This story map examines the following indicators:</p>
<p><strong>1. Accessibility to nature</strong><br>Area (in km<sup>2</sup>) of parks and nature reserves within a 1km buffer from site</p>
<p><strong>2. Accessibility to transport</strong><br>
Distance (in m) to nearest MRT/LRT station<br>
Length (in m) of cycle paths within a 1km buffer from site</p>
<p><strong>3. Accessibility to existing neighbourhood amenities</strong><br>
Distance (in m) to nearest hawker centre<br>
Distance (in m) to nearest library<br>
Area (in km<sup>2</sup>) of existing public housing within a 1km buffer from site</p>
<p><br></p>
<p style="text-align:center">Explore the projects below<br>▼</p>
`;

/*
########################################################################
CHAPTERS
*/

let divChapter1 =`
<h3>Existing public housing and the Built-to-Order (BTO) system</h3>
<p>The share of public housing in Singapore's housing market is particularly high in the world. This map shows the extent of public housing in Singapore (in <span style="color:#b20300;">red</span>). <strong>About 80% of Singaporeans live in public housing.</strong></p>
<p>Every three months, the <a href="https://www.hdb.gov.sg/cs/infoweb/homepage" target="_blank">Housing and Development Board (HDB)</a> adds to this public housing stock through the Built-to-Order (BTO) scheme. In this exercise, prospective homebuyers pay $10 to choose a site to ballot for. Successful applicants will receive a queue number for them to choose their preferred unit.</p>
`;

let divChapter2 =`
<h3>October 2024 sales launch</h3>
<p>In October 2024, the Housing and Development Board (HDB) would be launching 15 sites over 9 Planning Areas, covering 8,540 units. This map shows the 15 sites (<span style="background-color: #ffa600;">in orange</span>) slated for launch in October 2024.</p>
<p>The sites range from 270 to 1840 units. Within each site, unit sizes range from smaller 2-room units (about 36 sqm) to larger 5-room units (about 110 sqm). Not all housing types are available in each site.</p>
`;

let divChapter3 =`
<h3>Metric #1 : Accessibility to nature</h3>
<p>Proximity to nature is prized by many prospective homebuyers, particularly in the densely populated nation of Singapore. The value of having easy access to parks and open spaces is further emphasised through the experience of the pandemic. In Singapore, parks are largely managed by the National Parks Board (NParks).</p>
<p>The map here shows the <span style="background-color: #00c600">parks and nature reserves</span> dataset from NParks. Using ArcGIS, the area of parkland in a 1km buffer surrounding each October 2024 project is calculated, as an indicator for comparison between projects.</p>
`;

let divChapter5 =`
<h3>Pasir Ris : Greenest project in the Oct 2024 launch</h3>
<p>In this sales launch, the two Pasir Ris sites stood out among the rest from having the best parks coverage in their surrounding area. This is because the two sites are built right on the Southern end of <strong>Pasir Ris Park</strong> - a waterfront park with excellent views of the rustic island of Pulau Ubin across the channel.</p>
`;

let divChapter6 =`
<h3>Greenery at a price?</h3>
<p>While accessibility to greenery is the strongest characteristic for the two Pasir Ris sites, one drawback is the <strong>lack of accessibility to the city centre</strong>, with Pasir Ris (along with Tampines) being the easternmost districts in Singapore. Excluding last-mile journeys and waiting times, the train ride from Pasir Ris to City Hall takes at least 27 minutes.</p>
`;

let divChapter7 =`
<h3>Metric #2 : Accessibility to transport</h3>
<p>Touching on the point of transportation, it is timely to introduce the second metric considered in this site analysis story map - <strong>accessibility to rail and active transport</strong>.</p>
<p>Due to the high costs of cars (and associated taxes), car ownership in Singapore is particularly low compared to other countries, at 12 cars per 100 people. Most commuters thus rely on the efficient public transit system, comprised of a heavy and light rail network and a bus network (a large part of which are feeder buses to the rail network).</p>
`;

let divChapter8 =`
<h3>Rapid transit lines in Singapore</h3>
<p>At present, Singapore has <strong>8 heavy rail lines and 3 light rail lines</strong>. In the coming decade, 2 additional rail lines would be opened. This map shows the existing rail lines in Singapore.</p>
<p>Geoprocessing on ArcGIS allows us to determine the distance each site is to the nearest rapid transit stop. The results obtained showed that this distance varies widely from project to project in the October 2024 launch.</p>
<p>(Only completed segments of lines are colourised.)</p>
`;

let divChapter9 =`
<h3>Geylang : A housing project built on top of an existing station</h3>
<p>The most remarkable project in this October 2024 sales exercise is the Geylang site, built atop the existing Downtown Line station of Mattar.</p>
<p>Interestingly, this site is a mixture of 260 units of Community Care Apartments and just 160 units of 4-room flats. Community Care Apartments are a new housing type introduced by the government targeted at senior buyers, with customised senior-friendly design features, flexible 15-35 year leases and integrated with neighbourhood care facilities.</p>
<p>Visit this link here to learn more about Community Care Apartments:<a href="https://www.hdb.gov.sg/residential/buying-a-flat/finding-a-flat/types-of-flats/community-care-apartments" target="_blank" style="font-family: 'Barlow', sans-serif; font-weight: 400;">
  https://www.hdb.gov.sg/residential/buying-a-flat/finding-a-flat/types-of-flats/community-care-apartments
</a></p>
`;

let divChapter10 =`
<h3>Jurong West - Have you got a car?</h3>
<p>In contrast, the project at Jurong West is the least accessible to rapid transit. In fact, it is over 1km away from the nearest MRT station (Jurong Lake District station), which is still quite a few years away from opening. The nearest operational MRT station is even further away.</p>
<p>However, accessibility to the road network is superior. The site is located <strong>right beside the exit of the Ayer Rajah Expressway</strong> which runs to the city (with tolls). If one would like to commute to the city by bus, semi-express buses run along the Expressway - a viable alternative to taking feeder buses to Lakeside and onwards by train to the city. Still, the frequency of such semi-express buses are relatively low, and services are susceptible to congestion. Moreover, whether these bus services survive into the future is up to the discretion of the Land Transport Authority.</p>
`;

let divChapter11 =`
<h3>Accessibility to active transport infrastructure</h3>
<p>What about intra-town journeys by active modes?</p>
<p>Despite Singapore's hot weather, the expansion of the cycle path + Park Connector Network is a priority for transport policy. In Aug 2024, the government announced that an additional 84 km of cycle paths would be ready by 2030. Let us find out how accessible the October 2024 sites are to the existing cycle path network.</p>
<p>The goal of the Land Transport Authority is to have 8 in 10 public housing residents to be within 10 minutes from their nearest cycle path.</p>
<p>The map here shows the extent of Singapore's cycle path network <span style="background-color: #3038f964">(in blue)</span>. Spatial analysis on ArcGIS shows that most October 2024 sites have a decent cycle path coverage in a 1 km buffer around the site.</p>
`;

let divChapter13 =`
<h3>Bukit Batok : Not yet ready for cyclists?</h3>
<p>The Bukit Batok project in the October 2024 launch sees the lowest cycle path coverage in its vicinity. Moreover, prospective buyers should note that cycling would unlikely be a pleasant experience in the short to medium term due to the fact that the project is right beside an important site access road for the <strong>Tengah New Town development</strong>, with significant movements of heavy vehicles to be expected during the day.</p>
`;

let divChapter14 =`
<h3>Metric #3 : Accessibility to existing neighbourhood amenities</h3>
<p>Would you live in a neighbourhood where the nearest hawker centre is over 15 minutes away by walking in the Singapore sun?</p>
<p>This last section considers a set of indicators on the accessibility of each site to <strong>existing neighbourhood amenities</strong>, by looking at the distance to the nearest hawker centre, library and the density of existing mixed-use public housing estates in the 1 km buffer of each site.</p>
`;

let divChapter15 =`
<h3>Hawker centres : Food havens within a country with good food</h3>
<p>The multi-ethnic character of Singapore blesses the country with exceptionally good food from various cuisines, including the signature Nasi Lemak pictured below. The colonial experience allows different cuisines to influence one another, giving rise to unique dishes not commonly found elsewhere.</p>
<p>The National Environment Agency operates 125 hawker centres - with generally low rents for stallholders. These are shown in the map here in <span style="color: #d50a78;">purple</span>. Residents can find an assortment of food from various cultures within each hawker centre at reasonable prices.</p>
<img src="./data/images/nasi_lemak.webp" alt="Nasi Lemak from Punggol Hawker Centre" style="max-width:75%; height:auto;">
`;

let divChapter16 =`
<h3>Bayshore : Where are the hawkers at?</h3>
<p>Among the 15 sites in the October 2024 launch, the two sites at the Bayshore neighbourhood have the lowest accessibility to existing hawker centres (over 1 km away from the nearest hawker centre). Perhaps it is time for planners to build Bayshore's very own hawker centre?</p>
`;

let divChapter17 =`
<h3>Jurong West : A similar plight</h3>
<p>Like Bayshore, the Jurong West site is also over 1 km away from the nearest hawker centre. Would the proximity to the expressway tempt residents to drive to their favourite good food spots?</p>
`;

let divChapter18 =`
<h3>Knowledge is power : Public libraries in Singapore</h3>
<p>Public libraries are a draw for Singaporeans - young and old. Their air-conditioned reading and study rooms are perfect for individuals and families to spend hours reading for leisure or doing work.</p>
<p>At present, Singapore has 27 public libraries. Existing public libraries are also progressively renovated as they age, and new ones are built in some New Towns such as Punggol.</p>
<p>
  Libraries in Singapore are of high quality, as exemplified in the 
  <a href="https://www.nlb.gov.sg/main/visit-us/our-libraries-and-locations/libraries/punggol-regional-library" target="_blank">
    Punggol Regional Library
  </a>, 
  which houses a makerspace. All facilities are free to use.
</p>
<img src="./data/images/makerspace_punggol.webp" alt="Punggol Regional Library's dedicated makerspace" style="max-width:75%; height:auto;">
<p>Many sites in the October 2024 launch have decent access to existing public libraries.</p>
`;

let divChapter19 =`
<h3>Ang Mo Kio : Library at the doorstep</h3>
<p>The Ang Mo Kio site in the October 2024 launch is right by the Ang Mo Kio Public Library, one of the earliest ones opened in Singapore.</p>
`;

let divChapter20 =`
<h3>Neighbourhood amenities in existing public housing estates</h3>
<p>One distinctive characteristic of neighbourhood planning in Singapore is their mixed-use character, an influence of post-war British town planning (in New Towns such as Stevenage and Letchworth).</p>
<p>As such, the density of existing public housing in a 1 km buffer is a useful proxy for access to neighbourhood amenities, covering anything from barber shops, bookstores, cafes, convenience stores and independent grocers.</p>
`;

let divChapter21 =`
<h3>Bayshore : Breaking the predominantly private residential character of the East Coast</h3>
<p>By this measure (density of existing public housing in vicinity), the two sites at the neighbourhood of Bayshore have the lowest access to amenities in existing public housing estates.</p>
`;

let divChapter22 =`
<h3>Diversification of housing mix in the East Coast</h3>
<p>Indeed, the East Coast of Singapore is generally dominated by private residential estates, and planners intend to introduce a mix of public and private housing in this area, through new developments such as Bayshore. However, residents can expect there to be limited amenties in existing public housing estates in the meantime.</p>
`;

let divChapter23 =`
<h3>Conclusion</h3>
<p>From the above case studies, we can see that there are plenty of tradeoffs when making a choice for which new launch site to pick. For instance, the lack of accessibility to public transit may be compensated by generous parks and open spaces or superior highway access, as seen in Jurong West.</p>
<p>As you make your choice on where to live, do check out the types of subsidies available to your household! <a href="https://www.hdb.gov.sg/residential/buying-a-flat/understanding-your-eligibility-and-housing-loan-options/flat-and-grant-eligibility" target="_blank">Click here to learn more about subsidies and eligibility criteria. (Opens in new tab)</a></p>
`;

/*
########################################################################
FOOTER SECTION
*/

let footerDiv = `
<p>The author would like to thank the Singapore government for access to datasets used in this project, obtained via <a href="https://data.gov.sg" target="_blank">https://data.gov.sg</a>.</p>
<p>Credits to Juan Francisco Saldarriaga (PointsUnknown) for the storymap template: <a href="https://github.com/PointsUnknown/PointsUnknown.github.io" target="_blank">https://github.com/PointsUnknown/PointsUnknown.github.io</a></p>
`;

/*
########################################################################
MAP AND TRANSITIONS - THE MAIN CONFIGURATION SECTION
*/

var config = {
    style: "mapbox://styles/byronnn/cm15ugzyg00dg01pc3ucid3od",
    accessToken: "pk.eyJ1IjoiYnlyb25ubiIsImEiOiJjbTB2NG9qajYxOTE1Mmtwd3Q1aDd5cjM2In0.K6SRujI45VvXnG1vfcwbwA",
    showMarkers: false,
    markerColor: "#242422",
    theme: "light",
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
        id: "view1",
        alignment: "right",
        hidden: false,
        chapterDiv: divChapter1,
        location: {
          center: [103.809038, 1.353424], // default sg center
          zoom: 11,
          zoomSmall: 11,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "Sites_v6",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
          ],
        onChapterExit: [
            {
                layer: "Sites_v6",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
          ],
        },
        // CHAPTER 2
        // ################################################################
        {
        id: "view2",
        alignment: "left",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter2,
        location: {
          center: [103.809038, 1.353424], // default sg center
          zoom: 11,
          zoomSmall: 11,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
        onChapterExit: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
      },
      // CHAPTER 3
      // ################################################################
      {
        id: "view3",
        alignment: "full",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter3,
        location: {
          center: [103.809038, 1.353424], // default sg center
          zoom: 11,
          zoomSmall: 11,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
        onChapterExit: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
      },
      // CHAPTER 5
      // ################################################################
      {
        id: "view5",
        alignment: "left",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter5,
        location: {
          center: [103.950820, 1.376144], // Pasir Ris sites
          zoom: 15,
          zoomSmall: 13,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
        onChapterExit: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
      },
      // CHAPTER 6
      // ################################################################
      {
        id: "view6",
        alignment: "right",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter6,
        location: {
          center: [103.950820, 1.376144], // Pasir Ris sites
          zoom: 13,
          zoomSmall: 11,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
        onChapterExit: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
      },
      // CHAPTER 7
      // ################################################################
      {
        id: "view7",
        alignment: "full",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter7,
        location: {
          center: [103.809038, 1.353424], // default sg center
          zoom: 11,
          zoomSmall: 11,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
        onChapterExit: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
      },
      // CHAPTER 8
      // ################################################################
      {
        id: "view8",
        alignment: "left",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter8,
        location: {
          center: [103.809038, 1.353424], // default sg center
          zoom: 11,
          zoomSmall: 11,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
        onChapterExit: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
      },
      // CHAPTER 9
      // ################################################################
      {
        id: "view9",
        alignment: "right",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter9,
        location: {
          center: [103.883357, 1.326979], // Mattar
          zoom: 16,
          zoomSmall: 13,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
        onChapterExit: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
      },
      // CHAPTER 10
      // ################################################################
      {
        id: "view10",
        alignment: "left",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter10,
        location: {
          center: [103.727650, 1.326608], // Jurong West
          zoom: 15,
          zoomSmall: 13,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
        onChapterExit: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
      },
      // CHAPTER 11
      // ################################################################
      {
        id: "view11",
        alignment: "left",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter11,
        location: {
          center: [103.809038, 1.353424], // default sg center
          zoom: 10,
          zoomSmall: 10,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 1,
                duration: 300,
            }
        ],
        onChapterExit: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 1,
                duration: 300,
            }
        ],
      },
      // CHAPTER 13
      // ################################################################
      {
        id: "view13",
        alignment: "right",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter13,
        location: {
          center: [103.737579, 1.354322], // Bukit Batok
          zoom: 15,
          zoomSmall: 13,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 1,
                duration: 300,
            }
        ],
        onChapterExit: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
      },
      // CHAPTER 14
      // ################################################################
      {
        id: "view14",
        alignment: "full",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter14,
        location: {
          center: [103.809038, 1.353424], // default sg center
          zoom: 11,
          zoomSmall: 11,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
        onChapterExit: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
      },
      // CHAPTER 15
      // ################################################################
      {
        id: "view15",
        alignment: "left",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter15,
        location: {
          center: [103.809038, 1.353424], // default sg center
          zoom: 11,
          zoomSmall: 11,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
        onChapterExit: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
      },
      // CHAPTER 16
      // ################################################################
      {
        id: "view16",
        alignment: "left",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter16,
        location: {
          center: [103.945785, 1.314164], // Bayshore
          zoom: 15,
          zoomSmall: 13,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
        onChapterExit: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
      },
      // CHAPTER 17
      // ################################################################
      {
        id: "view17",
        alignment: "right",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter17,
        location: {
          center: [103.727650, 1.326608], // Jurong West
          zoom: 15,
          zoomSmall: 13,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
        onChapterExit: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
      },
      // CHAPTER 18
      // ################################################################
      {
        id: "view18",
        alignment: "left",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter18,
        location: {
          center: [103.809038, 1.353424], // default sg center
          zoom: 11,
          zoomSmall: 11,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
        onChapterExit: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
      },
      // CHAPTER 19
      // ################################################################
      {
        id: "view19",
        alignment: "left",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter19,
        location: {
          center: [103.845655, 1.374842], // Ang Mo Kio
          zoom: 16,
          zoomSmall: 14,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
        onChapterExit: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
      },
      // CHAPTER 20
      // ################################################################
      {
        id: "view20",
        alignment: "left",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter20,
        location: {
          center: [103.809038, 1.353424], // default sg center
          zoom: 11,
          zoomSmall: 11,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0.3,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
        onChapterExit: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0.3,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
      },
      // CHAPTER 21
      // ################################################################
      {
        id: "view21",
        alignment: "left",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter21,
        location: {
          center: [103.945785, 1.314164], // Bayshore
          zoom: 16,
          zoomSmall: 14,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [],
        onChapterExit: [],
      },
      // CHAPTER 22
      // ################################################################
      {
        id: "view22",
        alignment: "left",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter22,
        location: {
          center: [103.944516, 1.309243], // Bayshore / East Coast district
          zoom: 14,
          zoomSmall: 12,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0.3,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
        onChapterExit: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
      },
      // CHAPTER 23
      // ################################################################
      {
        id: "view23",
        alignment: "left",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter23,
        location: {
          center: [103.809038, 1.353424], // default sg center
          zoom: 10,
          zoomSmall: 10,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [{
            layer: "Sites_v6",
            opacity: 1,
            duration: 300,
        },
        {
            layer: "MRTLines_20240914",
            opacity: 0.3,
            duration: 300,
        },
        {
            layer: "MRTStations_20240914_v1",
            opacity: 0,
            duration: 300,
        },
        {
            layer: "HawkerCentres",
            opacity: 0,
            duration: 300,
        },
        {
            layer: "PublicLibraries",
            opacity: 0,
            duration: 300,
        },
        {
            layer: "Parks",
            opacity: 0.1,
            duration: 300,
        },
        {
            layer: "ExistingHDBDissolved",
            opacity: 0,
            duration: 300,
        },
        {
            layer: "AllCyclingPathPCN",
            opacity: 0,
            duration: 300,
        }],
        onChapterExit: [
            {
                layer: "Sites_v6",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "MRTLines_20240914",
                opacity: 0.3,
                duration: 300,
            },
            {
                layer: "MRTStations_20240914_v1",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "HawkerCentres",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "PublicLibraries",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "Parks",
                opacity: 0.1,
                duration: 300,
            },
            {
                layer: "ExistingHDBDissolved",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "AllCyclingPathPCN",
                opacity: 0,
                duration: 300,
            }
        ],
      },
    ],
  };