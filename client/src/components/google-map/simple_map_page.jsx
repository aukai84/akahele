import React, {Component} from 'react';
import GoogleMap from 'google-map-react';
import { sendToApi } from '../../lib/modules/modules.js';

const RedDot = _ => <img src="http://maps.gstatic.com/mapfiles/markers2/measle.png"/>;

// const GreenMarker = _ => <img src="http://maps.gstatic.com/mapfiles/markers2/icon_green.png"/>;

// const RedMarker = _ => <img src="http://maps.gstatic.com/mapfiles/markers2/marker.png"/>;

const BlueDot = _ => <img src="http://maps.gstatic.com/mapfiles/markers2/measle_blue.png"/>;

// const mockData = {
//   "type": "FeatureCollection",
//   "features": [
//     {
//       "type": "Feature",
//       "properties": {
//         id: 0,
//         date: '12 April, 2017',
//         name: 'Mark Ota',
//         type: 'Death',
//         cause: 'Diarrhea'
//       },
//       "geometry": {
//         "type": "Point",
//         "coordinates": [
//           -157.84521102905273,
//           21.29225337295981
//         ]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": {
//         id: 1,
//         date: '7 August, 2021',
//         name: 'Aukai Tirrell',
//         type: 'Arrest',
//         cause: 'Drug trafficking',
//       },
//       "geometry": {
//         "type": "Point",
//         "coordinates": [
//           -158.18613052368164,
//           21.448595053724944
//         ]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": {
//         id: 2,
//         date: '7 August, 2021',
//         name: 'Nick Lee',
//         type: 'Death',
//         cause: 'Drug overdose',
//       },
//       "geometry": {
//         "type": "Point",
//         "coordinates": [
//           -158.1860339641571,
//           21.44716707427564
//         ]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": {
//         id: 3,
//         date: '2 February, 2057',
//         name: 'Danika Harada',
//         type: 'Missing person report',
//         cause: 'It was actually just a cat',
//       },
//       "geometry": {
//         "type": "Point",
//         "coordinates": [
//           -157.77706146240234,
//           21.42270950855108
//         ]
//       }
//     }
//   ]
// };

export default class GoogleMaps extends Component {

  constructor(props) {
    super(props);
    this.state={
      defaultCenter: {lat: 21.5, lng: -158},
      defaultZoom: 10,
      lat: 0,
      lng: 0,
      isGeocoded: [],
      notGeocoded: []
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
      .then(objects => {
        let hpd = JSON.parse(xhr.responseText);
        console.log('HPD XHR length: ', hpd.length);
        let cache = objects
          .filter(object => object !== null)
        let notGeocoded = hpd.filter((incident) => !cache.some((object) => object.cmid === incident.cmid));
        console.log('hpd: ', hpd);
        console.log('isGeocoded: ', cache);
        console.log('notGeocoded: ', notGeocoded);
        this.setState({notGeocoded, isGeocoded: cache});
      });
    });
    xhr.open('GET', `https://data.honolulu.gov/resource/9kc2-xdwh.json`);
    xhr.send();
    this.geocoder;
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
    for (let j=0; j <= this.state.isGeocoded.length; j++){
      let incident = this.state.isGeocoded[j];
      if(incident) {
        let marker = new maps.Marker({
          map,
          position: {
            lat: parseFloat(incident.latitude),
            lng: parseFloat(incident.longitude)
          },
          icon: 'http://maps.gstatic.com/mapfiles/markers2/measle.png'
        });
        let infoWindow = new maps.InfoWindow({
          content: '<b>ID: </b>' + incident.objectid + '<br>' + '<b>Date & Time: </b>' + incident.date + '<br>' + '<b>Address: </b>' + incident.blockaddress + '<br>' + '<b>Type: </b>' + incident.type
        });
        marker.addListener('click', _ => {
          if (prevInfoWindow){
            prevInfoWindow.close();
          }
          infoWindow.open(map, marker);
          prevInfoWindow = infoWindow;
        });
      }
    };
    console.log('Incidents not geocoded: ', this.state.notGeocoded.length);
    var markers = [];
    var prevInfoWindow;
    let i = 0;
    let timer = setInterval(_ => {
      if (i >= this.state.notGeocoded.length){
        clearInterval(timer);
        console.log('GEOCODER FINISHED');
        return;
      }

      let objectid = this.state.notGeocoded[i].objectid;
      let date = this.state.notGeocoded[i].date;
      let blockaddress = this.state.notGeocoded[i].blockaddress;
      let type = this.state.notGeocoded[i].type;

      new maps.Geocoder().geocode({
        address: blockaddress,
        componentRestrictions: {
          country: 'US',
          administrativeArea: 'Honolulu'
        }
      }, (results, geocodeStatus) => {
        if (geocodeStatus === 'OK'){
          let marker = new maps.Marker({
            map,
            position: results[0].geometry.location,
            animation: maps.Animation.DROP
          });
          markers.push(marker);
          console.log('Successfully geocoded', blockaddress, 'at', 'LAT:', results[0].geometry.location.lat(), 'LNG:', results[0].geometry.location.lng());
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
            blockaddress,
            cmagency: this.state.notGeocoded[i].cmagency,
            cmid: this.state.notGeocoded[i].cmid,
            date,
            kilonbr: this.state.notGeocoded[i].kilonbr,
            objectid,
            score: this.state.notGeocoded[i].score,
            side: this.state.notGeocoded[i].side,
            status: this.state.notGeocoded[i].status,
            type,
            longitude: results[0].geometry.location.lng(),
            latitude: results[0].geometry.location.lat()
          });
          console.log('Data cached');
          i++;
        }else if (geocodeStatus === 'OVER_QUERY_LIMIT'){
          console.log('Geocoding', blockaddress, 'failed due to', geocodeStatus);
          return timer;
        }else{
          console.log('Geocoding failed due to', geocodeStatus);
        }
      });
    }, 100)
  }

  componentWillMount(){
    this.locator();
    this.crimeDataRequest();
  }

  componentDidUpdate(prevProps, prevState) {
    this.state.notGeocoded;
    this.geocoder;
  }

        // {
        //   this.state.isGeocoded.map((incident) => {
        //     let latitude = parseFloat(incident.latitude);
        //     let longitude = parseFloat(incident.longitude);
        //     console.log('Incidents in cache: ', this.state.isGeocoded.length);
        //     return (
        //       <RedDot
        //         key={incident.id}
        //         lat={latitude}
        //         lng={longitude} />
        //     );
        //   })
        // }
  render() {
    console.log('isGeocoded:', this.state.isGeocoded);
    return (
      <GoogleMap
        onGoogleApiLoaded={this.geocoder}
        bootstrapURLKeys={{key: 'AIzaSyCC7M-pvWb75Zecv7358x-Zx9Bum_LPvGI'}}
        defaultCenter={this.state.defaultCenter}
        defaultZoom={this.state.defaultZoom}>
        <BlueDot
          lat={this.state.lat}
          lng={this.state.lng} />
      </GoogleMap>
    );
  }
}
        // {
        //   mockData.features.map((mockIncident) => {
        //     return (
        //       <GreenMarker 
        //         key={mockIncident.properties.id}
        //         lat={mockIncident.geometry.coordinates[1]}
        //         lng={mockIncident.geometry.coordinates[0]} />
        //     );
        //   })
        // }