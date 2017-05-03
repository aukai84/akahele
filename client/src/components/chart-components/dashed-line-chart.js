import * as Recharts from 'recharts';
import React, {Component} from 'react';

const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

class SimpleLineChart extends Component {
    constructor(props){
        super(props);
    }

    render () {
    return (
        <LineChart className="line-chart" width={700} height={350} data={this.props.lineGraphData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="year"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend/>
       <Line type="monotone" dataKey="murder_and_manslaughter" name="murder" stroke="#8884d8" strokeDasharray="5 5" />
       <Line type="monotone" dataKey="rape" name="rape" stroke="#82ca9d" strokeDasharray="3 4 5 2"/>
       <Line type="monotone" dataKey="robbery" name="robbery" stroke="#82ca9d" strokeDasharray="3 4 5 2"/>
       <Line type="monotone" dataKey="aggravated_assault" name="aggravated assault" stroke="#82ca9d" strokeDasharray="3 4 5 2"/>
       <Line type="monotone" dataKey="burglary" name="burglary" stroke="#82ca9d" strokeDasharray="3 4 5 2"/>
       <Line type="monotone" dataKey="larceny_theft" name="theft/larceny" stroke="#82ca9d" strokeDasharray="3 4 5 2"/>
       <Line type="monotone" dataKey="motor_vehicle_theft" name="motor vehicle theft" stroke="#82ca9d" strokeDasharray="3 4 5 2"/>
       <Line type="monotone" dataKey="arson" name="arson" stroke="#82ca9d" strokeDasharray="3 4 5 2"/>
      </LineChart>
    );
  }
}

export default SimpleLineChart