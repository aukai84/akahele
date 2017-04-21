import React, {Component} from 'react';
import rd3 from 'react-d3-library';
import node from './d3-components/d3-bar-graph.js';
import * as d3 from 'd3';
import '../lib/css/choropleth.css';
import UsMap from './d3-components/d3-us-map.js';
import groupNode from './d3-components/d3-grouped-bar-chart.js';
import SimpleLineChart from './d3-components/dashed-line-chart.js'
import SimpleBarGraph from './d3-components/bar-graph.js'
//ONLY CAN HAVE ONE rd3.component at a time!!!
let BarChart = rd3.Component;
let GroupedBarChart = rd3.component;

class ChartsContainer extends Component {
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
        console.log(this.props)
        return (
            <div>
                <h1>TEST BAR GRAPH</h1>
                <BarChart data={this.state.barD3}/>
                <h1>TEST GROUPED LINE CHART</h1>
                <SimpleLineChart lineGraphData={this.props.lineGraphData}/>
                <h2>Test bar graph</h2>
                <SimpleBarGraph barGraphData={this.props.barGraphData}/>
            </div>
        )
    }
}

export default ChartsContainer;