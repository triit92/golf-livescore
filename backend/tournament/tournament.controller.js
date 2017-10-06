const tournamentService = require('./tournament.service');

module.exports = {
  renderCreate: (req, res) => {
    return res.render('tournament/createTournament');
  },

  createNewTournament: (req, res) => {
    let name = req.body.name;
    let logo = req.body.body;
    let info = req.body.info;
    let member = req.body.member;

    //TODO validate input

    let data = {
      name: name,
      logo: logo,
      info: logo,
      member: member.split(',')
    }
    tournamentService.createNewTournament(data, (err, result) => {
      console.log(err);
      console.log(result);
      if(err){
        req.flash('error', { msg: 'An error when create new tournament!' });
        return res.redirect('/tournament/create');
      }
      req.flash('success', { msg: 'Create new tournament successfully.' });
      return res.redirect('/tournament/create');
    });
  },

  renderListTournament: (req, res) => {
    tournamentService.getAll((err, results) => {
      if(err){
        //TODO hanfle error
      }
      res.render('tournament/listTournament', {list: results});
    })
  },

  renderScore: (req, res) => {
    return res.render('tournament/score');
  }
}