import React, {Component} from 'react';
import * as Recharts from 'recharts';
import * as d3 from 'd3';
import Autosuggest from 'react-autosuggest';
import {retrieveData} from '../../lib/modules/modules.js';
import LocationOneSearch from '../../components/search-bars/locationOneSearch.js';
import LocationTwoSearch from '../../components/search-bars/locationTwoSearch.js';

const {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} = Recharts;
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
            dataKey:  'murder_and_manslaugther'
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
                        return {state: area, murder_and_manslaughter: a.murder_and_manslaughter + b.murder_and_manslaughter, rape: a.rape + b.rape, aggravated_assault: a.aggravated_assault + b.aggravated_assault, burglary: a.burglary + b.burglary, larceny_theft: a.larceny_theft + b.larceny_theft, motor_vehicle_theft: a.motor_vehicle_theft + b.motor_vehicle_theft, arson: a.arson + b.arson, year: yearArray[i]}
                        }, {murder_and_manslaughter: 0, rape: 0, aggravated_assault: 0, burglary: 0, larceny_theft: 0, motor_vehicle_theft: 0, arson: 0, year: yearArray[i]})
                    )
                }
            })
            .then(_ => {
                this.setState({
                    locationOneBar: tempArray
                })    
            })
            
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state)
    }


    render(){
        console.log('compare state ', this.state.locationOneBar);
        return(
            <div>
                <LocationOneSearch currentYear={this.state.currentYear} retrieveLocationOne={this.retrieveLocationOne} locationType={"states"}/>
                <LocationTwoSearch  currentYear={this.state.currentYear} retrievelocationTwo={this.retrievelocationTwo} locationType={"states"}/>
            </div>
        )
    }
}

export default StateComparisonContainer;