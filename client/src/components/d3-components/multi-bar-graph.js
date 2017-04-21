import * as Recharts from 'recharts';
import React, {Component} from 'react';

const {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

class MultiBarGraph extends Component {
    constructor(props){
        super(props);
    }



    render(){
        return(
            <BarChart className="multi-bar-graph" width={600} height={300} data={this.props.multiBarData} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey='areaName' />
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Bar dataKey="violent cirime" fill="#8884d8" />
                <Bar dataKey="murder and manslaughter" fill="#8884d8" />
                <Bar dataKey="murder and manslaughter" fill="#8884d8" />
                <Bar dataKey="rape" fill="#8884d8" />
                <Bar dataKey="robbery" fill="#8884d8" />
                <Bar dataKey="aggravated assault" fill="#8884d8" />
                <Bar dataKey="property crime" fill="#8884d8" />
                <Bar dataKey="burglary" fill="#8884d8" />
                <Bar dataKey="larceny theft" fill="#8884d8" />
                <Bar dataKey="motor vehicle theft" fill="#8884d8" />
                <Bar dataKey="arson" fill="#8884d8" />
            </BarChart>
            )
    }
}

export default MultiBarGraph;