const express = require('express');
let router = express('router');
const db = require('./../models');
const { State, Crime } = db;

//find list of all states?
router.get('/', (req, res) => {
  State.findAll()
  .then(function(states){
    console.log('states retrieved')
    res.json(states)
  })
})

//find all crime by state all
router.get('/:state/crime', (req, res) => {
    let state = req.params.state;
  Crime.findAll({
    where: {
        state
    }
  })
  .then(function(crimes){
    console.log('crime from states retrieved')
    res.json(crimes)
  })
})

//find crime by state by year by type
router.get('/:state/crime/year/:year/type/:type', (req, res) => {
    let {state, year, type} = req.params;
  Crime.findOne({
    where: {
        state,
        year,
        type
    }
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