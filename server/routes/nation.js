const express = require('express');
const router = express('router');
const {NationCrime} = require('../models');

router.get('/all', (req, res) => {
    NationCrime.findAll()
    .then(crimes => {
        res.json(crimes)
    })
})


module.exports = router;