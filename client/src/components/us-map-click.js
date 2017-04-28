import * as d3 from 'd3';
import React, {Component} from 'react';
import * as topojson from 'topojson';
let usTopoJson = require('./d3-maps/usa/us.json');

let data = require('./d3-maps/states.json');

const State = ({data, geoPath, feature, quantize}) => {
    let color = 'cornflowerblue';

    if(data){
        color = 'cornflowerblue';
    }
    return (<path d={geoPath(feature)} style={{fill: color}} title={feature.id} />)
}

class StatesMap extends Component {
    constructor(props){
        super(props);
        this.projection = d3.geoAlbersUsa()
            .scale(1280);
        this.geoPath = d3.geoPath()
            .projection(this.projection);
        this.quantize = d3.scaleQuantize()
            .range(d3.range(9));
        this.udpateD3(props);
        this.state = {
            usTopoJson
        }
    }

    //udpate d3 objects when props udpate
    componentWillReceiveProps(newProps){
        this.updateD3(newProps);
    }

    updateD3(props){
        this.projection.translate([props.width/2, props.height/2]);

        if(props.crimeTotal){
            this.quantize.domain([10000, 75000]);
        }
    }

    render(){
        console.log(this.state)
        if(!this.state.usTopoJson){
            return null;
        } else {
            const us = this.state.usTopoJson,
                statesMesh = topojson.mesh(us, us.objects.states, (a, b) => a !== b),
                states = topojson.feature(us, us.objects.states).features;

                return (
                    <g>
                        {
                            states.map(feature => <State
                                    geoPath={this.geoPath}
                                    feature={feature}
                                    key={feature.id}
                                    quantize={this.quantize}
                                    data={(this.props.crimeTotal, {countyId: feature.id})}
                                />
                            )
                        }

                        <path d={this.geoPath(statesMesh)} style={{fill: 'none', stroke: '#fff', strokeLinejoin: 'round'}}/>
                    </g>
                )
        }
    }
}

export default StatesMap;