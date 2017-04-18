import React, { Component } from 'react';
import './index.css';
import {retrieveData} from '../../lib/modules/modules.js';
import ReactD3Component from '../../components/d3graph.js';


class App extends Component {
    constructor(){
        super();
        this.state = {
            honolulu: []
        }
    }

    displayHonoluluData(){
        retrieveData('http://localhost:8080/cities/Honolulu/crime')
        .then(data => {
            this.setState({
                honolulu: this.state.honolulu.concat(data)
            })
        })
    }

    componentWillMount(){
        this.displayHonoluluData();
    }
  render() {
    return (
      <div className="homePage">
         <div className="App-header">
              <h2>Welcome to React!!</h2>
         </div>
         <p className="App-intro">
              Hello World
         </p>
         <h1>TEST DATA FROM HONOLULU</h1>
         <div>
            <h2>TESTING REACT-D3-LIBRARY</h2>
            <ReactD3Component/>
         </div>
     </div>
    );
  }
}

export default App;