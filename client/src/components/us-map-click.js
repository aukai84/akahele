import * as d3 from 'd3';
import React, {Component} from 'react';
import * as topojson from 'topojson';
import css from './d3-css/index.css';

let usTopoJson = require('./d3-maps/usa/us.json');

let data = require('./d3-maps/states.json');

function zoomCoordinates(stateName){
  console.log(stateName);
  return {
    "California": {x: 204.5, y: -370.95 },
    "Washington": {x: 36.485, y: 381.47 },
    "Hawaii": {x: -400.66, y: -1810.93 },
    "Oregon":{x: 52.0046, y: -41.963 },
    "Texas": {x: -180, y: -600 },
    "Missouri": {x: -1100, y: -700 },
    "Illinois": {x: -1500, y: -700 },
    "Tennessee":{x: -1800, y: -1000 },
    "Arkansas":{x: -1300, y: -1200 },
    "Pennsylvania":{x: -2200, y: -600 },
    "Ohio":{x: -2000, y: -600 },
    "Arizona":{x: 140, y: -1000 },
    "Rhode Island":{x: 100, y: 100 },
    "New Mexico":{x: -300, y: -1050 },
    "Colorado":{x: 100, y: 100 },
    "Georgia":{x: -1900, y: -1400 },
    "South Dakota":{x: -658.5, y: -228 },
    "Virginia":{x: -2200, y: -900 },
    "Alabama":{x: -1700, y: -1400 },
    "Louisiana":{x: -1300, y: -1400 },
    "West Virginia":{x: -2200, y: -850 },
    "Connecticut":{x: 100, y: 100 },
    "South Carolina":{x: -2000, y: -1200 },
    "Utah":{x: -100, y: -550 },
    "Idaho":{x: -39.995, y: -15.963 },
    "Florida":{x: -2000, y: -1600 },
    "Indiana":{x: -1800, y: -700 },
    "Texas":{x: -700, y: -1400 },
    "Wyoming":{x: -505.5, y: -260.5 },
    "Vermont":{x: -2400, y: -300 },
    "North Carolina":{x: -2000, y: -1000 },
    "New Hampshire":{x: -2500, y: -300 },
    "New Jersey":{x: -2200, y: -600 },
    "Alaska":{x: 100, y: -1750.944 },
    "Oklahoma":{x: -800, y: -1150 },
    "Wisconsin":{x: -1500, y: -215 },
    "North Dakota":{x: -656.5, y: -114.75 },
    "Delaware":{x: 100, y: 100 },
    "Minnesota":{x: -1000, y: -120 },
    "Kentucky":{x: -1800, y: -800 },
    "Massachusetts":{x: -2400, y: -500 },
    "Maryland":{x: 100, y: 100 },
    "Iowa":{x: -1100, y: -500 },
    "Maine":{x: -2700, y: -100 },
    "Nevada":{x: -6, y: -500 },
    "Nebraska":{x: -700.5, y: -400 },
    "Kansas":{x: -850, y: -700 },
    "Michigan":{x: -1800, y: -100 },
    "Montana":{x: -340, y: 6.66 },
    "New York":{x: -2200, y: -500 },
    "Mississippi":{x: -1600, y: -1400 },
  }[stateName];
}

var path = d3.geoPath;
console.log('path', path)
var active = d3.select(null);

const State = ({data, geoPath, feature, quantize}) => {
    let color = 'cornflowerblue';

    if(data){

        color = color;

    }
    return (<path d={geoPath(feature)} style={{fill: color}} title={feature.id} />)
}

const ClickedState = ({data, geoPath, feature, quantize}) => {
  let color = 'red';

  if(data.feature){

      color = color;
  }
  return (<path d={geoPath(feature)} style={{fill: color}} title={feature.id} />)
}

class StatesMap extends Component {
    constructor(props){
        super(props);
        this.state={
          zoomInitted: false,
          transform: null
        }
        this.projection = d3.geoAlbersUsa()
            .scale(1280);
        this.geoPath = d3.geoPath()
            .projection(this.projection)
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
    }

    //updating d3
    updateD3(props){
        this.projection.translate([this.props.width/2, this.props.height/2]);

        if(this.props.crimeTotal){
            this.quantize.domain([10000, 75000]);
        }
    }

