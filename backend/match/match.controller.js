const matchService = require('./match.service');
const tournamentService = require('../tournament/tournament.service');

module.exports = {
  renderCreate: (req, res) => {
    let tournamentId = req.params.tournamentId;
    console.log("-------------------------- params");
    console.log(tournamentId);
    tournamentService.getById(tournamentId, (err, result) => {
      console.log(result);

      //TODO check error and return 

      return res.render('match/createMatch', {tournament: result});
    });
  },

  renderUpdateScore: (req, res) => {
    let matchId = req.params.matchId;
    matchService.getByIdWithPopulate(matchId, (err, result) => {
      console.log(result);
      
      //TODO check error and return 
      return res.render('match/updateScore', { match: result});
      // return res.json(result);
    })
  },

  createNewMatchInTournament: (req, res) => {
    let tournamentId = req.params.tournamentId;

    let name = req.body.name;
    let time = req.body.time;
    let teeTime = req.body.teeTime;
    let par = req.body.par;
    let member = req.body.member;
    let type = req.body.type;

    //TODO validate input
    console.log("----------------------")
    console.log(member);

    tournamentService.getById(tournamentId, (err, result) => {
      console.log(result);

      //TODO check error and return 
      let parArray = par.split(',');
      let newMatch = {
        name: name,
        type: type,
        time: new Date(time),
        tee_time: teeTime,
        par: parArray,
        golfer: member.split(',').map((x) => {return { golfer_id: x}}),
        tournament_id: tournamentId
      }

      matchService.createNewMatchInTournament(newMatch, (err, result) => {
        console.log(err);
        console.log(result);
        if(err){
          req.flash('error', { msg: 'An error when create new match!' });
          return res.redirect('/match/create/' + tournamentId);
        }
        req.flash('success', { msg: 'Create new match successfully.' });
        return res.redirect('/match/create/' + tournamentId);
      });
    });
  }
}