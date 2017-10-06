const express = require('express');
const router = express.Router();

const teamController = require('./team.controller');


router.get('/create', teamController.renderCreate);

router.get('/search-name', teamController.searchTeamByName);

router.post('/create', teamController.createNewTeam);

module.exports = router;