const express = require('express');
let router = express('router');
const db = require('./../models');
const { Crime } = db;

router.get('/crime', (req, res) => {
  Crime.findAll()
  .then(function(crimes) {
    console.log('sent' + crimes)
    res.send(crimes);
  })
})

router.get('/crime/year/:id', (req, res) => {
  let crimeId = req.params.id;
  Crime.findAll({
    where: {
      id: crimeId
    }
  })
  .then(function(crimes) {
    console.log('it worked')
    res.send(crimes)
  })
})

router.get('/crime/year/:id/type/:id', (req, res) => {
  let crimeId = req.params.id;
  let yearId = req.params.id;
  Crime.findAll({
    where: {
      id: crimeId,
      year: yearId
    }
  })
  .then(function(crimes) {
    console.log('crime year type sent')
    res.send(crimes)
  })
})

router.get('/crime/type/:id', (req, res) => {
  let crimeId = req.params.id;
  Crime.findAll({
    where: {
      id: crimeId
    }
  })
  .then(function(crimes){
    console.log('here this is the type')
    res.send(crimes)
  })
})

module.exports = router;