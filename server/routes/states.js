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

router.get('/:state/total-crime/year/:year', (req, res) => {
    let {state, year} = req.params;
    Crime.sum('murder_and_manslaughter', {where: {state,year}})
    .then(totalMurder => {
        console.log(totalMurder)
        Crime.sum('rape', {where: {state,year}})
        .then(totalRape=>{
            Crime.sum('robbery', {where: {state,year}})
            .then(totalRobbery=>{
                Crime.sum('aggravated_assault', {where: {state,year}})
                .then(totalAggravatedAssault=>{
                    Crime.sum('burglary', {where: {state,year}})
                    .then(totalBurglary=>{
                        Crime.sum('larceny_theft', {where: {state,year}})
                        .then(totalTheft=>{
                            Crime.sum('motor_vehicle_theft', {where: {state,year}})
                            .then(totalMotorTheft=>{
                                Crime.sum('arson', {where: {state,year}})
                                    .then(totalArson=>{
                                        res.json({murder:totalMurder,rape:totalRape,robbery:totalRobbery,aggravatedAssault:totalAggravatedAssault,burglary:totalBurglary,theft:totalTheft,motorVehicleTheft:totalMotorTheft,arson:totalArson})
                                    })
                            })
                        })
                    })
                })
            })
        })
    })


})

module.exports = router;
