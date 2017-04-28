import * as Recharts from 'recharts';
import React, {Component} from 'react';

const {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

class SimpleBarGraph extends Component {
    constructor(props){
        super(props);
    }



    render(){
        return (

            <BarChart className="bar-chart" width={600} height={300} data={this.props.barGraphData} margin={{top: 5, right: 5, left: 5, bottom: 5}}>
                <XAxis dataKey='name'/>
               <YAxis/>
               <CartesianGrid strokeDasharray="3 3"/>
               <Tooltip/>
               <Legend />
               <Bar dataKey="amount" fill="#8884d8" />
              </BarChart>
        )
    }
}

export default SimpleBarGraph;

