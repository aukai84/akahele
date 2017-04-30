
import React, {Component} from 'react';
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
            graphType: 'bar',
            currentView: '',
            currentYear: ''
        }
    }

    retrieveBarData(area, year){
        retrieveData(`http://localhost:8080/api/states/${area}/crime/year/${year}`)
        .then(data => {
            this.setState({
                stateData: data
            })
        })
    }

    retrieveLineData(area, year){
        retrieveData(`http://localhost:8080/api/states/${area}/total-crime/year/${year}`)
        .then(totalCrime => {
            console.log('this is the total crime ', totalCrime)
            this.setState({
                barGraphData: [
                  {name: "murder", total: totalCrime.murder},
                  {name: 'rape', total: totalCrime.rape},
                  {name: 'robbery', total: totalCrime.robbery},
                  {name: 'aggravated assault', total: totalCrime.aggravatedAssault},
                  {name: 'burglary', total: totalCrime.burglary},
                  {name: 'theft/larceny', total: totalCrime.theft},
                  {name: 'motor vehicle theft', total: totalCrime.motorVehicleTheft},
                  {name: 'arson', total: totalCrime.arson}
                ]
            })
        })
    }

    retrieveMultiData(area, year){

    }

    // retrieveHonoluluData(area){
    //     console.log('area ', area)
    //     retrieveData(`http://localhost:8080/states/${area}/crime/year/2014`)
    //     .then(data => {
    //         console.log('area data ', data)
    //         this.setState({
    //             barGraphData: [
    //             {name: "murder", amount: data.murder_and_manslaughter},
    //             {name: "rape", amount: data.rape},
    //             {name: "theft", amount: data.larceny_theft}
    //         ]
    //         })
    //     })

    //     retrieveData(`http://localhost:8080/states/${area}/crime`)
    //     .then(data => {
    //         this.setState({
    //             lineGraphData: data
    //         })
    //     })

    //     retrieveData(`http://localhost:8080/states/${area}/crime/year/2010`)
    //     .then(data => {
    //         this.setState({
    //             multiBarData: data
    //         })
    //     })
    // }

   setGraph = (event) => {
        this.setState({
            graphType: event.target.value
        })


    }

    componentWillMount = () => {
        this.retrieveLineData(this.props.currentView, 2014)
    }

    getGraphs(){
        if(this.state.graphType === 'line'){
            return(
                <div>
                    <h2>{this.props.currentView}</h2>
                    <SimpleLineChart lineGraphData={this.state.lineGraphData}/>
                    <div className="radioBtn">
                    <input type="radio" value="line" name="graph" onChange={this.setGraph}/> Line
                    <input type="radio" value="bar" name="graph" onChange={this.setGraph}/> Bar
                    <input type="radio" value="multiBar" name="graph" onChange={this.setGraph}/> Multi Bar
                    </div>

                </div>
            )
        } else if(this.state.graphType === 'bar'){
            return(
                <div>
                    <h2>{this.props.currentView}</h2>
                    <SimpleBarGraph barGraphData={this.state.barGraphData}/>
                    <div className="radioBtn">
                    <input type="radio" value="line" name="graph" onChange={this.setGraph}/> Line
                    <input type="radio" value="bar" checked='true' name="graph" onChange={this.setGraph}/> Bar
                    <input type="radio" value="multiBar" name="graph" onChange={this.setGraph}/> Multi Bar
                    </div>

                </div>
            )
        } else if(this.state.graphType === 'multiBar'){
            return(
                <div>
                    <h2>{this.props.currentView}</h2>
                    <MultiBarGraph multiBarData={this.state.multiBarData}/>
                    <div className="radioBtn">
                    <input type="radio" value="line" name="graph" onChange={this.setGraph}/> Line
                    <input type="radio" value="bar" name="graph" onChange={this.setGraph}/> Bar
                    <input type="radio" value="multiBar" name="graph" onChange={this.setGraph}/> Multi Bar
                    </div>
                </div>
            )
        }
    }


    render(){
        console.log("state data ", this.state)
        return this.getGraphs();

    }

}

export default ChartsContainer;