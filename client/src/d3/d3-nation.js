// import d3 from 'd3';
// import topojson from 'topojson';
// // import queue from 'd3-queue';
// // import d3Queue from 'd3-queue';
// //  console.log('queue', d3Queue);

// console.log('d3', d3);

// var node = document.createElement('div');

// var margin = { top: 0, right: 0, left: 0, bottom: 0};
// var height = 400 - margin.top - margin.bottom;
// var width = 800 - margin.left - margin.right;
    
// console.log('node',node);
// let svg = d3.select(node)
//   .append("svg")
//   .attr("height", height + margin.top + margin.bottom)
//   .attr("width", width + margin.left + margin.right)
//   .append("g")
//   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
 
 
//   d3.queue()
//     .defer(d3.json, "us.json")
//     .defer(d3.tsv, "mockData.tsv")
//     .await(ready);



// var projection = d3.geo.albersUsa() 
//     .translate([width / 2, height / 2])
//     .scale(800);

//   var path = d3.geo.path()
//     .projection(projection);

//   function ready(error, data, unemployment){
//     console.log(data);

//     var rateById = {};

    
//     var color = d3.scale.threshold()
//         .domain([0.02, 0.04, 0.06, 0.08, 0.10])
//         .range(["#f2f0f7", "#dadaeb", "#bcbddc", "#9e9ac8", "#756bb1", "#54278f"]);
  
//     var states = topojson.feature(data, data.objects.states).features;

   
//     unemployment.forEach(function(d) { rateById[d.id] = +d.rate; });

//   svg.selectAll("path")
//       .data(states)
//       .enter().append("path")
//       .attr("class", "node")
//       .attr("d", path)
//       .on('click', function(d){
  
//         console.log('hellow');
//       })
//          .style("fill", function(d) {return color(rateById[d.id]);});


//   }

//   export default node;

 





