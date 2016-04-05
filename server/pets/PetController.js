var Q = require('q');
var Pet = require('./PetModel');
var petsData = require('../../data/pets');

var findAllPets = Q.nbind(Pet.find, Pet);
var createPet = Q.nbind(Pet.create, Pet);
var findPet = Q.nbind(Pet.findOne, Pet);

var seedData = function(data) {
  Pet.create(data, function(err, newPet){
    if(err) {
      return res.json(err);
    }
    return newPet;
  });
};

module.exports = {
  
  searchPets: function (req, res, next) {
    console.log('In search pets');
    seedData(petsData);
    findAllPets ({})
    .then(function (pets) {
      res.json(pets);
    })
    .fail(function (error) {
      next(error);
    });
  },

  addPet: function (req, res, next) {
    var name = req.body.name;
    var species = req.body.species;
    var sex = req.body.sex;
    var imgUrl = req.body.imgUrl;
    var rescuegrp = req.body.rescuegrp;
    var location = req.body.location;

    // check to see if user already exists
    findPet({name: name})
      .then(function (pet) {
        if (pet) {
          next(new Error('Pet already exist!'));
        } else {
          // make a new user if not one
          return createPet({
            name: name,
            species: species,
            sex: sex,
            imgUrl: imgUrl,
            rescuegrp: rescuegrp,
            location: location
          });
        }
      })
      .then(function (pet) {
        // create token to send back for auth
        console.log('Pet created');
      })
      .fail(function (error) {
        next(error);
      });
  }

};