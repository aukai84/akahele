import React, { Component } from 'react';
import './index.css';
import {requestHelper} from '../../lib/modules.js';
// import SideMenu from '../../components/sideMenu.jsx';
// import Popout from '../../components/Popout.jsx';
// import ReactDOM from 'react-dom';
import Modal from '../../components/Modal.jsx';




class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            honolulu: [],
            isModalOpen: false
           
        }
        
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
         <div className="App-header">
              <h2>Akahele</h2>
         </div>
         <div className="container">
            <div className="sidebar">
            <p>Sidebar YAAAS</p>
                 <div>
          <button onClick={() => this.openModal()}>Graph</button>
          <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <h3>Put graph HERE</h3>
            <p>hello</p>
            <p><button onClick={() => this.closeModal()}>Close</button></p>
          </Modal>
        </div>

            </div>
            <div className="main-body">
                <p className="App-intro">Hello World</p>
         
                <h1>TEST DATA FROM HONOLULU</h1>
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
  openModal() {
      this.setState({ isModalOpen: true })
    }

    closeModal() {
      this.setState({ isModalOpen: false })
    }
}

export default App;