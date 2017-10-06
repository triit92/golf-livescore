const mongoose = require('mongoose');
const util = require('../util');

const golferSchema = new mongoose.Schema({
  name: { type: String, required: true},
  name_searchable: String,
  gender: Number, //1: male, 2: female, 3: other
  level: Number,  //1: amateur, 2: pro
  nation: String,
  info: String,
  avatar: String,
  status: {type: Number, default: 1}
}, { timestamps: { 
          createdAt: 'created_at',
          updatedAt: 'updated_at' 
        }
  });

  golferSchema.index({name: 'text'});

golferSchema.pre('save', function(next) {
  var self = this;

  this.name_searchable = util.change_alias(this.name.toLowerCase());

  return next();
});

const Golfer = mongoose.model('Golfer', golferSchema);
module.exports = Golfer;
