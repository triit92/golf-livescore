const Match = require('./match.model');

module.exports = {
  getById: (matchId, callback) => {
    Match.findById(matchId, (err, match) => {
      return callback(err, match);
    })
  },

  createNewMatchInTournament: (matchData, callback) => {
    let newMatch = new Match(matchData);
    newMatch.save((err) => {
      return callback(err, newMatch);
    })
  },

  updateScore: (scoreData, callback) => {
    
  }
}