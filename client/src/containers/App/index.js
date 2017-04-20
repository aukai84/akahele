import React, { Component } from 'react';
import './index.css';
import Modal from '../../components/Modal.jsx';
import {retrieveData} from '../../lib/modules/modules.js';
// import ReactD3Component from '../../components/d3graph.js';
 // <ReactD3Component honolulu={this.state.honolulu}/>



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            honolulu: [],
            isModalOpen: false,
            isModalGraphOpen: false,
            isModalStateOpen:false
           
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
      openModalState() {
      this.setState({ isModalStateOpen: true })
    }

    closeModalState() {
      this.setState({ isModalStateOpen: false })
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

         <div className="stateComparison">
        <img src={'http://www.villaasiatic.com/wp-content/uploads/2017/01/comparison.png'} className="stateImg" alt="state"/>
          <a onClick={() => this.openModalState()}>State Comparison</a>
          <Modal className="stateBlock" isOpen={this.state.isModalStateOpen} onClose={() => this.closeModalState()}>
            <h3>comparing states</h3>
            <p>not all states are equal</p>
            <img src={'https://image.flaticon.com/sprites/new_packs/179116-graph.png'} className="mockImg" alt="graph"/>
            <p><button onClick={() => this.closeModalState()}>Close</button></p>
          </Modal>
        </div>

        <div className="crimes">
        <p>Crimes</p>

        <select>
              <option value="all">All</option>
              <option value="murders">Murders</option>
              <option value="rape">Rape</option>
              <option value="theft">Theft</option>
        </select>

        </div>


            </div>
            <div className="main-body">
                <p className="App-intro">Akahele</p>
         
                <h2>TEST DATA FROM HONOLULU</h2>

                <img src={'http://synthesis.sbecker.net/wp-content/uploads/2012/07/choropleth.png'} className="mockNationImg" alt="nation"/>
                
                 
            </div>
         </div>
    
         <div>
            <h2>TESTING REACT-D3-LIBRARY</h2>


        

            </div>
            
     </div>
    );
  }

    
}

export default App;