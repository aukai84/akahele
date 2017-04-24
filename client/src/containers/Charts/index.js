
import React, {Component} from 'react';
import rd3 from 'react-d3-library';
import * as d3 from 'd3';
import '../../lib/css/choropleth.css';
import UsMap from '../../components/chart-components/d3-us-map.js';
import SimpleLineChart from '../../components/chart-components/dashed-line-chart.js';
import SimpleBarGraph from '../../components/chart-components/bar-graph.js';
import MultiBarGraph from '../../components/chart-components/multi-bar-graph.js';
import {retrieveData} from '../../lib/modules/modules.js';

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