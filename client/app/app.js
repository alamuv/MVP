angular.module('petfinder', [
  'petfinder.pets',
  'petfinder.shelter',
  'petfinder.services',
  'ngRoute'])

.config(function($httpProvider, $routeProvider) {
  $routeProvider
  .when('/adopt', {
    templateUrl: 'app/pets/search.html',
    controller: 'PetsController'
  })
  .when('/shelter', {
    templateUrl: 'app/shelter/shelter.html',
    controller: 'ShelterController'
  })
  .otherwise({
    redirectTo:'/adopt'
  });
});