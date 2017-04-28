import * as d3 from 'd3';


let node = document.createElement('div');

var svg = d3.select(node),
    margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

/*var parseTime = d3.timeParse("%d-%b-%y");*/

var x = d3.scaleTime()
    .rangeRound([0, width]);

var y = d3.scaleLinear()
    .rangeRound([height, 0]);

var line = d3.line()
    .x(function(d) { return x(d.letter); })
    .y(function(d) { return y(d.number); });

d3.csv("/data/data.csv", function(d) {
  console.log('data', d);
  d.letter = d.letter;
  d.number = parseInt(d.number);
  console.log('what is d', d)
  return d;
}, function(error, data) {
  if (error) throw error;

  x.domain(d3.extent(data, function(d) { return d.letter; }));
  y.domain(d3.extent(data, function(d) { return d.number; }));

  g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
    .select(".domain")
      .remove();

  g.append("g")
      .call(d3.axisLeft(y))
    .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 9)
      .attr("dy", "0.71em")
/*      .attr("text-anchor", "end")*/
      .text("Number");

  g.append("path")
      .data([data])
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
/*      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")*/
      .attr("stroke-width", 1.5)
      .attr("d", line);
});

export default node;