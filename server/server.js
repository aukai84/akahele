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
const nation = require('./routes/nation');
const parsers = require('./lib/modules/parsers.js');
const {NationCrime} = require('./models');

const seeds = require('./seeders/20170502045820-nation_2005.js');

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
app.use('/api/nation', nation);

module.exports = app;