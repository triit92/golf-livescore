const express = require('express');
const router = express.Router();

const tournamentController = require('./tournament.controller');


router.get('/create', tournamentController.renderCreate);

router.get('/list', tournamentController.renderListTournament);

router.get('/score/:slug', tournamentController.renderScore);

router.post('/create', tournamentController.createNewTournament);
module.exports = router;