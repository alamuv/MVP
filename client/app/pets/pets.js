angular.module('petfinder.pets', [])

.controller('PetsController', function($scope, Pets) {

  $scope.data = {};

  $scope.searchPets = function () {
    Pets.getPets()
    .then(function (pets) {
      $scope.data.pets = pets;
    })
    .catch(function (error) {
      console.error(error);
    })
  };

}); 