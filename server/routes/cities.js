const express = require('express');
let router = express('router');
const db = require('./../models');
const { City,Crime } = db;

router.get('/', (req, res) => {
  City.findAll()
  .then(function(cities){
    console.log('cities sent')
    res.json(cities)
  })
})

router.get('/:city/crime', (req, res) => {
  let city = req.params.city;
  Crime.findAll({
    where: {
        city,
    }
  })
  .then(function(crimes){
    console.log('crime from city retrieved')
    res.json(crimes)
  })
})

router.get('/:city/crime/year/:year', (req, res) => {
  let {city, year} = req.params;
  Crime.findAll({
    where: {
        city,
        year
    }
  })
  .then(function(crimes){
    res.send(crimes)
  })
})

router.get('/:city/crime/type/:type', (req, res) => {
    let {city, type} = req.params;
  Crime.findAll({
    attributes: [type],
    where: {
        city
    }
  })
  .then(function(crimes){
    res.json(crimes)
  })
})

router.get('/:city/crime/type/:type/year/:year', (req, res) => {
    let {city, year, type} = req.params;
  Crime.findOne({
    attributes: [type],
    where: {
        city,
        year
    }
  })
  .then(function(crimes){
    res.json(crimes)
  })
})

module.exports = router;