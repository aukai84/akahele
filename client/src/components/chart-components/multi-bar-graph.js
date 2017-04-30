import * as Recharts from 'recharts';
import React, {Component} from 'react';

// const {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

class MultiBarGraph extends Component {
    constructor(props){
        super(props);
    }



    render(){
        return(
            <LineChart className="multi-bar-graph" width={800} height={400} data={this.props.multiBarData} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey='city' />
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line dataKey="murder_and_manslaughter" name="murder" fill="#8884d8" />
                <Line dataKey="rape" name="rape" fill="#8884d8" />
                <Line dataKey="robbery" name="robbery" fill="#8884d8" />
                <Line dataKey="aggravated_assaultr" name="aggravated assault" fill="#8884d8" />
                <Line dataKey="burglary" name="burglary" fill="#8884d8" />
                <Line dataKey="larceny_theft" name="theft/larceny" fill="#8884d8" />
                <Line dataKey="motor_vehicle_theft" name="motor vehicle theft" fill="#8884d8" />
                <Line dataKey="arson" name="arson" fill="#8884d8" />
            </LineChart>
            )
    }
}

export default MultiBarGraph;