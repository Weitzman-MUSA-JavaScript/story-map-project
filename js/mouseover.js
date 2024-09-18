/* eslint-disable no-unused-vars */

/**
 * @description This file contains the implementation of a mouseover effect using a trace canvas and an image icon.
 * @requires p5
 */

const points = [];
let traceCanvas;
let leafIcon;

/**
 * Preloads the leaf icon image.
 */
function preload() {
  // Load image with error handling
  // eslint-disable-next-line no-undef
  leafIcon = loadImage('assets/maple.svg');
}


/**
 * @description Set up the p5 canvas and frame rate.
 */
function setup() {
  // Create a separate canvas for the mouse traces
  // eslint-disable-next-line no-undef
  traceCanvas = createCanvas(windowWidth, windowHeight);
  traceCanvas.position(0, 0);
  traceCanvas.style('z-index', '1000'); // Bring the canvas to the front
  traceCanvas.style('position', 'absolute');
  traceCanvas.style('pointer-events', 'none'); // Allows interaction with the background
  // eslint-disable-next-line no-undef
  frameRate(5);
}

/**
 * @description Draw function to display mouse traces.
 */
function draw() {
  // eslint-disable-next-line no-undef
  clear();

  // Add the current mouse position to the array
  const point = {
    // eslint-disable-next-line no-undef
    x: mouseX,
    // eslint-disable-next-line no-undef
    y: mouseY,
  };
  points.push(point);

  if (points.length > 50) {
    points.splice(0, 1);
  }

  for (let i = 0; i < points.length; i++) {
    // fill(0, 255, 0, 255 - i * 5);
    // eslint-disable-next-line no-undef
    image(leafIcon, points[i].x - 10, points[i].y - 10, 60, 60);
  }
}


