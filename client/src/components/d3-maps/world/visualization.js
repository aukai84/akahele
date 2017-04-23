(function(){
	var margin = { top: 50, right: 50, left:50, bottom: 50};
	var	height = 400 - margin.top - margin.bottom;
	var	width = 800 - margin.left - margin.right;
		

	let svg = d3.select("#map")
		.append("svg")
		.attr("height", height + margin.top + margin.bottom)
		.attr("width", width + margin.left + margin.right)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	d3.queue()
		.defer(d3.json, "world.topojson")
		.await(ready);

	var projection = d3.geoMercator()
		.translate([width / 2, height / 2])
		.scale(100);

	var path = d3.geoPath()
		.projection(projection);

	function ready(error, data){
		console.log(data);

		var countries = topojson.feature(data, data.objects.countries1).features;
		console.log(countries);

		svg.selectAll(".country")
			.data(countries)
			.enter().append("path")
			.attr("class", "country")
			.attr("d", path)
			.on('mouseover', function(d){
				d3.select(this).classed("selected", true);
			})
			.on('mouseout', function(d){
				d3.select(this).classed("selected", false);
			});

	}










})();