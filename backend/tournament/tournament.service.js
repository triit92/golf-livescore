const tournamentDAO = require('./tournament.dao');

module.exports = {
  getById: (tournamentId, callback) => {
    tournamentDAO.getById(tournamentId, callback);
  },
  createNewTournament: (data, callback) => {
    tournamentDAO.createNewTournament(data, callback);
  }
}