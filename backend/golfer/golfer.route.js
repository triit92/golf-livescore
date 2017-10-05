const express = require('express');
const router = express.Router();

const golferController = require('./golfer.controller');


router.get('/create', golferController.renderCreate);

router.get('/search-name', golferController.searchGolferName);

router.post('/create', golferController.createGolfer);

module.exports = router;