import * as d3 from 'd3';
import * as rd3 from 'react-d3-library';
import * as topojson from 'topojson';
import React, {Component} from 'react';
import * as queue from 'queue';

let mapNode = document.createElement('div');

    var margin = { top: 0, right: 0, left: 0, bottom: 0};
	var	height = 400 - margin.top - margin.bottom;
	var	width = 800 - margin.left - margin.right;


	let svg = d3.select(mapNode)
		.append("svg")
		.attr("height", height + margin.top + margin.bottom)
		.attr("width", width + margin.left + margin.right)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	d3.queue()
		.defer(d3.json, "us.json")
		.defer(d3.tsv, "unemployment.tsv")
		.await(ready);

	var projection = d3.geoAlbersUsa()
		.translate([width / 2, height / 2])
		.scale(800);

	var path = d3.geoPath()
		.projection(projection);

	function ready(error, data, unemployment){
		console.log(data);
		// console.log(unemployment);

		var rateById = {};


		var color = d3.scaleThreshold()
    		.domain([0.02, 0.04, 0.06, 0.08, 0.10])
    		.range(["#f2f0f7", "#dadaeb", "#bcbddc", "#9e9ac8", "#756bb1", "#54278f"]);

		var states = topojson.feature(data, data.objects.states).features;

		unemployment.forEach(function(d) { rateById[d.id] = +d.rate; });
		// adding paths for each state
		//change to onclick, changes route to specific state
		svg.selectAll("path")
			.data(states)
			.enter().append("path")
			.attr("class", "state")
			.attr("d", path)
			.on('click', function(d){

				console.log('hellow');
			})
			.on('mouseout', function(d){
				d3.select(this).classed("selected", false);
			})
			.style("fill", function(d) {return color(rateById[d.id]);});
	}

    export default mapNode;




