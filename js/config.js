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
let titleDiv = "<h1>Mixed Feelings</h1>";
let bylineDiv = "<p>Urban Life, Death and Conflicts in the Heart of Europe</p>";
let descriptionDiv = `


<p>Cities are diverse, not just in terms of infrastructure and spaces but also the food,  sight, sounds and encounters and feelings of its inhabitants. For most urban dwellers and planners, Prague’s tessellated mess of urban functions is probably a familiar sight to you. Each one of us probably has areas which we love, areas we deem shady or even just places we obliviously walk pass everyday. 
As such, the urban fabric of cities such as Prague end up being a canvas of experiences and feelings over time, painted like a 5 year old discovering oil paint for the first time. However, as this article shows, such diversity and density should not be taken for granted. </p>

<p style="text-align:center; font-family:roboto; font-size: .7em;">Scroll to continue<br>▼</p>
`
;

/*
########################################################################
CHAPTERS
*/

let divChapter1 =`
<h3> Introduction </h3>
<p>Located at the riverbanks of the Vlata River, Prague's modern districts are a confluence of rich histories, diverse sub-cultures and economic functions. Its organic vein-like road systems and almost arbitrary zoning is a living legacy of the Roman and Bohemia Kingdoms and Soviet era's planning and city development.
Today, the city hosts diverse cultures and functions, ranging from classical music and fine dining to rock and roll and pilsner lager beers dating back to 994CE. This diversity is reflected within its landuse mix, a tessellated palette of various urban zones.</p>
`;

let divChapter2 =`
<h3>Mixed feelings</h3>
<p>The city's diverse populations, subcultures, communities and lifestyles unsurprisingly make its <em>various places</em> a host to a great assortment of opinions and <em>feelings</em> regarding different places such as: </p>
`;

let divChapter3 =`
<h3>happiness</h3>
<p></p>
`;

let divChapter4 =`
<h3>Unhappiness</h3>
<p></p>
`;

let divChapter5 =`
<h3>and even fear</h3>
<p></p>
`;

let divChapter6 =`
<h3>and often times all together at once</h3>
<p>As revealed by this map, it is perhaps unsurprising that the places within Prague with the strongest and most polarised views lie within its dense central districts home to the city's artists, entrepreneurs, workers (like us), grandmothers and pigeons. 
This is no easy feat. The coexistence of diverse communities within close quarters often leads to disagreements over the use of common spaces.  As we shall see, people's favourite places are often <em>contested spaces.</em> </p>
`;

let divChapter7 =`
<h3>the Bustling and Bussin' Barracks of karlin</h3>
<p> Enter Karsana Karlin, or <em>Karlin Barracks</em> - one of Prague's most popular culture centers is one of the many contested spaces within Prague. Built in 1848, it has a long history of changing hands between different ministries who all could never quite agree with what to do with the space. This all changed in 2017, when the area was developed into a cultural center, hosting art fairs, live music events, and seasonal open air movie screenings of vignette movies. </p>
`;

let divChapter8 =`
<h3>The Fall of Karlin Barracks</h3>
<p>Unfortunately, Karlin's creatives woke up one Wednesday and found out that their favourite cultural quarters was slated for redevelopment. 
The Prague 8 Building Authority had ordered an immediate closure notice, citing the illegality of the past 7 years of cultural activities and memories made in the space, which was apparently
still officially delineated as a military space.</p>
`;

let divChapter9 =`
<h3>A long war</h3>
<p>Legal definitions regarding land use were not the true reasons for the closure of Karlin, but part of the strategy of unhappy neighbours who have grown increasingly annoyed and unhappy over time.
Despite addressing complaints and avoiding night music events, the venue's frequent night movie screenings - which could only be held at night, caused much grievance to surrounding communities.
The case of Karlin is not an uncommon one within Prague, which is littered with 'Party' streets and old towns crowded with tourists. However, the area's popularity and lack of consultation left many
ardent fans outraged and wondering, why are local authorities so against a vibrant nightlife?
 </p>
`;

