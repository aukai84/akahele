const express = require('express');
let router = express('router');
const db = require('./../models');
const { Crime } = db;

router.get('/', (req, res) => {
  Crime.findAll({
    attributes: city
  })
  .then(function(cities){
    console.log('cities sent')
    res.json(cities)
  })
})

router.get('/cities/:id/crime', (req, res) => {
  let citiesId = req.params.id;
  Crime.findAll({
    where: id = citiesId
  })
  .then(function(crimes){
    console.log('crime from city retrieved')
    res.send(crimes)
  })
})

router.get('/cities/:id/crime/year/:id', (req, res) => {
  let citiesId = req.params.id;
  let yearId = req.params.id;
  Crime.findAll({
    where: cities = citiesId,
    year: yearId
  })
  .then(function(crimes){
    res.send(crimes)
  })
})

router.get('/cities/:id/crime/type/:id', (req, res) => {
  let citiesId = req.params.id;
  let typeId = req.params.id;
  Crime.findAll({
    where: cities = citiesId,
    type: typeId
  })
  .then(function(crimes){
    res.send(crimes)
  })
})

router.get('/cities/:id/crime/year/:id/type/:id', (req, res) => {
  let yearId = req.params.id;
  let typeId = req.params.id;
  let stateId = req.params.id;
  Crime.findAll({
    where: state = stateId,
    year: yearId,
    type: typeId
  })
  .then(function(crimes){
    res.send(crimes)
  })
})

module.exports = router;