import React, {Component} from 'react';
import ChartsContainer from '../containers/Charts';
import StateComparisonContainer from '../containers/StateComparison';
import CityComparisonContainer from '../conatiners/CityComparision';


class GraphsComponent extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="graphs-container">
                <div className="graph-title">
                    <h3>Graphs</h3>
                </div>
                <ChartsContainer currentView={this.props.currentView} currentData={this.props.currentData}/>
            </div>
        )
    }
}
