let teamModel = require('./team.model');

module.exports = {
  getById : (teamId, callback) => {
    teamModel.findById(teamId, (err, team) => {
      return callback(err, team);
    })
  }, 

  getByName : (teamName, callback) => {

  },

  createNewTeam : (teamData, callback) => {

  },

  editTeam : (teamId, newData, callback) => {
    
  }
}