import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Modal from './Modal.jsx';
import ChartsContainer from '../containers/Charts';
import LocationOneSearch from './state-comparison-search/locationOneSearch.js';


class NewSideBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
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

  render () {
    return (
      <Menu>
       <div className="sidebarTitle"><p>Menu</p></div>

          <div className="graphView">
              <img src={'https://cdn4.iconfinder.com/data/icons/flat-business-icon-set/450/bar_chart-512.png'} className="graphImg" alt="graphs"/>
              <a onClick={() => this.openModalGraph()}>Graphs</a>
              <Modal isOpen={this.state.isModalGraphOpen} onClose={() => this.closeModalGraph()}>
                    <div className="graphTitle"><h3>Graphs</h3></div>
                    <ChartsContainer currentView={this.props.currentView} currentData={this.props.currentData}/>
                    <p><button onClick={() => this.closeModalGraph()}>Close</button></p>
                </Modal>
            </div>

        <div className="cityComparison">
          <a onClick={() => this.openModal()}>City Comparison</a>
          <Modal className="cityBlock" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <div className="city-title"><h3>City Comparison</h3></div>
            <div className="cityOne">
             <h3>City One</h3>
            <input type="text" name="search" placeholder="Search.."></input>
            </div>
            <div className="cityTwo">
            <h3>City Two</h3>
            <input type="text" name="search" placeholder="Search.."></input>
            </div>
            <p><button className="closeBtn" onClick={() => this.closeModal()}>Close</button></p>
          </Modal>
        </div>

         <div className="stateComparison">
          <a onClick={() => this.openModalState()}>State Comparison</a>
          <Modal className="stateBlock" isOpen={this.state.isModalStateOpen} onClose={() => this.closeModalState()}>
            <LocationOneSearch/>
            <p><button className="closeBtn" onClick={() => this.closeModalState()}>Close</button></p>
          </Modal>
        </div>

        <div className="crimes">
        <p>Filter Nation Map By Crime:</p>

        <select onChange={this.crimeChange} value={this.props.crime}>
              <option value="all">All</option>
              <option value="murders">Murders</option>
              <option value="rape">Rape</option>
              <option value="theft">Theft</option>
        </select>
        </div>
      </Menu>
    );
  }
}

export default NewSideBar;