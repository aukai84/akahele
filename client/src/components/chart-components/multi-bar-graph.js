import * as Recharts from 'recharts';
import React, {Component} from 'react';

// const {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

// const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

const {BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

class MultiBarGraph extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataKey: 'murder_and_manslaughter',
            crimeName: 'murder'
        }
    }

    crimeChange = (event) =>{
        console.log('event ', event.target.value)
        this.setState({
            dataKey: event.target.value,
            crimeName: event.target.value.split('_').join(' ')
        })
    }

    render(){
        return(
            <div>
                 <select onChange={this.crimeChange}>
                        <option value='murder_and_manslaughter'>murder</option>
                        <option value='rape'>rape</option>
                        <option value='robbery'>robbery</option>
                        <option value='aggravated_assault'>aggravated assault</option>
                        <option value="burglary">burglary</option>
                        <option value='larceny_theft'>theft/larceny</option>
                        <option value='motor_vehicle_theft'>motor vehicle theft</option>
                        <option value='arson'>arson</option>
                </select>
                <BarChart className="multi-bar-graph" width={800} height={400} data={this.props.multiBarData} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey='city' />
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend verticalAlign="top" wraperStyle={{lineHeight: '40px'}} />
                    <ReferenceLine y={0} stroke="#000" />
                    <Brush dataKey="city" height={30} stroke="#8884d8"/>
                    <Bar dataKey={this.state.dataKey} name={this.state.crimeName} fill="blue"/>
                </BarChart>
            </div>
            )
    }
}

export default MultiBarGraph;