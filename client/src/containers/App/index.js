import React, { Component } from 'react';
import './index.css';
import {retrieveData} from '../../lib/modules/modules.js';
import ChartsContainer from '../../containers/Charts';
// import UsMap from '../../components/chart-components/d3-us-map.js';
// import StatesMap from '../../components/us-map-click.js';
import NewSidebar from '../../components/newSidebar.jsx';
// import GoogleMaps from '../../components/google-map/simple_map_page.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false,
      isModalGraphOpen: false
    }
  }

  render() {
    return (
         <div className="bigContainer">
         <NewSidebar/>
            <div className="main-container">
                <h2>TESTING REACT-D3-LIBRARY</h2>
              
            </div>
         </div>


    );
  }
}

export default App;