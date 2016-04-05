angular.module('petfinder', [
  'petfinder.pets',
  'petfinder.services',
  'ngRoute'])

.config(function($httpProvider, $routeProvider) {
  $routeProvider
  .when('/pets', {
    templateUrl: 'app/pets/search.html',
    controller: 'PetsController'
  })
  .otherwise({
    redirectTo:'/pets'
  });
});