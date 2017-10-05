const Tournament = require('./tournament.model');

module.exports = {
  getById: (tournamentId, callback) => {
    Tournament.findById(tournamentId, (err, tournament) => {
      return callback(err, tournament);
    })
  },

  createNewTournament: (data, callback) => {
    let newTournament = new Tournament(data);
    newTournament.save((err) => {
      return callback(err, newTournament);
    })
  }
}