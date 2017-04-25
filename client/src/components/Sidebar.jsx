import React from 'react';
import Modal from './Modal.jsx';
import RadioBtn from './radioBtn.jsx';
import ChartsContainer from '../containers/Charts'

class Sidebar extends React.Component {
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


    render(){
    return(
    	<div className="sidebar">
    	<div className="sidebarTitle"><p>Menu</p></div>
    	  <div className="graphView">
         <img src={'https://cdn4.iconfinder.com/data/icons/flat-business-icon-set/450/bar_chart-512.png'} className="graphImg" alt="graphs"/>
          <a onClick={() => this.openModalGraph()}>Graphs</a>
          <Modal isOpen={this.state.isModalGraphOpen} onClose={() => this.closeModalGraph()}>
            <h3>Graphs</h3>
            <p>work</p>
            <ChartsContainer/>




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
            <div className="stateOne">
            	<h3>State One</h3>
            <input type="text" name="search" placeholder="Search.."></input>
            </div>
            <div className="stateTwo">
            <h3>State Two</h3>
            <input type="text" name="search" placeholder="Search.."></input>
            </div>
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

        </div>
    	)

    }

}

export default Sidebar;







