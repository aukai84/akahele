import * as d3 from 'd3';
import React, {Component} from 'react';
import * as topojson from 'topojson';
import css from './d3-css/index.css';

let usTopoJson = require('./d3-maps/usa/us.json');

let data = require('./d3-maps/states.json');

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

        console.log(wholeMap);
        console.log(feature)

        var bounds = this.geoPath.bounds(feature.geometry.coordinates);
            let dx = bounds[1][0] - bounds[0][0];
            let dy = bounds[1][1] - bounds[0][1];
            let x = (bounds[0][0] + bounds[1][0]) / 2;
            let y = (bounds[0][1] + bounds[1][1]) / 2;
            let scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / this.props.width, dy / this.props.height)));
            /*translate = [width / 2 - scale * x, height / 2 - scale * y];*/
        /*let translate = [width / 2 - scale * x, height / 2 - scale * y];*/
        /* THIS WORKS BEGIN */
        // const statePath = e.target;
        // const d3StatePath = d3.select(statePath);
        // d3StatePath
        //   .transition()
        //   .duration(750)
        //   .attr("transform", "translate( 0, 0 )scale( 2, 2 )")
        //   .style("fill", "red");
        /* THIS WORKS END -  do not erase */

        /* THIS WORKS ON WHOLE MAP */
        const wholeMap = d3.select(this.refs.wholeMap);
        wholeMap
          .transition()
          .duration(750)
          .attr("transform", `translate(${this.props.width / 2 - scale * x}, ${this.props.height / 2 - scale * y}) scale( 3, 3 )`);
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
                states.map(feature => (<g transform={this.transform()} onClick={this.displayState(feature)}>
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

