const express = require('express');
const router = express.Router();

const matchController = require('./match.controller');


router.get('/create/:tournamentId', matchController.renderCreate);

router.get('/update-score/:matchId', matchController.renderUpdateScore);

router.post('/create/:tournamentId', matchController.createNewMatchInTournament);

// router.Post('/update-score/:matchId', matchController.renderUpdateScore);
module.exports = router;