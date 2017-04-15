function initMap() {

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

  // Loads map centred on Oahu
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 21.5, lng: -158},
    zoom: 15
  });

  var prevInfoWindow = false;
  let infoWindow = new google.maps.InfoWindow({
    content: 'U R HURR'
  });

  // Gets user's current geolocation
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) => {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      // Adds marker over current position
      var iconBase = 'http://maps.gstatic.com/mapfiles/markers2/';
      var marker = new google.maps.Marker({
        position: pos,
        map,
        title: 'sup',
        icon: iconBase + 'measle_blue.png'
      });
      let infoWindow = new google.maps.InfoWindow({
        content: 'U R HURR'
      });
      infoWindow.open(map, marker);
      var prevInfoWindow = marker;
      // Sets map view over current position
      map.setCenter(pos);
    }, () => {
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

  // Loops through mockData.features array
  for (var i = 0; i < mockData.features.length; i++){
    var coords = mockData.features[i].geometry.coordinates;
    var latLng = new google.maps.LatLng(coords[1], coords[0]);
    // var marker will not work, keep as let
    let marker = new google.maps.Marker({
      position: latLng,
      map:map,
    });
    // What shows up in the infoWindow
    let infoWindow = new google.maps.InfoWindow({
      content: '<b>Date:</b> ' + `${mockData.features[i].properties.date}` + '<br>' + '<b>Name:</b> ' + `${mockData.features[i].properties.name}` + '<br>' + '<b>Type:</b> ' + `${mockData.features[i].properties.type}` + '<br>' + '<b>Cause:</b> ' + `${mockData.features[i].properties.cause}`
    });

    // Opens new infowindows, closes old infowindows
    marker.addListener('click', () => { 
      if (prevInfoWindow){
        prevInfoWindow.close();
      }
      infoWindow.open(map, marker);
      prevInfoWindow = infoWindow;
    });
  }

  // Chicago crimes layer
  /*var layer2 = new google.maps.FusionTablesLayer({
    query: {
      select: '\'Geocodable address\'',
      from: '1mZ53Z70NsChnBMm-qEYmSDOvLXgrreLTkQUvvg'
    }
  });*/

  //layer2.setMap(map);
}