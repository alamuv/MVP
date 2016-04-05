var mongoose = require('mongoose');

var petSchema = new mongoose.Schema({
  name: String,
  species: String,
  breed: String,
  imgUrl: String,
  location: String,
  sex: String,
  color: String,
  rescuegrp: String
});

module.exports = mongoose.model('Pet', petSchema);