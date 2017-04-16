import React, {Component} from 'react';
import rd3 from 'react-d3-library';
import node from '../lib/js/d3file.js';
const RD3Component = rd3.Component;
const Map = require('react-d3-map').Map;
const MarkerGroup = require('react-d3-map').MarkerGroup;

 var width = 700;
  var height = 700;
  // set your zoom scale
  var scale = 1200 * 5;
  // min and max of your zoom scale
  var scaleExtent = [1 << 12, 1 << 13]
  // set your center point
  var center = [122, 23.5];
  // set your popupContent
  var popupContent = function(d) { return d.properties.text; }

  var data = {
    "type": "Feature",
    "properties": {
      "text": "this is a Point!!!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [122, 23.5]
    }
}

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
        console.log(this.state.d3)
        return (
            <div>
                <RD3Component data={this.state.d3}/>
                <h1>TEST MAP</h1>
                <Map
                    width={width}
                    height={height}
                    scale={scale}
                    scaleExtent={scaleExtent}
                    center={center}
                  >
                    <MarkerGroup
                      key={"polygon-test"}
                      data={data}
                      popupContent={popupContent}
                      markerClass={"your-marker-css-class"}
                    />
                  </Map>
                , document.getElementById('blank-point')
            </div>
        )
    }
}

export default ReactD3Component;