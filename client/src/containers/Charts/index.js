
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
            multiBarData: [],
            graphType: 'bar'
        }
    }

    retrieveBarGraphData(area, year){
        retrieveData()
    }

    retrieveHonoluluData(){
        retrieveData('http://localhost:8080/cities/Honolulu/crime/year/2014')
        .then(data => {
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

   setGraph = (event) => {
        this.setState({
            graphType: event.target.value
        })


  }

    componentDidMount() {
        this.retrieveHonoluluData();
    }


    getGraphs(){
        if(this.state.graphType === 'line'){
            return(
                <div>
                    <SimpleLineChart lineGraphData={this.state.lineGraphData}/>
                    <input type="radio" value="line" name="graph" onChange={this.setGraph}/> Line
                    <input type="radio" value="bar" name="graph" onChange={this.setGraph}/> Bar
                    <input type="radio" value="multiBar" name="graph" onChange={this.setGraph}/> Multi Bar

                </div>
            )
        } else if(this.state.graphType === 'bar'){
            return(
                <div>
                    <SimpleBarGraph barGraphData={this.state.barGraphData}/>
                    <input type="radio" value="line" name="graph" onChange={this.setGraph}/> Line
                    <input type="radio" value="bar" checked='true' name="graph" onChange={this.setGraph}/> Bar
                    <input type="radio" value="multiBar" name="graph" onChange={this.setGraph}/> Multi Bar

                </div>
            )
        } else if(this.state.graphType === 'multiBar'){
            return(
                <div>
                    <MultiBarGraph multiBarData={this.state.multiBarData}/>
                    <input type="radio" value="line" name="graph" onChange={this.setGraph}/> Line
                    <input type="radio" value="bar" name="graph" onChange={this.setGraph}/> Bar
                    <input type="radio" value="multiBar" name="graph" onChange={this.setGraph}/> Multi Bar
                </div>
            )
        }
    }


    render(){

        return this.getGraphs();

    }

}

export default ChartsContainer;