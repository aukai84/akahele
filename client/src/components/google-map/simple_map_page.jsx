import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_place.jsx';

const GreenMarker = _ => <img src="http://maps.gstatic.com/mapfiles/markers2/icon_green.png"/>;

const RedMarker = _ => <img src="http://maps.gstatic.com/mapfiles/markers2/marker.png"/>;

const BlueDot = _ => <img src="http://maps.gstatic.com/mapfiles/markers2/measle_blue.png"/>;

const mockData = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          id: 0,
          date: '12 April, 2017',
          name: 'Mark Ota',
          type: 'Death',
          cause: 'Diarrhea'
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -157.84521102905273,
            21.29225337295981
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          id: 1,
          date: '7 August, 2021',
          name: 'Aukai Tirrell',
          type: 'Arrest',
          cause: 'Drug trafficking',
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -158.18613052368164,
            21.448595053724944
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          id: 2,
          date: '7 August, 2021',
          name: 'Nick Lee',
          type: 'Death',
          cause: 'Drug overdose',
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -158.1860339641571,
            21.44716707427564
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          id: 3,
          date: '2 February, 2057',
          name: 'Danika Harada',
          type: 'Missing person report',
          cause: 'It was actually just a cat',
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -157.77706146240234,
            21.42270950855108
          ]
        }
      }
    ]
  };

export default class GoogleMaps extends Component {

  constructor(props) {
    super(props);
    this.state={
      defaultCenter: {lat: 21.5, lng: -158},
      defaultZoom: 10,
      lat: 0,
      lng: 0,
      trafficData: [],
      crimeData: []
    }
    this.geocoder=this.geocoder.bind(this);
  }

  geolocator(){
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState(
        {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      );
    });
  }

  trafficDataRequest(){
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", _ =>
      this.setState({trafficData: JSON.parse(oReq.responseText)}));
    oReq.open('GET', `https://data.honolulu.gov/api/views/qg2s-mjkr/rows.json`);
    oReq.send();
  }

  crimeDataRequest(){
   var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", _ =>
      this.setState({crimeData: JSON.parse(oReq.responseText)}));
    oReq.open('GET', `https://data.honolulu.gov/api/views/a96q-gyhq/rows.json`);
    oReq.send(); 
  }

  geocoder ({map, maps}) {
    var markers = [];
    var prevInfoWindow;
    let i = 0;
    let timer = setInterval(_ => {
      console.log(this.state.crimeData);
      if (i >= this.state.trafficData.data.length){
        clearInterval(timer);
        console.log('GEOCODER FINISHED');
        return;
      }
      let incidentId = this.state.trafficData.data[i][0];
      let incidentDate = this.state.trafficData.data[i][8];
      let incidentAddress = this.state.trafficData.data[i][11];
      let incidentType = this.state.trafficData.data[i][10];
      new maps.Geocoder().geocode({
        address: incidentAddress,
        componentRestrictions: {
          country: 'US',
          administrativeArea: 'Honolulu'
        }
      }, (results, status) => {
        if (status === 'OK'){
          let marker = new maps.Marker({
            map,
            position: results[0].geometry.location
          });
          markers.push(marker);
          console.log('Successfully geocoded', incidentAddress, 'at', 'LAT:', results[0].geometry.location.lat(), 'LNG:', results[0].geometry.location.lng());
          let infoWindow = new maps.InfoWindow({
            content: '<b>ID: </b>' + incidentId + '<br>' + '<b>Date & Time: </b>' + incidentDate + '<br>' + '<b>Address: </b>' + incidentAddress + '<br>' + '<b>Type: </b>' + incidentType
          });
          marker.addListener('click', _ => {
            if (prevInfoWindow){
              prevInfoWindow.close();
            }
            infoWindow.open(map, marker);
            prevInfoWindow = infoWindow;
          });
          i++;
        }else if (status === 'OVER_QUERY_LIMIT'){
          console.log('Geocoding', incidentAddress, 'failed due to', status);
          return timer;
        }else{
          console.log('Geocoding failed due to', status);
        }
      });
    }, 1000)
  }

  componentWillMount(){
    this.geolocator();
    this.trafficDataRequest();
    this.crimeDataRequest();
  }

  render() {
    return (
      <GoogleMap
        onGoogleApiLoaded={this.geocoder}
        bootstrapURLKeys={{key: 'AIzaSyCC7M-pvWb75Zecv7358x-Zx9Bum_LPvGI'}}
        defaultCenter={this.state.defaultCenter}
        defaultZoom={this.state.defaultZoom}>
        <BlueDot
          lat={this.state.lat}
          lng={this.state.lng} />
        {
          mockData.features.map((mockIncident) => {
            return (
              <GreenMarker 
                key={mockIncident.properties.id}
                lat={mockIncident.geometry.coordinates[1]}
                lng={mockIncident.geometry.coordinates[0]} />
            );
          })
        }

      </GoogleMap>
    );
  }
}