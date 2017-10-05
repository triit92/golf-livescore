const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  name: { type: String, required: true},
  time: Date,
  tournament_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tournament', require: true},
  tee_time: String,
  par: [{ type: Number }],
  golfer: [{
    golfer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Golfer', require: true},
    team: { type: Number, require: true },
    result: [{ type: Number }]
  }]
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
