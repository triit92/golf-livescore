const matchService = require('./match.service');
const tournamentService = require('../tournament/tournament.service');

module.exports = {
  renderCreate: (req, res) => {
    let tournamentId = req.params.tournamentId;
    console.log("-------------------------- params");
    console.log(tournamentId);
    tournamentService.getByIdPopulateTeam(tournamentId, (err, result) => {
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

  updateScore: (req, res) => {
    let matchId = req.params.matchId;
    let data = req.body.score;
    console.log(data);
    //TODO validate input
    matchService.updateScore(matchId, data, (err, result) => {
      console.log(err);
      console.log(result);
      if(err){
        req.flash('error', { msg: 'An error when update score of match!' });
        return res.redirect('/match/update-score/' + matchId);
      }
      req.flash('success', { msg: 'update match score successfully.' });
      return res.redirect('/match/update-score/' + matchId);
    })
  },

  createNewMatchInTournament: (req, res) => {
    let tournamentId = req.params.tournamentId;

    let name = req.body.name;
    let time = req.body.time;
    let teeTime = req.body.teeTime;
    let par = req.body.par;
    let arrayTeamMember = req.body.team;
    let type = req.body.type;

    
    //TODO validate input
    console.log("----------------------")
    console.log(req.body);

    tournamentService.getById(tournamentId, (err, result) => {
      console.log(result);
      let golfer = [];
      for(let i=0; i < arrayTeamMember.length; i++){
        let memberInTeam = arrayTeamMember[i].split(',').map(golfer_id => {
          return {
            golfer_id: golfer_id,
            team_id: result.team[i].team_id
          }
        });
        golfer = golfer.concat(memberInTeam);
      }
      //TODO check error and return 
      let parArray = par.split(',');
      let newMatch = {
        name: name,
        type: type,
        time: new Date(time),
        tee_time: teeTime,
        par: parArray,
        golfer: golfer,
        tournament_id: tournamentId
      }
      console.log(newMatch);
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
  },

  renderListMatch: (req, res) => {
    let tournamentId = req.params.tournamentId;
    tournamentService.getById(tournamentId, (err, tournament) => {
      if(err){

      }
      if(!tournament){

      }
      //TODO check err and tournament not found
      matchService.getAll(tournamentId, (err, results) => {
        if(err){
          //TODO hanfle error
        }
        res.render('match/listMatch', {list: results, tournamentId: tournamentId});
      })
    })
    
  }
}