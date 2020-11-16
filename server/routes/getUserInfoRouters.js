const express = require('express')
const getUserInfoRouters = express.Router();
const usersData = require('../services/getUseInfo');

getUserInfoRouters.get('/',(req, res) => {
    res.json(usersData)
});




module.exports = getUserInfoRouters;
