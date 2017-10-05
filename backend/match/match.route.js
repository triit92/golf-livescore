const express = require('express');
const router = express.Router();

const matchController = require('./match.controller');


router.get('/create/:tournamentId', matchController.renderCreate);

router.post('/create/:tournamentId', matchController.createNewMatchInTournament);
module.exports = router;