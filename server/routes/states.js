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


router.get('/:state/crime/year/:year', (req, res) => {
    let {state, year} = req.params;
  Crime.findAll({
    where: {
        state,
        year
    }
  })
  .then(function(crimes){
    res.json(crimes);
  })
})

router.get('/:state/crime/type/:type', (req, res) => {
    let {state, type} = req.params;
  Crime.findAll({
    attributes: [type],
    where: {
        state
    }
  })
  .then(function(crimes){
    res.json(crimes)
  })
})

router.get('/:state/crime/type/:type/:year', (req, res) => {
    let {state, type, year} = req.params;
    Crime.findAll({
        attributes: [type],
        where: {
            state,
            year
        }
    })
    .then(crimes => {
        res.json(crimes);
    })
})

module.exports = router;