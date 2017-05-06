const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const CONFIG = require('./config/config.json');
const session = require('express-session');
const crimes = require('./routes/crimes');
const cities = require('./routes/cities');
const states = require('./routes/states');
const parsers = require('./lib/modules/parsers.js');

const fs = require('fs');
const PORT = process.env.PORT || 4000;
const db = require('./models');
const {CrimeIncident} = db;
const cors = require ('cors');
app.use(cors());

app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.use('/api/crimes', crimes);
app.use('/api/cities', cities);
app.use('/api/states', states);

// check route to send HPD geocoded addresses to PSQL
app.post('/cache', (req, res) => {
  CrimeIncident.findOne({
    where: {
      objectid: req.body.objectid
    }
  })
  .then(trafficIncident => {
    if(trafficIncident){
      res.send('Traffic incident already exists');
    }else{
      CrimeIncident.create(req.body);
      res.send('Traffic incident does not exist');
    }
  });
});

app.get('/parseIntoJson', (req, res) => {
  CrimeIncident.findAll()
    .then(crimes => {
      fs.writeFile('./lib/data/json/HawaiiIncidents.json', JSON.stringify(crimes), err => {
            if(err){console.log(err);}
            console.log("done writing cities json");
        });
        res.send("hawaii data parsed bitch");
    });
});

// Says post, but is actually get
app.post('/cached', (req, res) => {
  CrimeIncident.findAll()
    .then(list => {
      let objectidsList = list.map(item => {
        return item.dataValues;
      });

      res.send(objectidsList);
    });
});

// Check data from HPD against DB
/*app.post('/api/checkData', (req, res) => {
  CrimeIncident.findOne({
    where: {
      objectid: req.body.objectid
    }
  })
  .then(incident => {
    if(incident){
      console.log('FOUND');
      res.json({isGeocoded:true, incident});
    }else{
      console.log('NOT FOUND');
      res.json({isGeocoded:false, incident:req.body});
    }
  });
});*/

/*app.get('/user/cache/:id', (req, res) => {
  geocodedtraffic.findOne({
    where: {
      trafficId: req.body.trafficId
    }
  })
  .then(trafficIncident => {
    console.log('DIS', trafficIncident );
    if(trafficIncident){
      res.send('Traffic incident already exists');
      res.json(trafficIncident);
    }else{
      geocodedtraffic.create(req.body);
      res.send('Traffic incident does not exist');
    }
  });
});*/

app.listen(PORT, _ => {
  console.log('server servering  at server port', `${PORT}`);
});

module.exports = app;