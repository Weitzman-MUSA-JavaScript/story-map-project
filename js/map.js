/*
map.js file


*/


var smallMedia = window.matchMedia("(max-width: 600px)").matches;


var layerTypes = {
    fill: ["fill-opacity"],
    line: ["line-opacity"],
    circle: ["circle-opacity", "circle-stroke-opacity"],
    symbol: ["icon-opacity", "text-opacity"],
    raster: ["raster-opacity"],
    "fill-extrusion": ["fill-extrusion-opacity"],
    heatmap: ["heatmap-opacity"],
  };
  

var alignments = {
left: "lefty",
center: "centered",
right: "righty",
full: "fully",
};



function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
  }
  
function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function (prop) {
      var options = {};
      if (layer.duration) {
        var transitionProp = prop + "-transition";
        options = { duration: layer.duration };
        map.setPaintProperty(layer.layer, transitionProp, options);
      }
      map.setPaintProperty(layer.layer, prop, layer.opacity, options);
    });
  }
  


// Set up
var story = document.getElementById("story");
var features = document.createElement("div");
var header = document.createElement("div");
var footer = document.createElement("div");


features.setAttribute("id", "features");



if (config.topTitle) {
    var topTitle = document.createElement("div");
    topTitle.innerHTML = config.topTitle;
    header.appendChild(topTitle);
}

if (config.title) {
    var titleText = document.createElement("div");
    titleText.innerHTML = config.title;
    header.appendChild(titleText);
}

if (config.subtitle) {
    var subtitleText = document.createElement("div");
    subtitleText.innerHTML = config.subtitle;
    header.appendChild(subtitleText);
}

if (config.byline) {
    var bylineText = document.createElement("div");
    bylineText.innerHTML = config.byline;
    header.appendChild(bylineText);
}

if (config.description) {
    var descriptionText = document.createElement("div");
    descriptionText.innerHTML = config.description;
    header.appendChild(descriptionText);
}
  

if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute("id", "header");
    story.appendChild(header);
}


config.chapters.forEach((record, idx) => { 

   
    
    
    var container = document.createElement("div");
    var chapter = document.createElement("div");
    
    
    chapter.classList.add("br3");
    
    
    chapter.innerHTML = record.chapterDiv;
    
    
    
    container.setAttribute("id", record.id);
    
    container.classList.add("step");
    
    
    if (idx === 0) {
      container.classList.add("active");
    }
    
    
    chapter.classList.add(config.theme);
    
  
    container.appendChild(chapter);
    container.classList.add(alignments[record.alignment] || "centered");
    if (record.hidden) {
      container.classList.add("hidden");
    }
    features.appendChild(container);
  });


story.appendChild(features);


if (config.footer) {
    var footerText = document.createElement("p");
    footerText.innerHTML = config.footer;
    footer.appendChild(footerText);
}


if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute("id", "footer");
    story.appendChild(footer);
}
  

mapboxgl.accessToken = config.accessToken;


const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery
      ? "&pluginName=scrollytellingV2"
      : "?pluginName=scrollytellingV2";
    return {
      url: url + suffix,
    };
  };
  

var startingZoom;


if (smallMedia) {
  startingZoom = config.chapters[0].location.zoomSmall;
} else {
  startingZoom = config.chapters[0].location.zoom;
}


var map = new mapboxgl.Map({
    container: "map",
    style: config.style, 
    center: config.chapters[0].location.center, 
    zoom: startingZoom,
    bearing: config.chapters[0].location.bearing, 
    pitch: config.chapters[0].location.pitch, 
    interactive: false, 
    transformRequest: transformRequest,
  });
  

if (config.showMarkers) {
  var marker = new mapboxgl.Marker({ color: config.markerColor });
  marker.setLngLat(config.chapters[0].location.center).addTo(map);
}


var scroller = scrollama();

/* 
add the layers
*/
map.on("load", function () {
    // points_layer (circle)
    map.addLayer({
        id: "alt_fuel_stations_points_layer",
        type: "circle",
        source: {
            type: "geojson",
            data: "data/layers/alt_fuel_stations.geojson"
        },
        paint: {
            "circle-color": "#00FF00",  
            "circle-radius": 5,  
            "circle-stroke-color": "#00FF00",
            "circle-stroke-width": 1
        }
    });
  

    scroller
      .setup({
        step: ".step", 
        offset: 0.55, 
        progress: true,
      })
      .onStepEnter((response) => { 
        var chapter = config.chapters.find(
          (chap) => chap.id === response.element.id
        );
        response.element.classList.add("active"); 
        let thisZoom;
        if (smallMedia) {
          thisZoom = chapter.location.zoomSmall;
        } else {
          thisZoom = chapter.location.zoom;
        }
        thisLocation = {
          bearing: chapter.location.bearing,
          center: chapter.location.center,
          pitch: chapter.location.pitch,
          zoom: thisZoom,
        };
        map[chapter.mapAnimation || "flyTo"](thisLocation);
        if (config.showMarkers) {
          marker.setLngLat(chapter.location.center); 
        }
        if (chapter.onChapterEnter.length > 0) {
          chapter.onChapterEnter.forEach(setLayerOpacity);
        }
        if (chapter.callback) {
          window[chapter.callback](); 
        }
        if (chapter.rotateAnimation) {
          map.once("moveend", function () {
            const rotateNumber = map.getBearing();
            map.rotateTo(rotateNumber + 90, {
              duration: 24000,
              easing: function (t) {
                return t;
              },
            });
          });
        }
      })
      .onStepExit((response) => { 
        var chapter = config.chapters.find(
          (chap) => chap.id === response.element.id
        );
        response.element.classList.remove("active"); 
        if (chapter.onChapterExit.length > 0) {
          chapter.onChapterExit.forEach(setLayerOpacity);
        }
      });
  });
  

  window.addEventListener("resize", scroller.resize);
