var petsController = require('../pets/PetController.js');
var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, express) {

  app.get('/api/adopt', petsController.searchPets);
  app.post('/api/shelter', petsController.addPet);

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

