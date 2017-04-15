import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import rd3 from 'react-d3';

let BarChart = rd3.BarChart;

let barData = [
  {label: 'A', value: 5},
  {label: 'B', value: 6},
  {label: 'C', value: 10},
  {label: 'D', value: 4},
  {label: 'E', value: 8},
  {label: 'F', value: 7}
];

class BarGraph extends Component {
    render(){
        return (
            <BarChart
              data={barData}
              width={500}
              height={200}
              fill={'#3182bd'}
              title='Bar Chart'
            />
        )
    }
}

export default BarGraph;
