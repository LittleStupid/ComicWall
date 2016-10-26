var express = require('express')
var router = express.Router();
var mongoose = require('mongoose');

var Sketch = mongoose.model('Sketch');

router.get('/sketches', function(req, res, next) {
  Sketch.find(function(err,sketches) {
    if(err) {
      res.json({"err":"not find"});
    } else {
      res.json({sketches});
    }
  })
});

router.get('/sketches/:id', function(req,res,next){
  Sketch.findById(req.params.id,function(err,sketch){
    if(err) {
      res.json({"err":"not find"});
    } else {
      res.json({sketch});
    }
  });
});


module.exports = router;
