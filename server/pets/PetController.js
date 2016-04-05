var Q = require('q');
var Pet = require('./PetModel');
var petsData = require('../../data/pets');

var findAllPets = Q.nbind(Pet.find, Pet);
var createPets = Q.nbind(Pet.create, Pet)

var seedData = function(data) {
  createPets(data)
  .then(function(newPet) {
    return newPet;
  })
  .fails(function (err) {
    next(err);
  });
};

seedData(petsData);

module.exports = {
  
  searchPets: function (req, res, next) {
    findAllPets ({})
    .then(function (pets) {
      res.json(pets);
    })
    .fail(function (error) {
      next(error);
    });
  }

};