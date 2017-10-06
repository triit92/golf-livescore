const tournamentDAO = require('./tournament.dao');

module.exports = {
  getById: (tournamentId, callback) => {
    return tournamentDAO.getById(tournamentId, callback);
  },

  getByIdPopulateTeam: (tournamentId, callback) => {
    return tournamentDAO.getByIdPopulateTeam(tournamentId, callback);
  },

  createNewTournament: (data, callback) => {
    return tournamentDAO.createNewTournament(data, callback);
  },
  getAll: (callback) => {
    return tournamentDAO.getAll(callback);
  }
}