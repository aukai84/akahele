import * as d3 from 'd3';
import rd3 from 'react-d3-library';
import React, {Component} from 'react';
import css from '../d3-css/index.css';

let topojson = require('topojson');
let MapChoropleth = require('react-d3-map-choropleth').MapChoropleth;
console.log(MapChoropleth)
let width = 960;
let height = 600;

let topodata = require('../d3maps/usa/us.json');
let unemploy = d3.tsvParse('unemployment.tsv');
console.log('topodata ', topodata)
var dataStates = topojson.mesh(topodata, topodata.objects.states, function(a, b) { return a !== b; });

let statePolygon = topojson.feature(topodata, topodata.objects.states).features;
console.log(statePolygon)
var domain = {
    scale: 'quantize',
    domain: [0, .15],
    range: d3.range(9).map(function(i) { return "q" + i + "-9"; })
  };
  var domainValue = function(d) { return +d.rate; };
  var domainKey = function(d) {return +d.id};
  var mapKey = function(d) {return +d.id};

  var scale = 1280;
  var translate = [width / 2, height / 2];
  var projection = 'albersUsa';

  class UsMap extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <MapChoropleth
              width= {width}
              height= {height}
              dataPolygon= {statePolygon}
              dataMesh= {dataStates}
              scale= {scale}
              domain= {domain}
              domainData= {unemploy}
              domainValue= {domainValue}
              domainKey= {domainKey}
              mapKey = {mapKey}
              translate= {translate}
              projection= {projection}
              showGraticule= {true}
            />
        )
    }
  }

  export default UsMap;
