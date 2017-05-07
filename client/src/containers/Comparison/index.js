import React, {Component} from 'react';
import * as d3 from 'd3';
import Autosuggest from 'react-autosuggest';
import {retrieveData} from '../../lib/modules/modules.js';

class ComparisonContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            lineGraphData: [],
            horizontalBarData: [],
            suggestionAreas: [],
            currentYear: ''
        }
    }

    retrieveSuggestions(locationType, location){
        retrieveData(`http://localhost8080/api/${locationType}/${location}`)
    }

    componentWillMount() {
        this.retrieveSuggestions(this.props.locationType, link)
    }

    render(){
        return(

        )
    }
}

export default ComparisonContainer;