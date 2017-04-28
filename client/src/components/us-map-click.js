import * as d3 from 'd3';
import React, {Component} from 'react';
import * as topojson from 'topojson';

let data = require('./d3-maps/states.json');

class StatesMap extends Component {
    constructor(props){
        super(props);
        this.projection = d3.geoAlberUsa()
            .scale(1280);
        this.geoPath = d3.geoPath()
            .projection(this.projection);

    }



    render(){
    }
}

export default StatesMap;