angular.module('petfinder.shelter', [])

.controller('ShelterController', function($scope, $location, Pets) {

  $scope.pet = {};

  $scope.addPet = function () {
    console.log('$scope.pet', $scope.pet);
    Pets.addPet($scope.pet)
    .then(function () {
      $location.path('/');
    })
    .catch(function (error) {
      console.error(error);
    })
  };

}); 