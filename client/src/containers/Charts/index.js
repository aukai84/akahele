
import React, {Component} from 'react';
import rd3 from 'react-d3-library';
import node from '../../components/d3-components/d3-bar-graph.js';
import * as d3 from 'd3';
import '../../lib/css/choropleth.css';
import UsMap from '../../components//d3-components/d3-us-map.js';
import groupNode from '../../components/d3-components/d3-grouped-bar-chart.js';
import SimpleLineChart from '../../components/d3-components/dashed-line-chart.js';
import SimpleBarGraph from '../../components//d3-components/bar-graph.js';
import MultiBarGraph from '../../components//d3-components/multi-bar-graph.js';
import {retrieveData} from '../../lib/modules/modules.js';

//ONLY CAN HAVE ONE rd3.component at a time!!!
let BarChart = rd3.Component;

class ChartsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            barGraphData: [],
            lineGraphData: [],
            multiBarData: []
        }
    }

    retrieveHonoluluData(){
        retrieveData('http://localhost:8080/cities/Honolulu/crime/year/2014')
        .then(data => {
            console.log(data)
            this.setState({
                barGraphData: [
                {name: "murder", amount: data.murder_and_manslaughter},
                {name: "rape", amount: data.rape},
                {name: "theft", amount: data.larceny_theft}
            ]
            })
        })

        retrieveData('http://localhost:8080/cities/Honolulu/crime')
        .then(data => {
            this.setState({
                lineGraphData: data
            })
        })

        retrieveData('http://localhost:8080/states/Colorado/crime/year/2010')
        .then(data => {
            this.setState({
                multiBarData: data
            })
        })
    }

    componentWillMount() {
        this.retrieveHonoluluData();
    }


    render(){
        console.log(this.state)
        return (
            <div>
                <h1>TEST GROUPED LINE CHART</h1>
                <SimpleLineChart lineGraphData={this.state.lineGraphData}/>
                <h2>Test bar graph</h2>
                <SimpleBarGraph barGraphData={this.state.barGraphData}/>
                <h2>Multi bar graph</h2>
                <MultiBarGraph multiBarData={this.state.multiBarData}/>
            </div>
        )
    }
}

export default ChartsContainer;