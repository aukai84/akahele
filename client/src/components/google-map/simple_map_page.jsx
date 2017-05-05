import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_place.jsx';
 import { sendToApi } from '../../lib/modules/modules.js';
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
      notGeocoded: [],
      isGeocoded: [],
      data: [],
    }
    this.geocoder=this.geocoder.bind(this);
  }

  locator(){
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState(
        {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      );
    });
  }

  crimeDataRequest(){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", _ => {
      sendToApi('http://localhost:4000/cached')
      .then(objectidsList => {
        console.log(objectidsList);
      });
      /*JSON.parse(xhr.responseText).forEach(crimeIncident => {
        sendToApi("http://localhost:4000/api/checkData", crimeIncident)
          .then(crimeIncident => {
            if(crimeIncident.isGeocoded){
              isGeocoded.push(crimeIncident.incident);
            }else{
              notGeocoded.push(crimeIncident.incident);
            };
          });
      });*/
    });
    xhr.open('GET', `https://data.honolulu.gov/resource/9kc2-xdwh.json`);
    xhr.send();
/*    console.log('not geocoded: ', notGeocoded);
    this.setState({
      notGeocoded,
      isGeocoded
    });*/
    this.geocoder
  }

  cacheData(data){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', _ => {
    });
    xhr.open('POST', 'http://localhost:4000/cache');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
  }

  geocoder ({map, maps}) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', _ => {
      this.setState({data: JSON.parse(xhr.responseText)});
    });
    xhr.open('GET', `https://data.honolulu.gov/resource/9kc2-xdwh.json`);
    xhr.send();

    var markers = [];
    var prevInfoWindow;
    let i = 0;
    let timer = setInterval(_ => {
      // console.log(this.state.crimeData);
      if (i >= this.state.data.length){
        clearInterval(timer);
        console.log('GEOCODER FINISHED');
        return;
      }
      let objectid = this.state.data[i].objectid;
      let date = this.state.data[i].date;
      let blockaddress = this.state.data[i].blockaddress;
      let type = this.state.data[i].type;

      // console.log(this.state.data[i]);

      new maps.Geocoder().geocode({
        address: blockaddress,
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
          // console.log('Successfully geocoded', blockaddress, 'at', 'LAT:', results[0].geometry.location.lat(), 'LNG:', results[0].geometry.location.lng());
          let infoWindow = new maps.InfoWindow({
            content: '<b>ID: </b>' + objectid + '<br>' + '<b>Date & Time: </b>' + date + '<br>' + '<b>Address: </b>' + blockaddress + '<br>' + '<b>Type: </b>' + type
          });
          marker.addListener('click', _ => {
            if (prevInfoWindow){
              prevInfoWindow.close();
            }
            infoWindow.open(map, marker);
            prevInfoWindow = infoWindow;
          });
          this.cacheData({
            objectid,
            blockaddress,
            date,
            type,
            latitude: results[0].geometry.location.lat(),
            longitude: results[0].geometry.location.lng()
          });
          // console.log('Data cached');
          i++;
        }else if (status === 'OVER_QUERY_LIMIT'){
          // console.log('Geocoding', blockaddress, 'failed due to', status);
          return timer;
        }else{
          // console.log('Geocoding failed due to', status);
        }
      });
    }, 1000)
  }

  componentWillMount(){
    this.locator();
    this.crimeDataRequest();
  }

  componentDidUpdate(prevProps, prevState) {
    this.state.data;
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