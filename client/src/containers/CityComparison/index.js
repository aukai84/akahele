import React, {Component} from 'react';
import * as d3 from 'd3';
import {retrieveData} from '../../lib/modules/modules.js';
import LocationOneSearch from '../../components/search-bars/locationOneSearch.js';
import LocationTwoSearch from '../../components/search-bars/locationTwoSearch.js';
import SyncedAreaCharts from '../../components/comparison-components/areaCharts.js';

let yearArray = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015];

class CityComparisonContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            locationOneBar: [],
            locationTwoBar: [],
            currentYear: 2015,
            crimeName: 'murder',
            dataKey: 'murder_and_manslaughter'
        }
    }

        retrieveLocationOne = (area) => {
            retrieveData(`http://localhost:8080/api/cities/${area}/crime`)
                .then(crimes => {
                    console.log(crimes)
                    this.setState({
                        locationOneBar: crimes
                    })
                })
        }

        retrieveLocationTwo = (area) => {
            retrieveData(`http://localhost:8080/api/cities/${area}/crime`)
                .then(crimes => {
                    console.log(crimes)
                    this.setState({
                        locationTwoBar: crimes
                    })
                })
        }

        render(){
            return(
                <div>
                    <div className="comparison-header">
                        <LocationOneSearch currentYear={this.state.currentYear} retrieveLocationOne={this.retrieveLocationOne} locationType={"cities"}/>
                        <LocationTwoSearch  currentYear={this.state.currentYear} retrieveLocationTwo={this.retrieveLocationTwo} locationType={"cities"}/>
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

export default CityComparisonContainer;