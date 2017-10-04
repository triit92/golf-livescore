const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
  name: { type: String, required: true},
  location: String,
  info: String,
  logo: String,
  baner: String,
  match: [{type: mongoose.Schema.Types.ObjectId, ref: 'Match'}],     //array golferID
  member: [{type: mongoose.Schema.Types.ObjectId, ref: 'Golfer'}],     //array golferID
  // created_at: { type: Date, default: Date.now() },
  // updated_at: { type: Date, default: Date.now() }
}, { timestamps: { 
  createdAt: 'created_at',
  updatedAt: 'updated_at' 
  }
});

tournamentSchema.pre('save', function(next) {
  var self = this;

  var currentDate = Date.now();
  this.updated_at = currentDate;

  return next();
});


const Tournament = mongoose.model('Tournament', tournamentSchema);

module.exports = Tournament;
