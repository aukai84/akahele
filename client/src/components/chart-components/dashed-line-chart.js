import * as Recharts from 'recharts';
import React, {Component} from 'react';

const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

class SimpleLineChart extends Component {
    constructor(props){
        super(props);
    }



    render () {
        console.log(this.props)
    return (
        <LineChart className="line-chart" width={600} height={300} data={this.props.lineGraphData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="year"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="aggravated_assault" stroke="#8884d8" strokeDasharray="5 5"/>
       <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2"/>
      </LineChart>
    );
  }
}

export default SimpleLineChart