var mongoose = require('mongoose');

var petSchema = new mongoose.Schema({
  name: String,
  species: String,
  imgUrl: String,
  location: String,
  sex: String,
  color: String,
  org_id: Number
});

module.exports = mongoose.model('Pet', petSchema);