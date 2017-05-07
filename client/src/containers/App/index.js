import React, { Component } from 'react';
import * as d3 from 'd3';
import './index.css';
import {retrieveData} from '../../lib/modules/modules.js';
import ChartsContainer from '../../containers/Charts';
import UsMap from '../../components/chart-components/d3-us-map.js';
import StatesMap from '../../components/us-map-click.js';
import NewSidebar from '../../components/newSidebar.jsx';
import GoogleMaps from '../../components/google-map/simple_map_page.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false,
      isModalGraphOpen: false,
      currentView: 'Nation',
      currentData: [],
      nationData: [],
      currentYear: 2015
    }
  }

  componentWillMount() {
    this.retrieveNationData();
      d3.queue()
        .defer(d3.json, 'usStates.json')
        .await((error, us) => {
            this.setState({
                usTopoJson: us
            })
        });
  }


  retrieveNationData = () =>{
    retrieveData('https://akahele.io/api/nation/all')
    .then(crimes => {
      console.log(crimes);
        this.setState({
            currentData: crimes,
            nationData: crimes
        })
    })
  }

  setCurrentView = (area) => {
    retrieveData(`https://akahele.io/api/states/${area}/crime`)
        .then(crimes => {
            this.setState({
                currentView: area,
                currentData: crimes
            })
        })
  }
  render() {
    console.log(this.state);
    return (
         <div className="bigContainer">
         <NewSidebar currentView={this.state.currentView} currentData={this.state.currentData}/>
            <div className="main-container">
              <div className="nation-map">
                <div className="nation-title">Click on a state!</div>
                <div className="state-clickon">{this.state.currentView}</div>
                <svg width='1280' height='800'>
                    <StatesMap setCurrentView={this.setCurrentView} usTopoJson={this.state.usTopoJson} nationData={this.state.nationData} width={800} height={600}/>
                </svg>
              </div>
              <GoogleMaps/>          
            </div>
         </div>


    );
  }
}

export default App;