var mongoose = require('mongoose');

var petSchema = new mongoose.Schema({
  name: {type: String, unique: true},
  species: String,
  breed: String,
  imgUrl: String,
  thumbnailUrl: String,
  location: String,
  sex: String,
  color: String,
  rescuegrp: String
});

module.exports = mongoose.model('Pet', petSchema);