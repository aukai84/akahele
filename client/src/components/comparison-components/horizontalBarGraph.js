import * as Recharts from 'recharts';
import React, {Component} from 'react';

const {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;


class HorizontalBarGraph extends Component {
    constructor(graphs){
        super(props);
    }


    render(){
        return (
            <BarChart
              width={600}
              height={600}
              data={this.props.horizontalBarData}
              layout="vertical"
              margin={{top: 5, right: 30, left: 20, bottom: 5}}
            >
              <XAxis type="number"/>
              <YAxis type="category" dataKey="name" />
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        )
    }
}

export default HorizonalBarGraph;