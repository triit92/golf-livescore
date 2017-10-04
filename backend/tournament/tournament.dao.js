const Tournament = require('./tournament.model');

module.exports = {

  createNewTournament: (data, callback) => {
    let newTournament = new Tournament(data);
    newTournament.save((err) => {
      return callback(err, newTournament);
    })
  }
}