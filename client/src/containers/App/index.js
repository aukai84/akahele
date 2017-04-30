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
      currentView: ''
    };
  }

  componentWillMount() {
      d3.queue()
        .defer(d3.json, 'usStates.json')
        .await((error, us) => {
            this.setState({
                usTopoJson: us
            });
        });
  }

  setCurrentView = (area) => {
    this.setState({
        currentView: area
    })
  }

  render() {
    return (
         <div className="bigContainer">
         <NewSidebar currentView={this.state.currentView}/>
            <div className="main-container">
                <h2>TESTING REACT-D3-LIBRARY</h2>

                <svg width='1000' height='800'>
                    <StatesMap setCurrentView={this.setCurrentView} usTopoJson={this.state.usTopoJson} width={800} height={600}/>
                </svg>
            <GoogleMaps/>
            </div>
         </div>


    );
  }
}

export default App;