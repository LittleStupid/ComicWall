var express = require('express')
var router = express.Router();
var mongoose = require('mongoose');

// var Sketch = mongoose.model('Sketch');
var ctrlSketches = require('../controllers/sketches');
var ctrlAuthores = require('../controllers/authores');

router.get('/sketches', ctrlSketches.sketchReadAll);
router.post('/sketches', ctrlSketches.sketchCreateOne);

router.get('/authores', ctrlAuthores.authorReadAll);
router.post('/authores', ctrlAuthores.authorCreateOne);

router.get('/sketches/name/:name', ctrlSketches.sketchReadOneByName);

router.get('/sketches/:id', ctrlSketches.sketchReadOne);
router.delete('/sketches/:id', ctrlSketches.sketchDeleteOne);

module.exports = router;
