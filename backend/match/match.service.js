const matchDAO = require('./match.dao');

module.exports = {
  getById: (matchId, callback) => {
    return matchDAO.getById(matchId, callback);
  },

  getByIdWithPopulate: (matchId, callback) => {
    return matchDAO.getByIdWithPopulate(matchId, callback);
  },

  createNewMatchInTournament: (matchData, callback) => {
    return matchDAO.createNewMatchInTournament(matchData, callback);
  },

  updateScore: (matchId, data, callback) => {
    return matchDAO.updateScore(matchId, data, callback);
  },

  getAll: (tournamentId, callback) => {
    return matchDAO.getAll(tournamentId, callback);
  }
}