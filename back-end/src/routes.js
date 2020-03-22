const express = require('express');

const DevController = require('./controllers/DevController');
const DislikesController = require('./controllers/DislikesController');
const routes = express.Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devID/dislikes', DislikesController.store);

module.exports = routes;