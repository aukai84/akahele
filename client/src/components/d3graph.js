import React, {Component} from 'react';
import rd3 from 'react-d3-library';
import node from '../lib/js/d3file.js';
import * as d3 from 'd3';
import '../lib/css/choropleth.css';

const RD3Component = rd3.Component;

var topojson = require('topojson');
var MapChoropleth = require('react-d3-map-choropleth').MapChoropleth;
console.log(MapChoropleth)
var width = 960,
  height = 600;

  var topodata = require('../../public//us.json');
  let unemploy = d3.tsvParse('./unemployment.tsv');
  console.log("topodata ", topodata);
  console.log("unemploy ", unemploy);

  // data should be a MultiLineString
  var dataStates = topojson.mesh(topodata, topodata.objects.states, function(a, b) { return a !== b; });
  /// data should be polygon
  var dataCounties = topojson.feature(topodata, topodata.objects.counties).features;
  console.log('data counties ', dataCounties);

  // domain
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

class ReactD3Component extends Component {
    constructor(props){
        super(props);
        this.state = {
            d3: ''
        }
    }

    componentWillMount() {
        this.setState({
            d3: node
        });
    }

    render(){
        console.log('bar graph ', this.state)
        return (
            <div>
                <h1>TEST BAR GRAPH</h1>
                <RD3Component data={this.state.d3}/>
                <h1>TEST MAP</h1>
                <MapChoropleth
                  width= {width}
                  height= {height}
                  dataPolygon= {dataCounties}
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
                />, document.getElementById('blank-choropleth')
            </div>
        )
    }
}

export default ReactD3Component;