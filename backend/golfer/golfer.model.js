const mongoose = require('mongoose');

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

function change_alias(alias) {
  var str = alias;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
  str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
  str = str.replace(/đ/g,"d");
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
  str = str.replace(/ + /g," ");
  str = str.trim(); 
  return str;
}

golferSchema.pre('save', function(next) {
  var self = this;

  this.name_searchable = change_alias(this.name.toLowerCase());

  return next();
});

const Golfer = mongoose.model('Golfer', golferSchema);

module.exports = Golfer;
