angular.module('petfinder.services', [])

.factory('Pets', function ($http) {

  var getPets = function (query) {
    console.log('query', query);
    return $http({
      method: 'GET',
      url: '/api/adopt',
      params: query
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
    })
    .then(function (resp) {
      console.log(resp.data);
      return resp.data;
    });
  };

  return {
    getPets: getPets,
    addPet: addPet
  };
});