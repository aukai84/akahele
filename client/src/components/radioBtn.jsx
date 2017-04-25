import React from 'react';
import ChartsContainer from '../containers/Charts';

class RadioBtn extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			graphType: ''
		}
		this.setGraph = this.setGraph.bind(this);


	}


  setGraph(event) {
    // console.log(event.target.value);
    this.state.graphType = event.target.value;
    console.log(this.state.graphType);
  }

  render() {
    return (
      <div>

        <input type="radio" value="line" name="graph" onChange={this.setGraph}/> Line
        <input type="radio" value="bar" name="graph" onChange={this.setGraph}/> Bar

        <ChartsContainer graphType={this.state.graphType}/>

      </div>
     )
  }
}

export default RadioBtn;

