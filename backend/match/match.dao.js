const Match = require('./match.model');
const _ = require('underscore')
const matchDAO = {
  getById: (matchId, callback) => {
    Match.findById(matchId, (err, match) => {
      return callback(err, match);
    })
  },

  getByIdWithPopulate: (matchId, callback) => {
    Match.findById(matchId)
      .populate([
        {path: 'golfer.golfer_id', model: 'Golfer', select: '_id name avatar'}
      ])
      .lean()
      .exec((err, match) => {
        return callback(err, match);
      })
  },

  createNewMatchInTournament: (matchData, callback) => {
    let newMatch = new Match(matchData);
    newMatch.save((err) => {
      return callback(err, newMatch);
    })
  },

  updateScore: (matchId, data, callback) => {
    matchDAO.getById(matchId, (err, result) => {
      if(err){
        //TODO return err
        return err
      }
      if(!result){
        //todo return result not found from dao

      }
      _.extend(result.golfer, data);
      result.save((err) => {
        return callback(err);
      })
    })
  }
}

module.exports = matchDAO;