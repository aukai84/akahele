import React, {Component} from 'react';
import * as d3 from 'd3';
import {retrieveData} from '../../lib/modules/modules.js';

class ComparisonContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            lineGraphData: [],
            horizontalBarData: [],
        }
    }

    retrieveLineData(area){

        retrieveData(`http://localhost:8080`)


    }

    retrieveBarData(area){

    }

    componentWillMount() {
        this.retrieveLineData(this.props.area);
        this.retrieveBarData(this.props.area);
    }

    componentDidMount() {
        this.retrieveLineData(this.props.area);
        this.retrieveBarData(this.props.area);
    }

    render(){
        return(

        )
    }
}

export default ComparisonContainer;