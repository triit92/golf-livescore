const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true},
  info: String,
  logo: String,
  member: [{type: mongoose.Schema.Types.ObjectId, ref: 'Golfer'}],     //array golferID
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() }
}, { timestamps: true });

teamSchema.pre('save', function(next) {
  var self = this;

  var currentDate = Date.now();
  this.updated_at = currentDate;

  return next();
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
