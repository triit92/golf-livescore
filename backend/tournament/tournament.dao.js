const Tournament = require('./tournament.model');

module.exports = {
  getById: (tournamentId, callback) => {
    Tournament.findById(tournamentId, (err, tournament) => {
      return callback(err, tournament);
    })
  },

  getByIdPopulateTeam: (tournamentId, callback) => {
    Tournament.findById(tournamentId)
      .populate([
        {path: 'team.team_id', model: 'Team', select: '_id name info logo'}
      ])
      .lean()
      .exec((err, tournament) => {
        return callback(err, tournament);
      })
  },

  createNewTournament: (data, callback) => {
    let newTournament = new Tournament(data);
    newTournament.save((err) => {
      return callback(err, newTournament);
    })
  },

  getAll: (callback) => {
    //TODO find with status 1
    Tournament.find()
    .sort({created_at: -1})
    .limit(10)
    .lean()
    .exec((err, results) => {
      return callback(err, results);
    })
  }
}