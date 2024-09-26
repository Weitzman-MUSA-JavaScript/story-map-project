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
let topTitleDiv = "<h4></h4>";
let titleDiv = "<h1>Saving trees:  not monkey business</h1>";
let bylineDiv = "<p><br></p>";
let descriptionDiv = `
<p>Forests are one of the largest carbon sinks in the world that helps to reduce the amount of carbon dioxide in the atmosphere. The loss of forests through deforestation and forest fires increase global carbon emissions contributing to  global warming. </p>
<p>Indonesian forests are one of the largest and most diverse ecosystems in the world making it an important environment that we should protect. As such, this storymap will focus on Indonesia and the Bornean Orangutans that is critically endangered.</p>
<div style="max-width:100%; text-align:center; margin-left:15%; margin-right:15%">
  <img src="./data/images/orangutan.jpg" alt="Image caption" style="max-width:75%; height:auto;">
</div>
<p><em>Source: World Wildlife Fund</em></p>
`;

/*
########################################################################
CHAPTERS
*/

let divChapter1 =`
<h3>Global Sequestration by trees</h3>
<p>On average, tropical rainforests across the globe sequester more carbon dioxide than boreal and temperate forests.</p>
<p>Approximately 50% of Indonesia's land mass was natural forests in 2022 and being a tropical rainforests, it is one of the biggest contributing forests as carbon sinks.</p>
`;

let divChapter2 =`
<h3>Carbon emissions due to tree loss</h3>
<p>For the past 20 years, tree loss globally averaged 8.1 Gt per year, which is equivalent to half the amount of carbon dioxide sequestered by forests.</p>
<p>Indonesia is the second largest contirbutor to carbon emissions due to tree loss, only behind Brazil.</p>
`;

let divChapter3 =`
<h3>Annual forest carbon net emissions/removals </h3>
<p>This is caluclated by subtracting the carbon sequestration from the trees from the carbon emissions from tree loss.</p>
<p>Indonesia is contributing way more carbon dioxide through deforestation than the remaining forest trees can take in.</p>
`;

let divChapter4 =`
<h3>Carbon net emissions/removals in Indonesia</h3>
<p>Looking more closely at the different provinces in Indonesia, we can see that central Indonesia especially the Island of Borneo produces high net carbon emissions due to tree loss.</p>
`;

let divChapter5 =`
<h3>Borneo Orangutans</h3>
<p>Borneo Orangutans are found mainly on the Island of Borneo near Tuanan which is in the area of high net carbon emissions due to tree loss.</p>
<p>This critically endanagered species is facing an increasingly hostile environment due to high rates of tree loss and carbon emissions. We need to act now to save them!</p>
`;


/*
########################################################################
FOOTER SECTION
*/

let footerDiv = `
<p>Made by: Sylvia Lam</p>
<div>Sources:</div> 
<div>The World Bank</div>
<div>Movebank</div>
`;

/*
########################################################################
MAP AND TRANSITIONS - THE MAIN CONFIGURATION SECTION
*/

var config = {
    // Change the map style here
    style: "mapbox://styles/mapbox/light-v11",

    // Replace this with your own Mapbox token!
    accessToken: "pk.eyJ1Ijoic3lsdmlhdXBlbm4iLCJhIjoiY20weTdodGpiMGt4MDJsb2UzbzZnd2FmMyJ9.H6mn-LOHFUdv7swHpM7enA",
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
        alignment: "left",
        hidden: false,
        chapterDiv: divChapter1,
        location: {
          center: [119, -5], 
          zoom: 2,
          zoomSmall: 11,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "indonesia_boundary",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "orangutan2016",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "emissions",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "net_emissions",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "sequestration_country",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "tree_loss_emission",
                opacity: 0,
                duration: 300,
            },
        ],
        onChapterExit: [
            {
                layer: "indonesia_boundary",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "orangutan2016",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "emissions",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "net_emissions",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "sequestration_country",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "tree_loss_emission",
                opacity: 0,
                duration: 300,
            },
          ],
        },        
      // CHAPTER 2
      // ################################################################
      {
        id: "view2",
        alignment: "right",
        hidden: false,
        chapterDiv: divChapter2,
        location: {
          center: [119, -5], // default center
          zoom: 2,
          zoomSmall: 11,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "indonesia_boundary",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "orangutan2016",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "emissions",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "net_emissions",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "sequestration_country",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "tree_loss_emission",
                opacity: 1,
                duration: 300,
            },
        ],
        onChapterExit: [
            {
                layer: "indonesia_boundary",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "orangutan2016",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "emissions",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "net_emissions",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "sequestration_country",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "tree_loss_emission",
                opacity: 0,
                duration: 300,
            },
          ],
        },
        // CHAPTER 3
      // ################################################################
      {
        id: "view3",
        alignment: "right",
        hidden: false,
        chapterDiv: divChapter3,
        location: {
          center: [119, -5], // default center
          zoom: 2,
          zoomSmall: 11,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "indonesia_boundary",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "orangutan2016",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "emissions",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "net_emissions",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "sequestration_country",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "tree_loss_emission",
                opacity: 0,
                duration: 300,
            },
        ],
        onChapterExit: [
            {
                layer: "indonesia_boundary",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "orangutan2016",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "emissions",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "net_emissions",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "sequestration_country",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "tree_loss_emission",
                opacity: 0,
                duration: 300,
            },
          ],
        },
        // CHAPTER 4
        // ################################################################
        {
        id: "view4",
        alignment: "left",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter4,
        location: {
          center: [119, -5], // zoom here!
          zoom: 3.5,
          zoomSmall: 11,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "indonesia_boundary",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "orangutan2016",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "emissions",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "net_emissions",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "sequestration_country",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "tree_loss_emission",
                opacity: 0,
                duration: 300,
            },
        ],
        onChapterExit: [
            {
                layer: "indonesia_boundary",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "orangutan2016",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "emissions",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "net_emissions",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "sequestration_country",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "tree_loss_emission",
                opacity: 0,
                duration: 300,
            },
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
              center: [114.25, -2.25], 
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
                    layer: "indonesia_boundary",
                    opacity: 0,
                    duration: 300,
                },
                {
                    layer: "orangutan2016",
                    opacity: 1,
                    duration: 300,
                },
                {
                    layer: "net_emissions",
                    opacity: 0,
                    duration: 300,
                },
                {
                    layer: "emissions",
                    opacity: 0,
                    duration: 300,
                },
                {
                    layer: "sequestration_country",
                    opacity: 0,
                    duration: 300,
                },
                {
                    layer: "tree_loss_emission",
                    opacity: 0,
                    duration: 300,
                },
            ],
            onChapterExit: [
                {
                    layer: "indonesia_boundary",
                    opacity: 0,
                    duration: 300,
                },
                {
                    layer: "orangutan2016",
                    opacity: 0,
                    duration: 300,
                },
                {
                    layer: "net_emissions",
                    opacity: 0,
                    duration: 300,
                },
                {
                    layer: "emissions",
                    opacity: 0,
                    duration: 300,
                },
                {
                    layer: "sequestration_country",
                    opacity: 0,
                    duration: 300,
                },
                {
                    layer: "tree_loss_emission",
                    opacity: 0,
                    duration: 300,
                },
            ],
          }

    ]};