let divChapter10 =`
<h3>The Politics of Planning</h3>
<p>Answers may be found in <em> Prague 1 </em>, where tourism has been the bane of local communities for over a decade. Softer policies and regulations other than eviction have often been employed to manage their problems. Rather than
banning groups, local authorities appointed a 'night-life mayor' who implemented greater restrictions on public alcohol consumption, campaigns encouraging greater civic-mindedness and a move to
cars from the city center at night. However, the plan was immediately revoked by the municipal government, who cited the lack of adequate justification and consultation regarding other effects. 
Besides addressing the concerns of diverse communities, local authorities often have to consider the overall plans for the city and the potential economic, traffic, and financial consequences of their actions.
It is rather unlikely that Prague 8's officials simply hated Karlin's yogis and movie buffs. However, they should nonetheless be blamed for failing to consult different communities, understand their diverse needs, and mediating potential conflicts.
 </p>
`;

/*
########################################################################
FOOTER SECTION
*/

let footerDiv = `
<h3>CONCLUSION <br/> <em> Managing Feelings, Negotiating Conflicts</em></h3>
<p>Karlin's concerns are not uncommon. Conflicts over the use of space have defined human history, and it is perhaps unsurprising that they endure within modern societies jam-packed within dense urban environments. Cities worldwide are
densifying rapidly, sometime unplanned, and increasingly due to a planning enthusiasm for compact urbanism and its benefits to sustainability. However, we need not look to far back into history to see how differences in demographics and views can lead to segregation, inner-city decline and sprawl. It is ever important for planners to consider the conflicting needs of citizens and how to manage them.
This will require intentional efforts to engage the variety of stakeholders within different spaces in decision-making, and to provide them avenues for feedback and discussion. Participatory emotion mapping, which generated the data used for this map, is a
powerful tool for engaging communities and gathering rich insights into community perceptions, experiences and their sense of place. As Jane Jacobs once declared, "Cities have the capability of providing something for everybody, only because, and only when, they are created by everybody". 
Facilitating this process ought to be the goal of every planner, as difficult as it may be. <br/><br/><br/> Written by: Xian Lu, Lee <br/> Sources: "The Sound and the Fury: Reasoned Debate over ‘Social Noise’ in Prague Drowned Out" Jules Eisenchteter. The Balkan Insight. 2024 <br/> 
The emotional map of Prague. Panek et al, 2021
</p>
`;

/*
########################################################################
MAP AND TRANSITIONS - THE MAIN CONFIGURATION SECTION
*/

const mapboxStyle = 'xllee/cm0y8m3k400kg01nt0sme38kw';
var config = {
    // Change the map style here
    style: "mapbox://styles/xllee/cm0y8m3k400kg01nt0sme38kw",

    // Replace this with your own Mapbox token!
    accessToken: 'pk.eyJ1IjoieGxsZWUiLCJhIjoiY20weTQ3M2VvMGt0MzJsb21lZXc1YTdpMCJ9.F1PUTPRCUtzGAEE3X8JNTg',
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
          center: [14.476, 50.10], // default center
          zoom: 12.2,
          zoomSmall: 12.2,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
           
            {
                layer: "your_polygons_layer",
                opacity: 0.6,
                duration: 0,
            },
        ],
        onChapterExit: [
            {
               
                layer: "your_polygons_layer",
                opacity: 0,
                duration: 0,
            },
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
          center: [14.435, 50.09], // zoom here!
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
                
                layer: "your_points_layer",
                opacity: 0.6,
                duration: 300,
            
            },
        ],
        onChapterExit: [
            
            
            {
                layer: "your_points_layer",
                opacity: 0,
                duration: 300,
          
            },
        ],
        },
        // CHAPTER 3
        // ################################################################
        {
            id: "view3",
            alignment: "left",
            hidden: false,
            title: "",
            image: "",
            description: "",
            chapterDiv: divChapter3,
            location: {
              center: [14.435, 50.09], 
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
                    layer: "happy",
                    opacity: 0.4,
                    duration: 300,
                },
               
            ],
            onChapterExit: [
                {
                    layer: "happy",
                    opacity: 0,
                    duration: 300,
                },
                
            ],
          },

   

