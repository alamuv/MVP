angular.module('petfinder.pets', [])

.controller('PetsController', function($scope, $location, Pets) {

  $scope.data = {};

  $scope.searchPets = function () {
    // console.log('$scope.pets', $scope.pets);
    Pets.getPets($scope.pets)
    .then(function (pets) {
      $scope.data.pets = pets;
    })
    .catch(function (error) {
      console.error(error);
    })
  };

}); 