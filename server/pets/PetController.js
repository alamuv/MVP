var Q = require('q');
var Pet = require('./PetModel');
var petsData = require('../../data/pets');

var findAllPets = Q.nbind(Pet.find, Pet);
var createPet = Q.nbind(Pet.create, Pet);
var findPet = Q.nbind(Pet.findOne, Pet);

var seedData = function(data) {
  Pet.create(data, function(err, newPet){
    if(err) {
      console.error(err);
    }
    return newPet;
  });
};

seedData(petsData);

module.exports = {
  
  searchPets: function (req, res, next) {
    console.log('In search pets', req.query);
    findAllPets ({species: req.query.species, location: req.query.location})
    .then(function (pets) {
      res.json(pets);
    })
    .fail(function (error) {
      next(error);
    });
  },

  addPet: function (req, res, next) {
    var name = req.body.name;
    var breed = req.body.breed;
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
        res.json(pet);
      })
      .fail(function (error) {
        next(error);
      });
  }

};