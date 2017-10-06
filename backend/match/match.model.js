const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  name: { type: String, required: true},
  time: Date,
  tournament_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tournament', require: true},
  tee_time: String,
  par: [{ type: Number }],
  type: { type: Number, default: 1, require: true},   // 1: normal 2: single match, 3: foursome
  golfer: [{
    golfer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Golfer', require: true},
    team_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', require: true},
    result: [{ type: Number }]
  }],
  status: {type: Number, default: 1}
}, { timestamps: { 
  createdAt: 'created_at',
  updatedAt: 'updated_at' 
  } 
});

// matchSchema.pre('save', function(next) {
//   var self = this;

//   var currentDate = Date.now();
//   this.updated_at = currentDate;

//   return next();
// });

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
