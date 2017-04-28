/*import ReactMapboxGl, { Layer, Feature } from “react-mapbox-gl”;

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoibW90YWoiLCJhIjoiY2oxcXcyNXhuMDBoMzJxcjJ6MDM4a2RnMCJ9.90jdeC6MaJFvOsY2gCurCQ';
var map = new mapboxgl.Map({
container: 'mapbox-container',
style: 'mapbox://styles/mapbox/streets-v9'
});*/
import React from 'react';
import ReactMapboxGl, { Layer, Feature, ZoomControl, Popup } from "react-mapbox-gl";

/*var ReactMapboxGl = require("react-mapbox-gl");*/
/*var Layer = ReactMapboxGl.Layer;*/
/*var Feature = ReactMapboxGl.Feature;*/

<ReactMapboxGl
  style="mapbox://styles/mapbox/streets-v8"
  accessToken="pk.eyJ1IjoibW90YWoiLCJhIjoiY2oxcXcyNXhuMDBoMzJxcjJ6MDM4a2RnMCJ9.90jdeC6MaJFvOsY2gCurCQ"
  containerStyle={{
    height: "800px",
    width: "800px"
  }}>
    <Layer
      type="symbol"
      id="marker"
      layout={{ "icon-image": "marker-15" }}>
      <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
    </Layer>
</ReactMapboxGl>

export default ReactMapboxGl