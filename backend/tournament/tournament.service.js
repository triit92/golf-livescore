const tournamentDAO = require('./tournament.dao');

module.exports = {
  createNewTournament: (data, callback) => {
    tournamentDAO.createNewTournament(data, callback);
  }
}