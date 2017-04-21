import React, { Component } from 'react';
import './index.css';
import Modal from '../../components/Modal.jsx';
import {retrieveData} from '../../lib/modules/modules.js';
import ChartsContainer from '../../components/d3graph.js';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            barGraphData: [],
            lineGraphData: [],
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


    retrieveHonoluluData(){
        retrieveData('http://localhost:8080/cities/Honolulu/crime/year/2014')
        .then(data => {
            console.log(data)
            this.setState({
                barGraphData: [
                {name: "murder", amount: data.murder_and_manslaughter},
                {name: "rape", amount: data.rape},
                {name: "theft", amount: data.larceny_theft}
            ]
            })
        })

        retrieveData('http://localhost:8080/cities/Honolulu/crime')
        .then(data => {
            this.setState({
                lineGraphData: data
            })
        })
    }


    componentWillMount(){
        this.retrieveHonoluluData();
    }


    componentDidMount() {
        this.retrieveHonoluluData();
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
         <h1>TEST DATA FROM HONOLULU</h1>


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
            </div>
         </div>


         <div>
            <h2>TESTING REACT-D3-LIBRARY</h2>
            <ChartsContainer barGraphData={this.state.barGraphData} lineGraphData={this.state.lineGraphData}/>
         </div>
     </div>
    );
  }


}

export default App;