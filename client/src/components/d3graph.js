import React, {Component} from 'react';
import rd3 from 'react-d3-library';
import node from './d3-components/d3-bar-graph.js';
import * as d3 from 'd3';
import '../lib/css/choropleth.css';
import mapNode from './d3maps/usa/visualization.js';
import UsMap from './d3-components/d3-us-map.js';
import groupNode from './d3-components/d3-grouped-bar-chart.js';
import SimpleLineChart from './d3-components/dashed-line-chart.js'
//ONLY CAN HAVE ONE rd3.component at a time!!!
let BarChart = rd3.Component;
let GroupedBarChart = rd3.component;

class ReactD3Component extends Component {
    constructor(props){
        super(props);
        this.state = {
            d3: '',
            barD3: ''
        }
    }

    componentWillMount() {
        this.setState({
            d3: node,
            barD3: groupNode
        });
    }

    render(){
        return (
            <div>
                <h1>TEST BAR GRAPH</h1>
                <BarChart data={this.state.barD3}/>
                <h1>TEST GROUPED LINE CHART</h1>
                <SimpleLineChart honolulu={this.props.honolulu}/>
                <h1>TEST MAP</h1>
                <UsMap/>
            </div>
        )
    }
}

export default ReactD3Component;