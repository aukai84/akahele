import React, { Component } from 'react';
import './index.css';
// import Modal from '../../components/Modal.jsx';
import {retrieveData} from '../../lib/modules/modules.js';
import ReactD3Component from '../../components/d3graph.js';
import Sidebar from '../../components/Sidebar.jsx';




class App extends Component {
    constructor(props){
        super(props);
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


    componentDidMount() {
        this.displayHonoluluData();
    }

  render() {

       
        console.log(this.state)
    return (

         <div className="container">
         <Sidebar/>

            <div className="main-body">
                <p className="App-intro">Akahele</p>

            <h2>TESTING REACT-D3-LIBRARY</h2>
             <ReactD3Component honolulu={this.state.honolulu}/> 
            </div>

         </div>

    );
  }

    
}

export default App;