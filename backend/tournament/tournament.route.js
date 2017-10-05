const express = require('express');
const router = express.Router();

const tournamentController = require('./tournament.controller');


router.get('/create', tournamentController.renderCreate);

router.post('/create', tournamentController.createNewTournament);
module.exports = router;