const golferDao = require('./golfer.dao');

module.exports = {
  getById: (golferId, callback) => {
    golferDao.getById(golferId, callback);
  },

  createNewGolfer: (golferData, callback) => {
    golferDao.createNewGolfer(golferData, callback);
  },

  searchByName: (name, limit, callback) => {
    golferDao.searchByName(name, limit, callback);
  }
}