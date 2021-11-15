const express = require('express');
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer')
const authMiddleware = require('./middlewares/auth')

const LoginController = require('./controllers/LoginController');
const RegisterController = require('./controllers/registerController');
const TravelController = require('./controllers/travelController');
const TravelUserController = require('./controllers/travelUserController');
const TravelUserApproveController = require('./controllers/TravelUserApproveController');


routes.post('/login', LoginController.store);
routes.post('/register', RegisterController.store);

routes.post('/travel_register',multer(multerConfig).single('file'), TravelController.store);

routes.get('/travel_all', TravelController.index);
routes.get('/travel/:_id', TravelController.show);


routes.post('/travel_register_user', TravelUserController.store);
routes.get('/travel_user', TravelUserController.index);
routes.get('/travel/:_id', TravelUserController.show);

routes.delete('/travel_user/:_id', TravelUserController.destroy);

routes.post('/travel_user_approve/:_id', TravelUserApproveController.store);
routes.get('/travel_user_approve_all', TravelUserApproveController.index);

//routes.get('/profile', ProfileController.index);

//routes.post('/session', SessionController.store);

module.exports = routes;