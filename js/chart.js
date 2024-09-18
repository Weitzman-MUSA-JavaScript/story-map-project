
/**
 * This script generates a line chart using D3.js library.
 * The chart is rendered in an SVG element appended to the '#chart-container' element.
 * The data for the chart is loaded from a CSV file located at 'assets/production_over_time.csv'.
 * The chart displays the production in gallons over time for different states.
 * The chart is interactive, allowing the user to select a state from a dropdown menu to update the chart accordingly.
 *
 * @requires d3
 */

/**
 * Set the dimensions and margins of the graph.
 *
 * @constant {Object} margin - The margin object with top, right, bottom, and left properties.
 * @constant {number} width - The width of the chart.
 * @constant {number} height - The height of the chart.
 */

/**
 * Append the SVG object to the body of the page.
 *
 * @constant {Object} svg - The SVG object representing the chart.
 */

/**
 * Load the data from the CSV file and perform necessary operations to render the chart.
 *
 * @function
 * @param {Array} data - The data loaded from the CSV file.
 */

/**
 * Update the chart based on the selected group.
 *
 * @function
 * @param {string} selectedGroup - The selected group (state) from the dropdown menu.
 */

/**
 * Event listener for the dropdown menu change event.
 * Updates the chart based on the selected option.
 *
 * @event
 * @param {Object} event - The event object.
 * @param {Object} d - The data object.
 */
// set the dimensions and margins of the graph
const margin = {top: 10, right: 30, bottom: 30, left: 60};
const width = 470 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

// appen the svg object to the body of the page
// eslint-disable-next-line no-undef
const svg = d3.select('#chart-container')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

// eslint-disable-next-line no-undef
d3.csv('assets/production_over_time.csv').then( function(data) {
  // eslint-disable-next-line no-undef
  const allGroup = new Set(data.map((d) => d.State));

  // eslint-disable-next-line no-undef
  d3.select('#selectButton')
      .selectAll('myOptions')
      .data(allGroup)
      .enter()
      .append('option')
      .text((d) => d)
      .attr('value', (d) => d);

  const customPalette = ['#FBAF0A', '#E75304', '#A92D04', '#FBA35A', '#FB8806'];

  // eslint-disable-next-line no-undef
  const myColor = d3.scaleOrdinal()
      .domain(allGroup) // 'allGroup' is the list of unique groups
      .range(customPalette);

  // eslint-disable-next-line no-undef
  const x = d3.scaleLinear()
      // eslint-disable-next-line no-undef
      .domain(d3.extent(data, function(d) {
        return d.Year;
      }))
      .range([0, width]);
  svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      // eslint-disable-next-line no-undef
      .call(d3.axisBottom(x).ticks(7))
      .selectAll('text')
      .attr('font-size', '11px');

  // eslint-disable-next-line no-undef
  const y = d3.scaleLinear()
      // eslint-disable-next-line no-undef
      .domain([0, d3.max(data, function(d) {
        return +d.ProductionInGallons;
      })])
      .range([height, 0]);
  svg.append('g')
      // eslint-disable-next-line no-undef
      .call(d3.axisLeft(y))
      .selectAll('text')
      .attr('font-size', '11px');

  const line = svg
      .append('g')
      .append('path')
      .datum(data.filter(function(d) {
        return d.State=='NEW HAMPSHIRE';
      }))
      // eslint-disable-next-line no-undef
      .attr('d', d3.line()
          .x(function(d) {
            return x(d.Year);
          })
          .y(function(d) {
            return y(+d.ProductionInGallons);
          }),
      )
      .attr('stroke', function(d) {
        return myColor('valueA');
      })
      .style('stroke-width', 4)
      .style('fill', 'none')
      .style('stroke-linecap', 'round');

  /**
 * Updates the chart based on the selected group.
 *
 * @param {string} selectedGroup - The selected group to filter the data.
 * @return {void}
 */
  function update(selectedGroup) {
    const dataFilter = data.filter(function(d) {
      return d.State==selectedGroup;
    });

    line.datum(dataFilter)
        .transition()
        .duration(1000)
        // eslint-disable-next-line no-undef
        .attr('d', d3.line()
            .x(function(d) {
              return x(d.Year);
            })
            .y(function(d) {
              return y(+d.ProductionInGallons);
            }),
        )
        .attr('stroke', function(d) {
          return myColor(selectedGroup);
        });
  }

  // eslint-disable-next-line no-undef
  d3.select('#selectButton').on('change', function(event, d) {
    // eslint-disable-next-line no-invalid-this, no-undef
    const selectedOption = d3.select(this).property('value');
    update(selectedOption);
  });
});
