import * as Recharts from 'recharts';
import React, {Component} from 'react';

// const {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

// const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

const {BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

class MultiBarGraph extends Component {
    constructor(props){
        super(props);
    }



    render(){
        return(
            <BarChart className="multi-bar-graph" width={800} height={400} data={this.props.multiBarData} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey='city' />
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend verticalAlign="top" wraperStyle={{lineHeight: '40px'}} />
                <ReferenceLine y={0} stroke="#000" />
                <Brush dataKey="city" height={30} stroke="#8884d8"/>
                <Bar dataKey="murder_and_manslaughter" name="murder" fill="blue"/>
            </BarChart>
            )
    }
}

export default MultiBarGraph;