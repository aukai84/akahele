import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Modal from './Modal.jsx';
import ChartsContainer from '../containers/Charts';
import StateComparisonContainer from '../containers/StateComparison';
import GraphImg from '../../assets/bar_chart.png';
import CityImg from '../../assets/city-color.png';
import StateImg from '../../assets/locationpin.png';

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
              <a className="sidebar-graph" onClick={() => this.openModalGraph()}><img src={GraphImg} alt="graphImg" className="graphImg" width="30" height="30" />Graphs</a>
              <Modal isOpen={this.state.isModalGraphOpen} onClose={() => this.closeModalGraph()}>
                    <div className="graph-title"><h3>Graphs</h3></div>
                    <ChartsContainer currentView={this.props.currentView} currentData={this.props.currentData}/>
                    <p><button onClick={() => this.closeModalGraph()}>Close</button></p>
                </Modal>
            </div>

        <div className="cityComparison">
          <a onClick={() => this.openModal()}><img src={CityImg} className="cityImg" alt="cityImg" width="30" height="30" />City Comparison</a>
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
          <a onClick={() => this.openModalState()}><img src={StateImg} className="stateImg" alt="stateImg" width="30" height="30" />State Comparison</a>
          <Modal className="stateBlock" isOpen={this.state.isModalStateOpen} onClose={() => this.closeModalState()}>
           <div className="state-title"><h3>State Comparison</h3></div>
                <StateComparisonContainer/>             
            <p><button className="closeBtn" onClick={() => this.closeModalState()}>Close</button></p>
          </Modal>
        </div>

      </Menu>
    );
  }
}

export default NewSideBar;