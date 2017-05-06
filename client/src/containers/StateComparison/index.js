import React, {Component} from 'react';
import * as Recharts from 'recharts';
import * as d3 from 'd3';
import Autosuggest from 'react-autosuggest';
import {retrieveData} from '../../lib/modules/modules.js';
import LocationOneSearch from '../../components/search-bars/locationOneSearch.js';
import LocationTwoSearch from '../../components/search-bars/locationTwoSearch.js';

const {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} = Recharts;

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
        retrieveData(`http://localhost:8080/api/states/${area}/crime/`)
            .then(crimes => {
                console.log(crimes)
                this.setState({
                    locationOneBar: crimes
                    })
                })
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