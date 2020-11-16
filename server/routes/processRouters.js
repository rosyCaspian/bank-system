const express = require('express')
const processRouters = express.Router();
const process = require('../services/process');

processRouters.get('/start',(req, res) => {
    var r = process.start();
    res.json(r);
});

processRouters.get('/record',(req, res) => {
    console.log(process.records);
    res.json(process.records);
});

processRouters.get('/phrase',(req, res) => {
    process.phrase();
    res.json({status: "ok"});
});

module.exports = processRouters;