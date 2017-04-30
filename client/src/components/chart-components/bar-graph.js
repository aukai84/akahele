import * as Recharts from 'recharts';
import React, {Component} from 'react';

const {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

class SimpleBarGraph extends Component {
    constructor(props){
        super(props);
        this.state = {
            barGraphData: [
                  {name: "murder", total: props.barGraphData.murder_and_manslaughter},
                  {name: 'rape', total: props.barGraphData.rape},
                  {name: 'robbery', total: props.barGraphData.robbery},
                  {name: 'aggravated assault', total: props.barGraphData.aggravated_assault},
                  {name: 'burglary', total: props.barGraphData.burglary},
                  {name: 'theft/larceny', total: props.barGraphData.larceny_theft},
                  {name: 'motor vehicle theft', total: props.barGraphData.motor_vehicle_theft},
                  {name: 'arson', total: props.barGraphData.arson}
            ]
        }
    }



    render(){
        console.log('bar props ', this.props)
        return (

            <BarChart className="bar-chart" width={600} height={300} data={this.state.barGraphData} margin={{top: 5, right: 5, left: 5, bottom: 5}}>
                <XAxis dataKey='name'/>
               <YAxis/>
               <CartesianGrid strokeDasharray="3 3"/>
               <Tooltip/>
               <Legend />
               <Bar dataKey="total" fill="#8884d8" />
              </BarChart>
        )
    }
}

export default SimpleBarGraph;

