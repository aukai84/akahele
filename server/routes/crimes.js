const express = require('express');
let router = express('router');
const db = require('./../models');
const { Crime } = db;

router.get('/', (req, res) => {
  Crime.findAll()
  .then(function(crimes) {
    console.log('sent' + crimes)
    res.send(crimes);
  })
})

//find all crime in a specific year
router.get('/year/:year', (req, res) => {
    let year = req.params.year;
    Crime.findAll({
        where: {
            year
        }
    })
    .then(crimes => {
        res.json(crimes);
    })
})

//find all crime per type
router.get('/type/:crime', (req, res) => {
    let crime = req.params.crime;
  Crime.findAll({
    attributes: [crime]
  })
  .then(function(crimes) {
    res.json(crimes)
  })
})

//find all crime per year per type
router.get('/type/:crime/:year', (req, res) => {
    let {crime, year} = req.params;
    Crime.findfall({
        attributes: [crime],
        where: {
            year
        }
    })
    .then(crimes => {
        res.json(crimes);
    })
})

module.exports = router;