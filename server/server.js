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

app.use('/crimes', crimes);
app.use('/cities', cities);
app.use('/states', states);

module.exports = app;