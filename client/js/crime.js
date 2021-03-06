// Loads map centred on Oahu
var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 21.5, lng: -158},
  zoom: 10,
  mapTypeId: 'terrain'
});

// Crime data
var oReq = new XMLHttpRequest();
oReq.addEventListener('load', initMap);
oReq.open('GET', `https://data.honolulu.gov/api/views/a96q-gyhq/rows.json`);
oReq.send();

// Traffic data
var oReq2 = new XMLHttpRequest();
oReq2.addEventListener('load', initMap);
oReq2.open('GET', `https://data.honolulu.gov/api/views/qg2s-mjkr/rows.json`);
oReq2.send();

function initMap(){

  let crimeParse = JSON.parse(this.responseText);

  // mockData in GeoJSON format
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

  // Marker clusterer
  var markers = [];

  // Allows for infoWindow to close previous instance
  var prevInfoWindow;

  // To be used with custom markers
  var iconBase = 'http://maps.gstatic.com/mapfiles/markers2/';

  // Gets user's current geolocation
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) => {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      // Adds marker over current position
      var marker = new google.maps.Marker({
        position: pos,
        map,
        icon: iconBase + 'measle_blue.png'
      });
      let infoWindow = new google.maps.InfoWindow({
        content: 'U R HURR'
      });
      infoWindow.open(map, marker);
      // Sets map view over current position
      map.setCenter(pos);
    }, _ => {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  }else{
    handleLocationError(false, infoWindow, map.getCenter());
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos){
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: Geolocation service failed' :
      'Error: Browser does not support geolocation');
  }

  function cacheData(data){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', e => {

    });
    xhr.open('POST', 'http://localhost:4000/user/cache', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
  }

  // Google geocoding (address to coordinates converter)
  let i = 0;
  let geocodeInterval = setInterval(_ => {
    if (i >= crimeParse.data.length){
      clearInterval(geocodeInterval);
      console.log('done geocoding');
      return;
    }
    let siteId = crimeParse.data[i][9];
    let address = crimeParse.data[i][10];
    let date = 'null';
    let type = crimeParse.data[i][14];
    console.log('tick, tick...');
    new google.maps.Geocoder().geocode({
      address: address,
      componentRestrictions: {
        country: 'US',
        administrativeArea: 'Honolulu'
      }
    }, (results, status) => {
      if (status === 'OK'){
        let marker = new google.maps.Marker({
          map,
          position: results[0].geometry.location,
        });
        // Marker clusterer
        markers.push(marker);
        console.log(address, ' successfully geocoded at ', 'LAT: ', results[0].geometry.location.lat(), ', ', 'LON: ', results[0].geometry.location.lng());
        cacheData({
          siteId,
          address,
          date,
          type,
          latitude: results[0].geometry.location.lat(),
          longitude: results[0].geometry.location.lng()
        });
        let infoWindow = new google.maps.InfoWindow({
          content: '<b>Date & Time: </b>' + date + '<br>' + '<b>Address: </b>' + address + '<br>' + '<b>Type: </b>' + type,
        });
        marker.addListener('click', _ => { 
          if (prevInfoWindow){
            prevInfoWindow.close();
          }
          infoWindow.open(map, marker);
          prevInfoWindow = infoWindow;
        });
        i++;
      // If OVER_QUERY_LIMIT, keep scanning until OK  
      }else if(status === 'OVER_QUERY_LIMIT'){
        console.log('Geocoding ', address, ' failed due to', status);
        return geocodeInterval;
      }else{
        console.log('Geocoding failed due to', status);
      }
    });

  // Marker clusterer  
  var markerClusterer = new MarkerClusterer(map, markers, {imagePath: 'js/images/m'});
  
  // Google quota limits at "no more than 50 per second"
  }, 1000);

  // Loops through mockData.features array
  for (let i = 0; i < mockData.features.length; i++){
    var coords = mockData.features[i].geometry.coordinates;
    var latLng = new google.maps.LatLng(coords[1], coords[0]);
    // 'var marker' will not work, keep as 'let marker'
    let marker = new google.maps.Marker({
      position: latLng,
      map,
      icon: iconBase + 'icon_green.png'
    });
    // What shows up in the infoWindow
    let infoWindow = new google.maps.InfoWindow({
      content: '<b>Date:</b> ' + `${mockData.features[i].properties.date}` + '<br>' + '<b>Name:</b> ' + `${mockData.features[i].properties.name}` + '<br>' + '<b>Type:</b> ' + `${mockData.features[i].properties.type}` + '<br>' + '<b>Cause:</b> ' + `${mockData.features[i].properties.cause}`
    });

    // Opens new infowindows, closes old infowindows
    marker.addListener('click', _ => { 
      if (prevInfoWindow){
        prevInfoWindow.close();
      }
      infoWindow.open(map, marker);
      prevInfoWindow = infoWindow;
    });
  }
}