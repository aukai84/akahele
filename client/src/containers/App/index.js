import React, { Component } from 'react';
import './index.css';
import {retrieveData} from '../../lib/modules.js';

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
         <ul>
             {
                this.state.honolulu.map(crime => {
                    return (
                            <li>
                                <h2>id = {crime.id}</h2>
                                <p>year = {crime.year}</p>
                                <p>violent crime = {crime.violent_crime}</p>
                            </li>
                    )
                })
             }
         </ul>
     </div>
    );
  }
}

export default App;