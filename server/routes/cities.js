const express = require('express');
let router = express('router');
const db = require('./../models');
const { City,Crime } = db;

//find list of all cities?
router.get('/', (req, res) => {
    City.findAll()
        .then(cities => {
            res.json(cities);
        })
})

// find crimes by city all
router.get('/:city/crime', (req, res) => {
  let city = req.params.city;
  Crime.findAll({
    where: {
        city
    }
  })
  .then(function(crimes){
    console.log('crime from city retrieved')
    res.json(crimes)
  })
})

//find crimes by city by year all
router.get('/:city/crime/year/:year', (req, res) => {
  let {city, year} = req.params;
  Crime.findOne({
    where: {
        city,
        year
    }
  })
  .then(function(crimes){
    res.send(crimes)
  })
})

//find crimes by city by type all
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

//find crimes by city by type by year
router.get('/:city/crime/type/:type/:year', (req, res) => {
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