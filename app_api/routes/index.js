var express = require('express')
var router = express.Router();
var mongoose = require('mongoose');

var ctrlSketches = require('../controllers/sketches');
var ctrlAuth = require('../controllers/authentication');
var ctrlUsers = require('../controllers/users');

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

router.get('/users', ctrlUsers.userReadAll);
router.get('/users/:userId', ctrlUsers.userReadOne)

router.get('/sketches', ctrlSketches.sketchReadAll);
router.post('/sketches', ctrlSketches.sketchCreateOne);

router.get('/sketches/name/:name', ctrlSketches.sketchReadOneByName);
router.get('/sketches/:id', ctrlSketches.sketchReadOne);
router.delete('/sketches/:id', ctrlSketches.sketchDeleteOne);
router.put('/sketches/:id', ctrlSketches.sketchUpdateOne);

module.exports = router;
