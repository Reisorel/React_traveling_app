const express = require('express');
const router = express.Router();

const ReservationsController = require('../controllers/Reservations_controller')
const TravelsController = require('../controllers/Travels_controller')
const UsersController = require('../controllers/Users_controller')

// Routes for users
router.get('/users', UsersController.getAllUsers)
router.post('/users', UsersController.createUser)
router.delete('/users/:id', UsersController.deleteUser);
router.put('/users/:id', UsersController.updateUser);

// Routes for travels
router.get('/travels', TravelsController.getAllTravels)
router.post('/travels', TravelsController.createTravel)
router.delete('/travels/:id', TravelsController.deleteTravel);
router.put('/travels/:id', TravelsController.updateTravel);

// Routes for reservations
router.get('/reservations', ReservationsController.getAllReservations)
router.post('/reservations', ReservationsController.createReservation)
router.delete('/reservations/:id', ReservationsController.deleteReservation);
router.put('/reservations/:id', ReservationsController.updateReservation);

module.exports = router;
