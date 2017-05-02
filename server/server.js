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

const PORT = process.env.PORT || 4000;
const db = require('./models');
const {geocodedtraffic} = db;
const cors = require ('cors');
app.use(cors());

Renderkid = require('renderkid');

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
app.post('/user/cache', (req, res) => {
  console.log(req.body);
  geocodedtraffic.findOne({
    where: {
      trafficId: req.body.trafficId
    }
  })
  .then(trafficIncident => {
    if(trafficIncident){
      res.send('Traffic incident already exists');
    }else{
      geocodedtraffic.create(req.body);
      res.send('Traffic incident does not exist');
    }
  });
});

app.get('/user/cache/:id', (req, res) => {
  geocodedtraffic.findOne({
    where: {
      trafficId: req.params.id
    }
  })
  .then(traffic => {
    res.json(traffic);
  });
});

app.listen(PORT, _ => {
  console.log('server servering  at server port', `${PORT}`);
});

module.exports = app;