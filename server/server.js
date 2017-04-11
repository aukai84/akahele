const express = require('express');
const app = express();
const methodOverride = require('method-override');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const CONFIG = require('./config/config.json');
const session = require('express-session');
const year = require('./routes/year');



app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use('/year', year);

module.exports = app;