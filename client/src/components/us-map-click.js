import * as d3 from 'd3';
import React, {Component} from 'react';
import * as topojson from 'topojson';
import css from './d3-css/index.css';

let usTopoJson = require('./d3-maps/usa/us.json');

let data = require('./d3-maps/states.json');

 console.log('data', data);

var path = d3.geoPath;
console.log(path)

const choropleth = [
  'rgb(245,251,255)',
  'rgb(222,235,247)',
  'rgb(198,219,239)',
  'rgb(158,202,225)',
  'rgb(107,174,214)',
  'rgb(66,146,198)',
  'rgb(33,113,181)',
  'rgb(8,81,156)',
  'rgb(8,48,107)'
];



const State = ({data, geoPath, feature, quantize}) => {
    let color = 'silver';

    if(data){

        color = '#98c8f2';

    }
    return (<path d={geoPath(feature)} style={{fill: color}} title={feature.id} />)
}

class StatesMap extends Component {
    constructor(props){
        super(props);
        this.state={
          zoomInitted: false,
          transform: null,
          nationData: props.nationData
        }
        this.projection = d3.geoAlbersUsa()
            .scale(1280);
        this.geoPath = d3.geoPath()
            .projection(this.projection);
        this.quantize = d3.scaleQuantize()
            .range(d3.range(4));
        this.updateD3(props);
        this.zoom = d3.zoom()
            .scaleExtent([.5, 10])
            .on('zoom', this.onZoom.bind(this));
    }


        //udpate d3 objects when props udpate
    componentWillReceiveProps(newProps){
        this.updateD3(newProps);
        this.setState({
          nationData: newProps.nationData
        })
    }

    //updating d3
    updateD3(props){
        this.projection.translate([this.props.width/2, this.props.height/2]);

        if(this.props.crimeTotal){
            this.quantize.range([10000, 75000]);
        }
    }


    displayState(feature){

        this.props.setCurrentView(feature.properties.name)
    }

    componentDidUpdate() {
      if(!this.state.zoomInitted){
        const svg = d3.select(this.refs.svg);

        svg.call(this.zoom);

        this.setState({
          zoomInitted: true
        })
      }
    }

    onZoom() {
      console.log('onZoom')
      this.setState({
        transform: d3.event.transform
      });
    }

    get transform(){
      console.log('transform')
      if(this.state.transform){
        const { x, y, k } = this.state.transform;

        return `translate(${x}, ${y}) scale(${k})`;
      }else{
        return null;
      }
    }


    render(){
      console.log('nation data', this.state.nationData);
        if(!this.props.usTopoJson){
            return null;
        } else {
            const us = this.props.usTopoJson,
                statesMesh = topojson.mesh(us, us.objects.states, (a, b) => a !== b),
                states = topojson.feature(us, us.objects.states).features;

        return (
            <g>
              <svg width={this.width} height={this.height} ref="svg">
              {
                states.map(feature => (<g transform={this.transform} onClick={() => {this.displayState(feature)}}>
                  <State
                    geoPath={this.geoPath}
                    feature={feature}
                    key={feature.id}
                    quantize={this.quantize}
                    data={(this.props.crimeTotal, {stateId: feature.id})}
                  /></g>)
                )
              }
            <path d={this.geoPath(statesMesh)} transform={this.transform} style={{fill: 'none', stroke: '#fff', strokeLinejoin: 'round'}}/>
          </svg>
          </g>
        )
      }
    }
}

export default StatesMap;

