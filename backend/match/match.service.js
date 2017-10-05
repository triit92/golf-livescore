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
  }
}