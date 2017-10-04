const express = require('express');
const router = express.Router();

const matchController = require('./match.controller');


router.get('/create', matchController.renerCreate);


module.exports = router;