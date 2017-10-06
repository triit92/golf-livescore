const mongoose = require('mongoose');
const util = require('../util');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true},
  name_searchable: String,
  info: String,
  logo: String,
  member: [{type: mongoose.Schema.Types.ObjectId, ref: 'Golfer'}],     //array golferID
  status: {type: Number, default: 1},
  // created_at: { type: Date, default: Date.now() },
  // updated_at: { type: Date, default: Date.now() }
}, { timestamps: { 
  createdAt: 'created_at',
  updatedAt: 'updated_at' 
  }});

teamSchema.pre('save', function(next) {
  var self = this;

  this.name_searchable = util.change_alias(this.name.toLowerCase());

  return next();
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
