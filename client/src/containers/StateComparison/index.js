import React, {Component} from 'react';
import * as d3 from 'd3';
import {retrieveData} from '../../lib/modules/modules.js';
import LocationOneSearch from '../../components/search-bars/locationOneSearch.js';
import LocationTwoSearch from '../../components/search-bars/locationTwoSearch.js';
import SyncedAreaCharts from '../../components/comparison-components/areaCharts.js';

let yearArray = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015];


class StateComparisonContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            locationOneBar: [],
            locationTwoBar: [],
            locationOneLine: [],
            locationTwoLine: [],
            currentYear: 2015,
            crimeName: 'murder',
            dataKey:  'murder_and_manslaughter'
        }
    }


    retrieveLocationOne = (area) => {
        let tempArray = []
        retrieveData(`http://localhost:8080/api/states/${area}/crime/`)
            .then(crimes => {
                for(let i = 0; i < yearArray.length; i++){
                    tempArray.push(
                        crimes.filter(crime => (crime.year === yearArray[i]))
                        .reduce((a, b) => {
                        return {state: area, murder_and_manslaughter: a.murder_and_manslaughter + b.murder_and_manslaughter, robbery: a.robbery + b.robbery, rape: a.rape + b.rape, aggravated_assault: a.aggravated_assault + b.aggravated_assault, burglary: a.burglary + b.burglary, larceny_theft: a.larceny_theft + b.larceny_theft, motor_vehicle_theft: a.motor_vehicle_theft + b.motor_vehicle_theft, arson: a.arson + b.arson, year: yearArray[i]}
                        }, {murder_and_manslaughter: 0, rape: 0, aggravated_assault: 0, burglary: 0, robbery: 0, larceny_theft: 0, motor_vehicle_theft: 0, arson: 0, year: yearArray[i]})
                    )
                }
            })
            .then(_ => {
                this.setState({
                    locationOneBar: tempArray
                })    
            })
            
    }

    retrieveLocationTwo = (area) => {
        let tempArray = []
        retrieveData(`http://localhost:8080/api/states/${area}/crime/`)
            .then(crimes => {
                console.log('crimes robbery ', crimes)
                for(let i = 0; i < yearArray.length; i++){
                    tempArray.push(
                        crimes.filter(crime => (crime.year === yearArray[i]))
                        .reduce((a, b) => {
                        return {state: area, murder_and_manslaughter: a.murder_and_manslaughter + b.murder_and_manslaughter, rape: a.rape + b.rape, robbery: a.robbery + b.robbery, aggravated_assault: a.aggravated_assault + b.aggravated_assault, burglary: a.burglary + b.burglary, larceny_theft: a.larceny_theft + b.larceny_theft, motor_vehicle_theft: a.motor_vehicle_theft + b.motor_vehicle_theft, arson: a.arson + b.arson, year: yearArray[i]}
                        }, {murder_and_manslaughter: 0, rape: 0, aggravated_assault: 0, burglary: 0, robbery: 0, larceny_theft: 0, motor_vehicle_theft: 0, arson: 0, year: yearArray[i]})
                    )
                }
            })
            .then(_ => {
                this.setState({
                    locationTwoBar: tempArray
                })    
            })
            
    }

    crimeChange = (event) => {
        this.setState({
            dataKey: event.target.value,
            crimeName: event.target.value.split('_').join(' ')
        })
    }


    componentDidUpdate(prevProps, prevState) {
        console.log(this.state)
    }


    render(){
        console.log('compare state ', this.state);
        return(
            <div>
                <div className="comparison-header">
                    <LocationOneSearch currentYear={this.state.currentYear} retrieveLocationOne={this.retrieveLocationOne} locationType={"states"}/>
                    <LocationTwoSearch  currentYear={this.state.currentYear} retrieveLocationTwo={this.retrieveLocationTwo} locationType={"states"}/>
                    <div className="multibar-dropdown">
                 <select onChange={this.crimeChange}>
                        <option value='murder_and_manslaughter'>murder</option>
                        <option value='rape'>rape</option>
                        <option value='robbery'>robbery</option>
                        <option value='aggravated_assault'>aggravated assault</option>
                        <option value="burglary">burglary</option>
                        <option value='larceny_theft'>theft/larceny</option>
                        <option value='motor_vehicle_theft'>motor vehicle theft</option>
                        <option value='arson'>arson</option>
                </select>
                </div>
                </div>
                <SyncedAreaCharts dataKey={this.state.dataKey} locationOneBar={this.state.locationOneBar} locationTwoBar={this.state.locationTwoBar} crimeName={this.state.crimeName}/>
            </div>
        )
    }
}

export default StateComparisonContainer;