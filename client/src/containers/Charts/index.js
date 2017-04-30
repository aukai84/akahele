
import React, {Component} from 'react';
import * as d3 from 'd3';
import '../../lib/css/choropleth.css';
import UsMap from '../../components/chart-components/d3-us-map.js';
import SimpleLineChart from '../../components/chart-components/dashed-line-chart.js';
import SimpleBarGraph from '../../components/chart-components/bar-graph.js';
import MultiBarGraph from '../../components/chart-components/multi-bar-graph.js';
import {retrieveData} from '../../lib/modules/modules.js';
import Slider, {Range} from 'rc-slider';

let yearArray = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015];

class ChartsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            barGraphData: [],
            lineGraphData: [],
            multiBarData: [],
            graphType: 'bar',
            currentView: '',
            currentYear: 2015
        }
    }

    mapBarData = (year) => {
        console.log('current year', year)
        this.setState({
            barGraphData: this.props.stateData
                .filter(crime => (crime.year === parseInt(year)))
                .reduce((a, b) => {
                    return {murder_and_manslaughter: a.murder_and_manslaughter + b.murder_and_manslaughter, rape: a.rape + b.rape, aggravated_assault: a.aggravated_assault + b.aggravated_assault, burglary: a.burglary + b.burglary, larceny_theft: a.larceny_theft + b.larceny_theft, motor_vehicle_theft: a.motor_vehicle_theft + b.motor_vehicle_theft, arson: a.arson + b.arson, year: this.state.currentYear }
                }, {murder_and_manslaughter: 0, rape: 0, aggravated_assault: 0, burglary: 0, larceny_theft: 0, motor_vehicle_theft: 0, arson: 0, year})
        })
    }

    mapMultiData = (year) => {
        this.setState({
            multiBarData: this.props.stateData
                .filter(crime => (crime.year === parseInt(year)))
        })
    }

    mapLineData = (array) => {
        let tempArray = [];
        for(let i = 0; i < array.length; i++){
            console.log(array[i])
            tempArray.push(
                this.props.stateData
                    .filter(crime => (crime.year === array[i]))
                    .reduce((a, b) => {
                        return {murder_and_manslaughter: a.murder_and_manslaughter + b.murder_and_manslaughter, rape: a.rape + b.rape, aggravated_assault: a.aggravated_assault + b.aggravated_assault, burglary: a.burglary + b.burglary, larceny_theft: a.larceny_theft + b.larceny_theft, motor_vehicle_theft: a.motor_vehicle_theft + b.motor_vehicle_theft, arson: a.arson + b.arson, year: array[i]}
                    }, {murder_and_manslaughter: 0, rape: 0, aggravated_assault: 0, burglary: 0, larceny_theft: 0, motor_vehicle_theft: 0, arson: 0, year: array[i]})
            )
        }
        console.log('temp array ', tempArray)
        this.setState({
            lineGraphData: tempArray
        })
    }

   setGraph = (event) => {
        this.setState({
            graphType: event.target.value
        })
    }

    yearChange = (event) => {
        this.setState({
            currentYear: event.target.value,
            barGraphData: this.props.stateData
                .filter(crime => (crime.year === parseInt(event.target.value)))
                .reduce((a, b) => {
                    return {murder_and_manslaughter: a.murder_and_manslaughter + b.murder_and_manslaughter, rape: a.rape + b.rape, aggravated_assault: a.aggravated_assault + b.aggravated_assault, burglary: a.burglary + b.burglary, larceny_theft: a.larceny_theft + b.larceny_theft, motor_vehicle_theft: a.motor_vehicle_theft + b.motor_vehicle_theft, arson: a.arson + b.arson, year: this.state.currentYear }
                }, {murder_and_manslaughter: 0, rape: 0, aggravated_assault: 0, burglary: 0, larceny_theft: 0, motor_vehicle_theft: 0, arson: 0, year: event.target.value})
        })

    }

    componentDidMount = () => {
        this.mapBarData(this.state.currentYear);
        this.mapMultiData(this.state.currentYear);
        this.mapLineData(yearArray);
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
                    <h3>{this.state.currentYear}</h3>
                    <SimpleBarGraph barGraphData={this.state.barGraphData}/>
                    <div className="radioBtn">
                        <input type="radio" value="line" name="graph" onChange={this.setGraph}/> Line
                        <input type="radio" value="bar" checked='true' name="graph" onChange={this.setGraph}/> Bar
                        <input type="radio" value="multiBar" name="graph" onChange={this.setGraph}/> Multi Bar
                    </div>
                    <select onChange={this.yearChange} value={this.props.crime}>
                        <option value='2015'>2015</option>
                        <option value='2014'>2014</option>
                        <option value='2013'>2013</option>
                        <option value='2012'>2012</option>
                    </select>
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
        return this.getGraphs();

    }

}

export default ChartsContainer;