    displayState = (feature) => (e) => {
        console.log('feature', feature)
        // console.log('e', e.target)
        const statePath = e.target;
        const d3StatePath = d3.select(statePath);
        const target = zoomCoordinates(feature.properties.name)
        const coordinates = feature.geometry.coordinates;
        console.log(coordinates)


/*        var bounds = this.geoPath.bounds(feature.geometry.coordinates);
            let dx = bounds[1][0] - bounds[0][0];
            let dy = bounds[1][1] - bounds[0][1];
            let x = (bounds[0][0] + bounds[1][0]) / 2;
            let y = (bounds[0][1] + bounds[1][1]) / 2;
            let scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / this.props.width, dy / this.props.height)));
            /*translate = [width / 2 - scale * x, height / 2 - scale * y];*/
        /* THIS WORKS BEGIN */
 /*       d3StatePath
          .transition()
          .duration(750)
          .attr("transform", "translate( 0, 0 )scale( 2, 2 )")
          .style("fill", "red");*/
        /* THIS WORKS END -  do not erase */

        /* THIS WORKS ON WHOLE MAP */
        const wholeMap = d3.select(this.refs.wholeMap);
        wholeMap
          .transition()
          .duration(750)
          .attr('class', 'features')
          .attr("transform", `translate( ${target.x}, ${target.y} ) scale( 4 , 4 )`)
       /* THIS WORKS ON WHOLE MAP END */

        this.props.setCurrentView(feature.properties.name)
        this.clicked(feature.geometry.coordinates)
    }

    componentDidUpdate() {
      if(!this.state.zoomInitted){
        const svg = d3.select(this.refs.svg)
        svg.call(this.zoom)

        this.setState({
          zoomInitted: true
        })
      }
    }

    transition(){
      console.log("transitioning")
    }

    clicked(d){
      // console.log("click click", d)
      if(active.node() === this) return this.reset();
/*      active.classed("active", false);
      active = d3.select(this).classed("active", true);*/
      const svg = d3.select(this.refs.svg);
        // console.log('svg', svg)

      // var bounds = this.geoPath.bounds(d),
      //   dx = bounds[1][0] - bounds[0][0],
      //   dy = bounds[1][1] - bounds[0][1],
      //   x = (bounds[0][0] + bounds[1][0]) / 2,
      //   y = (bounds[0][1] + bounds[1][1]) / 2,
      //   scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / this.props.width, dy / this.props.height))),
      //   translate = [this.props.width / 2 - scale * x, this.props.height / 2 - scale * y];
      // console.log('bounds', bounds)
console.log(d);
      svg.select("g").style("fill", "red");
// svg.attr("transform", "translate(30) rotate(45 50 50)");
      // var zoom = d3.zoom()
      //     .scaleExtent([0,1]);
      // svg.attr("transform", "translate(" + 200 + "," + 600 + ")").call(zoom);



          /*svg.call(zoom)*/
      /*this.zoom.transform,
      d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale);*/

      // svg.transition()
      //   .duration(5000)
      //   .call(zoom.translate([1, 10]).event)
        /*.each("end", jump);*/
 /*       .call(this.zoom.translate([0, 0]).scale(1).event);*/

    }

    reset(){
      console.log("resetting zoom")
      active.classed("active", false);
      active = d3.select(null);

      this.svg.transition()
        .duration(750)
        .call(this.zoom.translate([0, 0]).scale(1).event);
    }

/*    zoomed() {
      g.style("stroke-width", 1.5 / d3.event.transform.k + "px");
      // g.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")"); // not in d3 v4
      g.attr("transform", d3.event.transform); // updated for d3 v4
    }*/

    onZoom() {


      this.setState({
        transform: d3.event.transform
      });
    }

    transform(){
      console.log('transform', this.state.transform)
      if(this.state.transform){
        const { x, y, k } = this.state.transform;

        return `translate(${x}, ${y}) scale(${k})`;
      }else{
        return null;
      }
    }

    render(){
        if(!this.props.usTopoJson){
            return null;
        } else {
            const us = this.props.usTopoJson,
                statesMesh = topojson.mesh(us, us.objects.states, (a, b) => a !== b),
                states = topojson.feature(us, us.objects.states).features;

        return (
            <g ref="wholeMap">
              <svg width={this.width} height={this.height} ref="svg">
              {
                states.map(feature => (<g transform={this.transform()} featureId={feature.id} onClick={this.displayState(feature)}>
                  <State
                    geoPath={this.geoPath}
                    feature={feature}
                    key={feature.id}
                    quantize={this.quantize}
                    data={(this.props.crimeTotal, {stateId: feature.id})}
                  /></g>)
                )
              }
            <path d={this.geoPath(statesMesh)} transform={this.transform()} style={{fill: 'none', stroke: '#fff', strokeLinejoin: 'round'}}/>
          </svg>
          </g>
        )
      }
    }
}

export default StatesMap;

