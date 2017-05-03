import React, {Component} from 'react';
import * as d3 from 'd3';
import Autosuggest from 'react-autosuggest';
import {retrieveData} from '../../lib/modules/modules.js';
import locationOneSearch from '../../components/search-bars/locationOneSearch.js';
import locationTwoSearch from '../../components/search-bars/locationTwoSearch.js';

class StateComparisonContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            locationOneBar: [],
            locationTwoBar: [],
            locationOneLine: [],
            locationTwoLine: [],
            suggestionStates: [],
            currentYear: 2015
        }
    }


    retrieveLocationOne(){

    }

    componentWillMount() {
        this.retrieveSuggestions();
    }

    render(){
        return(


        )
    }
}

export default StateComparisonContainer;