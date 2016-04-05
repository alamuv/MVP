angular.module('petfinder.services', [])

.factory('Pets', function ($http) {

  var getPets = function () {
    return $http({
      method: 'GET',
      url: '/api/pets'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    getPets: getPets
  };
});