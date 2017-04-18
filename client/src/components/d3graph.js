import React, {Component} from 'react';
import rd3 from 'react-d3-library';
import node from './d3-components/d3-bar-graph.js';
import * as d3 from 'd3';
import '../lib/css/choropleth.css';
import mapNode from './d3maps/usa/visualization.js';
import UsMap from './d3-components/d3-us-map.js';
let RD3Component = rd3.Component;

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
        return (
            <div>
                <h1>TEST BAR GRAPH</h1>
                <RD3Component data={this.state.d3}/>
                <h1>TEST MAP</h1>
                <UsMap/>
            </div>
        )
    }
}

export default ReactD3Component;