import React, {Component} from 'react';
import rd3 from 'react-d3-library';
import node from '../lib/js/d3file.js';
const RD3Component = rd3.Component;
console.log("node ", node)
class ReactD3Component extends Component {
    constructor(props){
        super(props);
        this.state = {
            d3: ''
        }
    }

    componentDidMount() {
        this.setState({
            d3: node
        });
    }

    render(){
        return (
            <div>
                <RD3Component data={this.state.d3}/>
            </div>
        )
    }
}

export default ReactD3Component;