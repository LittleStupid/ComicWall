var express = require('express')
var router = express.Router();
var mongoose = require('mongoose');

// var Sketch = mongoose.model('Sketch');
var ctrlSketches = require('../controllers/sketches');
var ctrlAuthors = require('../controllers/authors');

router.get('/authors', ctrlAuthors.authorReadAll);
router.get('/authors/:authorId', ctrlAuthors.authorReadOne)
router.post('/authors', ctrlAuthors.authorCreateOne);

router.get('/sketches', ctrlSketches.sketchReadAll);
router.post('/sketches', ctrlSketches.sketchCreateOne);

router.get('/sketches/name/:name', ctrlSketches.sketchReadOneByName);
router.get('/sketches/:id', ctrlSketches.sketchReadOne);
router.delete('/sketches/:id', ctrlSketches.sketchDeleteOne);

module.exports = router;
