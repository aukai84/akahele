import React, {Component} from 'react';
import ScatterPlot from '../../components/scatter-plot.js';
import BarGraph from '../../components/bar-graph.js';

const styles = {
      width   : 500,
      height  : 300,
      padding : 30,
    };

    // The number of data points for the chart.
    const numDataPoints = 50;

    // A function that returns a random number from 0 to 1000
    const randomNum     = () => Math.floor(Math.random() * 1000);

    // A function that creates an array of 50 elements of (x, y) coordinates.
    const randomDataSet = () => {
      return Array.apply(null, {length: numDataPoints}).map(() => [randomNum(), randomNum()]);
    }

class Charts extends Component {

    constructor(props){
        super(props);
        this.state = { data: randomDataSet() }

    }

    randomizeData() {
        this.setState({ data: randomDataSet() });
    }

    render(){
        return (
            <div>
                <h1>Setting up scatter plot</h1>
                <ScatterPlot {...this.state} {...styles}/>
                <div className='controls'>
                    <button className="btn randomize" onClick={() => this.randomizeData()}>
                        Randomizing Scatter Plot
                    </button>
                </div>
                <h1>Setting up bar graph</h1>
                <BarGraph />
            </div>
        )
    }
}

export default Charts;