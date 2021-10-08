const express = require('express');
const routes = express.Router();

const authMiddleware = require('./middlewares/auth')

const AuthController = require('./controllers/authController');
const TravelController = require('./controllers/travelController');


routes.post('/register',authMiddleware, AuthController.store);
//routes.get('/users', UserController.index);

routes.post('/travel_register',authMiddleware, TravelController.store);
//routes.get('/users/:user_id/results', ResultController.index);
//routes.delete('/results/:id', ResultController.destroy);

//routes.get('/profile', ProfileController.index);

//routes.post('/session', SessionController.store);

module.exports = routes;