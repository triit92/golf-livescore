const golferService = require('./golfer.service');



module.exports = {
  renderCreate: (req, res) => {
    return res.render('golfer/createGolfer');
  },

  createGolfer: (req, res) => {
    let name = req.body.name;
    let avatar = req.body.avatar;
    let gender = req.body.gender;
    let level = req.body.level;
    
    // TODO validate input
    let newGolferData = {
      name: name,
      avatar: avatar,
      gender: gender,
      level: level
    }

    golferService.createNewGolfer(newGolferData, (err, result) => {
      if(err){
        req.flash('error', { msg: 'An error when create new golfer!' });
        return res.redirect('/golfer/create');
      }
      req.flash('success', { msg: 'Create new golfer successfully.' });
      return res.redirect('/golfer/create');
    });
  },

  searchGolferName: (req, res) => {
    let name = req.query.q;
    console.log("-------------------- " + name );
    
    //TODO validate name
    if(!name) return res.json([]);
    golferService.searchByName(name, 3, (err, results) => {
      if(err){
        console.log(err);
      }
      return res.json(results);
    })
  }
}