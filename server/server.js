const express = require('express');
const app = express();
const methodOverride = require('method-override');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const CONFIG = require('./config/config.json');
const session = require('express-session');
const crime = require('./routes/crime');
const cities = require('./routes/cities');
const states = require('./routes/states');
let year2015 = require('./lib/seed-data').year2015;
console.log(year2015)



app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use('/crime', crime);
app.use('/cities', cities);
app.use('/states', states);

module.exports = app;