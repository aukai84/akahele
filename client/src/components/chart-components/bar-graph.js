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

    componentWillReceiveProps(nextProps) {
        this.setState({
            barGraphData: [
                  {name: "murder", total: nextProps.barGraphData.murder_and_manslaughter},
                  {name: 'rape', total: nextProps.barGraphData.rape},
                  {name: 'robbery', total: nextProps.barGraphData.robbery},
                  {name: 'aggravated assault', total: nextProps.barGraphData.aggravated_assault},
                  {name: 'burglary', total: nextProps.barGraphData.burglary},
                  {name: 'theft/larceny', total: nextProps.barGraphData.larceny_theft},
                  {name: 'motor vehicle theft', total: nextProps.barGraphData.motor_vehicle_theft},
                  {name: 'arson', total: nextProps.barGraphData.arson}
            ]
        })
    }

    render(){
        return (

            <BarChart className="bar-chart" width={720} height={225} data={this.state.barGraphData} margin={{top: 5, right: 5, left: 5, bottom: 5}}>
                <XAxis dataKey='name'/>
               <YAxis/>
               <CartesianGrid strokeDasharray="3 3"/>
               <Tooltip/>
              <Legend/> 
               <Bar dataKey="total" fill="#1474c9"/>
              </BarChart>
        )
    }
}

export default SimpleBarGraph;

