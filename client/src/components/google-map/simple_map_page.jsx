import React, {PropTypes, Component} from 'react';

import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_place.jsx';

export default class GoogleMaps extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  };

  static defaultProps = {
    center: [21.5, -158],
    zoom: 10,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
       <GoogleMap
        center={this.props.center}
        zoom={this.props.zoom}>
        <MyGreatPlace lat={21.5} lng={-158} text={'wut'} />
        <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} />
      </GoogleMap>
    );
  }
}