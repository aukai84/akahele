import React, { Component } from 'react';
import './index.css';
import {retrieveData} from '../../lib/modules/modules.js';
import ChartsContainer from '../../components/d3graph.js';
import Sidebar from '../../components/Sidebar.jsx';
import GoogleMaps from '../../components/google-map/simple_map_page.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false,
      isModalGraphOpen: false
    }
  }

  render() {
  // console.log(this.state)
  // console.log(this.props.graphType);
    return (
       <div className="bigContainer">
        <Sidebar/>
        <div className="main-container">
          <h2>TESTING REACT-D3-LIBRARY</h2>
          <GoogleMaps/>
             
        </div>
       </div>
    );
  }
}

export default App;