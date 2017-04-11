const express = require('express');
let router = express('router');
const db = require('./../models');
const { State } = db;

router.get('/state', (req, res) => {
  State.findAll()
  .then(function(states){
    console.log('states retrieved')
    res.send(states)
  })
})

router.get('/state/:id/crime', (req, res) => {
  let stateId = req.params.id;
  Crime.findAll({
    where: id = stateId
  })
  .then(function(crimes){
    console.log('crime from states retrieved')
    res.send(crimes)
  })
})

router.get('/state/:id/crime/year/:id/type/:id', (req, res) => {
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

router.get('/state/:id/crime/type/:id', (req, res) => {
  let typeId = req.params.id;
  let stateId = req.params.id;
  Crime.findAll({
    where: state = stateId,
    type: typeId
  })
  .then(function(crimes){
    res.send(crimes)
  })
})

module.exports = router;