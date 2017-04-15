import React, { Component } from 'react';
import './index.css';
import {requestHelper} from '../../lib/modules.js';

class App extends Component {
    constructor(){
        super();
        this.state = {
            honolulu: []
        }
    }

    displayHonoluluData(){
        requestHelper('GET', 'http://localhost:8080/cities/Honolulu/crime')
        .then(data => {
            console.log(data)
            this.setState({
                honolulu: this.state.honolulu.concat([data])
            })
        })
    }

    componentWillMount(){
        this.displayHonoluluData();
    }
  render() {
        console.log(this.state)

    return (
      <div className="homePage">
        <div className="App-header">

          <h2>Welcome to React!!</h2>
        </div>
        <p className="App-intro">
          Hello World
        </p>
      </div>
    );
  }
}

export default App;