// CHAPTER 4
        // ################################################################
        {
            id: "view4",
            alignment: "right",
            hidden: false,
            title: "",
            image: "",
            description: "",
            chapterDiv: divChapter4,
            location: {
              center: [14.435, 50.09], 
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
                    layer: "unhappy",
                    opacity: 0.4,
                    duration: 300,
                },
               
            ],
            onChapterExit: [
               
                {
                    layer: "unhappy",
                    opacity: 0,
                    duration: 300,
                },
               
            ],
          },
        //chapter 5
        {
        id: "view5",
        alignment: "left",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter5,
        location: {
          center: [14.435, 50.09], 
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
                layer: "fear",
                opacity: 0.4,
                duration: 300,
            },
  
        ],
        onChapterExit: [
            
            {
                layer: "fear",
                opacity: 0,
                duration: 300,
            },
           
        ],
      },
    //chapter 6
    {
        id: "view6",
        alignment: "left",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter6,
        location: {
          center: [14.435, 50.09], 
          zoom: 11,
          zoomSmall:11 ,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
         
            {
                layer: "fear",
                opacity: 0.4,
                duration: 300,
            },
            {
                layer: "happy",
                opacity: 0.4,
                duration: 300,
            },
            {
                layer: "unhappy",
                opacity: 0.4,
                duration: 300,
            },
        
        ],
        onChapterExit: [
            {
                layer: "happy",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "unhappy",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "fear",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "your_polygons_layer",
                opacity: 0,
                duration: 300,
            },
        ],
      },
      {
        id: "view7",
        alignment: "left",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter7,
        location: {
          center: [14.44, 50.09], 
          zoom: 15,
          zoomSmall:15 ,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
          
        
            {
                layer: "happy",
                opacity: 0.3,
                duration: 300,
            },
            {
                layer: "neighbourhood",
                opacity: 0.9,
                duration: 300,
            },
            {
                layer: "barrack",
                opacity: 1,
                duration: 300,
            },
           
            
            
        
        ],
        onChapterExit: [
           
            {
                layer: "happy",
                opacity: 0,
                duration: 300,
            },
     
            {
                layer: "neighbourhood",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "barrack",
                opacity: 0,
                duration: 300,
            },
        ],
      },
      {
        id: "view8",
        alignment: "left",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter8,
        location: {
          center: [14.44, 50.09], 
          zoom: 14,
          zoomSmall:14 ,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
          
        
            {
                layer: "unhappy",
                opacity: 0.3,
                duration: 300,
            },
            
            {
                layer: "neighbourhoodb",
                opacity: 0.9,
                duration: 300,
                color: 'black'
            },
            {
                layer: "barrack",
                opacity: 1,
                duration: 300,
                
            },
           
            
            
        
        ],
        onChapterExit: [
            {
                layer: "unhappy",
                opacity: 0.0,
                duration: 300,
            },
            
            {
                layer: "neighbourhoodb",
                opacity: 0.0,
                duration: 300,
                color: 'black'
            },
            {
                layer: "your_polygons_layer",
                    opacity: 0,
                    duration: 0,
                }
        
        ],
      },
      {
        id: "view9",
        alignment: "left",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter9,
        location: {
          center: [14.44, 50.09], 
          zoom:14,
          zoomSmall:14 ,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
          
        
            {
                layer: "happy",
                opacity: 0.3,
                duration: 300,
            },
            {
                layer: "unhappy",
                opacity: 0.3,
                duration: 300,
            },
            {
                layer: "neighbourhoodb",
                opacity: 0.9,
                duration: 300,
            },
            {
                layer: "barrack",
                opacity: 1,
                duration: 300,
            },
           
            
            
        
        ],
        onChapterExit: [
           
            {
                layer: "happy",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "unhappy",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "neighbourhoodb",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "barrack",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "your_polygons_layer",
                    opacity: 0,
                    duration: 0,
                }
        ],
      },

      {
        id: "view10",
        alignment: "right",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter10,
        location: {
          center: [14.43, 50.087], 
          zoom: 13.5,
          zoomSmall:13.5 ,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
           
            {
                layer: "district",
                opacity: 0.9,
                duration: 300,    
            },
           
        
        ],
        onChapterExit: [
            {
                layer: "district",
                opacity: 0,
                duration: 300,
                

               
            }, 
            {
            layer: "your_polygons_layer",
                opacity: 0,
                duration: 0,
            }
        ],
      },
      
    ]};
    
