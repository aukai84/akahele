
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

    retrieveBarData(area, year){
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
        retrieveData(`http://localhost:8080/api/states/${area}/crime/year/${year}`)
        .then(data =>  {
            this.setState({
                multiBarData: data
            })
        })
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

    yearChange = (event) => {
        console.log(event.target.value)
        this.setState({
            currentYear: event.target.value,
            barGraphData: this.props.stateData
                .filter(crime => (crime.year === parseInt(event.target.value)))
                .reduce((a, b) => {
                    return {murder_and_manslaughter: a.murder_and_manslaughter + b.murder_and_manslaughter, rape: a.rape + b.rape, aggravated_assault: a.aggravated_assault + b.aggravated_assault, burglary: a.burglary + b.burglary, larceny_theft: a.larceny_theft + b.larceny_theft, motor_vehicle_theft: a.motor_vehicle_theft + b.motor_vehicle_theft, arson: a.arson + b.arson, year: this.state.currentYear }
                }, {murder_and_manslaughter: 0, rape: 0, aggravated_assault: 0, burglary: 0, larceny_theft: 0, motor_vehicle_theft: 0, arson: 0, year: event.target.value})
        })
        // this.retrieveBarData(this.props.currentView, this.state.currentYear);

    }

    componentDidMount = () => {
        // this.retrieveBarData(this.props.currentView, this.state.currentYear);
        this.retrieveMultiData(this.props.currentView, this.state.currentYear);
        this.mapBarData(this.state.currentYear);
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
        console.log("state data ", this.state)
        return this.getGraphs();

    }

}

export default ChartsContainer;