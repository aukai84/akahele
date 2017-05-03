import React, {Component} from 'react';
import * as d3 from 'd3';
import Autosuggest from 'react-autosuggest';
import {retrieveData} from '../../lib/modules/modules.js';

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

    retrieveSuggestions(){
        retrieveData('http://localhost:8080/api/states')
            .then(states => {
                this.setState({
                    suggestionStates: states
                })
            })
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