import React, { Component } from 'react';
import './index.css';
import {requestHelper} from '../../lib/modules.js';
import Modal from '../../components/Modal.jsx';





class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            honolulu: [],
            isModalOpen: false,
            isModalGraphOpen: false
           
        }
        
    }

    openModal() {
      this.setState({ isModalOpen: true })
    }

    closeModal() {
      this.setState({ isModalOpen: false })
    }

    openModalGraph() {
      this.setState({ isModalGraphOpen: true })
    }

    closeModalGraph() {
      this.setState({ isModalGraphOpen: false })
    }


    displayHonoluluData(){
        requestHelper('GET', 'http://localhost:8080/cities/Honolulu/crime')
        .then(data => {
            console.log(data)
            this.setState({
                honolulu: this.state.honolulu.concat(data)
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
        
         <div className="container">

            <div className="sidebar">
            <div className="sidebarTitle"><p>Menu</p></div>

        <div className="graphView">
         <img src={'https://cdn4.iconfinder.com/data/icons/flat-business-icon-set/450/bar_chart-512.png'} className="graphImg" alt="graphs"/>
          <a onClick={() => this.openModalGraph()}>Graphs</a>
          <Modal isOpen={this.state.isModalGraphOpen} onClose={() => this.closeModalGraph()}>
            <h3>Graphs</h3>
            <p>work</p>
            <p><button onClick={() => this.closeModalGraph()}>Close</button></p>
          </Modal>
        </div>

        <div className="streetview">
        <img src={'https://cdn3.iconfinder.com/data/icons/ballicons-reloaded-vol-1/512/icon-31-256.png'} className="streetImg" alt="street"/>
          <a onClick={() => this.openModal()}>Street View</a>
          <Modal className="streetBlock" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <h3>cool street stuff</h3>
            <p>hello</p>
            <img src={'https://image.flaticon.com/sprites/new_packs/179116-graph.png'} className="mockImg" alt="graph"/>
            <p><button onClick={() => this.closeModal()}>Close</button></p>
          </Modal>
        </div>


            </div>
            <div className="main-body">
                <p className="App-intro">Akahele</p>
         
                <h2>TEST DATA FROM HONOLULU</h2>
                 <ul>
             {
                this.state.honolulu.map(crime => {
                    console.log('crimes ', crime)
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
         </div>
    
       
     </div>
    );
  }

    
}

export default App;