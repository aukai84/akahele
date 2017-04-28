import * as d3 from 'd3';
import rd3 from 'react-d3-library';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import css from '../d3-css/index.css';

var topojson = require('topojson');
var MapChoropleth = require('react-d3-map-choropleth').MapChoropleth;

let topodata = require('../d3-maps/usa/us.json');
var ZoomControl = require('react-d3-map-core').ZoomControl;
var unemploy = d3.csvParse(`id,rate
01,.097
02,.091
04,.088
05,.121
06,.099
08,.164
09,.167
10,.108
11,.06
12,.118
13,.099
15,.127
16,.17
17,.08
18,.104
19,.085
20,.114
21,.107
22,.14
23,.101
24,.097
25,.096
26,.093
27,.211
28,.07
29,.09
30,.06
31,.107
32,.05
33,.123
34,.12
35,.147
36,.127
37,.099
38,.089
39,.018
40,.107
41,.148
42,.105
44,.136
45,.086
46,.093
47,.05
48,.08
49,.075
50,.08
51,.02
53,.092
54,.111
55,.187
56,.152
72,.092,
`);

console.log('unemploy ', unemploy)
var dataStates = topojson.mesh(topodata, topodata.objects.states, function(a, b) { return a !== b; });
console.log('dataStates', dataStates)
var statePolygon = topojson.feature(topodata, topodata.objects.states).features;

var tooltipContent = function(d) {return d.properties;}

var width = 960;
var height = 600;

var valArr = [];

for(var id in unemploy) {
  for(var rate in unemploy[id]){
    valArr.push({
      "id": id.trim() + '/' + rate.trim(),
      "rate": +unemploy[id][rate]
    })
  }
}

var domain = {
    scale: 'quantize',
    domain: [0, .15],
    range: d3.range(10).map(function(i) { return "q" + i + "-9"; })
  };
  var domainValue = function(d) { return +d.rate; };
  var domainKey = function(d) {return +d.id};
  var mapKey = function(d) {return +d.id};

  var scale = 1280;
  var translate = [width / 2, height / 2];
  var projection = 'albersUsa';

  var onPolygonClick = function(dom, d, i) {
    console.log('click')
  }

  class UsMap extends Component {
    constructor(){
        super();
        this.state={
          scale: scale
        }

        this.zoomIn = this.zoomIn.bind(this)
        this.zoomOut = this.zoomOut.bind(this)
    }

    zoomOut() {
      console.log('zooming out')
      this.setState({
        scale: this.state.scale / 2
      })
    }

    zoomIn() {
      console.log('zooming in')
      this.setState({
        scale: this.state.scale * 2
      })
    }

    render(){

        var zoomIn = this.zoomIn;
        var zoomOut = this.zoomOut;

        return (
          <div>
            <MapChoropleth
              width={width}
              height={height}
              dataPolygon={statePolygon}
              dataMesh={dataStates}
              scale={scale}
              domain={domain}
              domainData={unemploy}
              domainValue={domainValue}
              domainKey={domainKey}
              mapKey={mapKey}
              onClick={this.onClick}
              tooltipContent={tooltipContent}
              translate={translate}
              projection={projection}
              showTooltip={true}
              showGraticule={true}
              showTile={true}
            />
            <ZoomControl
              zoomInClick= {this.zoomIn}
              zoomOutClick= {this.zoomOut}
            />

          </div>
        )
    }
  }


export default UsMap;