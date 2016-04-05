angular.module('petfinder.services', [])

.factory('Pets', function ($http) {

  var getPets = function () {
    return $http({
      method: 'GET',
      url: '/api/adopt'
    })
    .then(function (resp) {
      console.log(resp.data);
      return resp.data;
    });
  };

  var addPet = function (pet) {
    return $http({
      method: 'POST',
      url: '/api/shelter',
      data: pet
    });
  };

  return {
    getPets: getPets,
    addPet: addPet
  };
});