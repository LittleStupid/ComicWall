var mongoose = require('mongoose');
var Sketch = mongoose.model('Sketch');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.sketchReadOne = function(req, res) {
  if(req.params && req.params.id) {
    Sketch
      .findById(req.params.id, function(err,sketch) {
        if(!sketch) {
          sendJsonResponse( res, 404, {
            "message": "sketch not found"
          });
          return ;
        } else if (err) {
          sendJsonResponse(res, 404, err);
          return ;
        }
        sendJsonResponse(res, 200, sketch);
      });
  } else {
    sendJsonResponse(res, 404, {
      "message": "No sketch in request"
    });
  }
};

module.exports.sketchReadAll = function(req, res) {
  Sketch.find(function(err,sketches) {
    if(err) {
      sendJsonResponse(res, 404, {
        "message": "no sketches"
      });
    } else {
      sendJsonResponse(res, 200, sketches);
    }
  })
};

module.exports.sketchDeleteOne = function(req, res) {
  var id = req.params.id;
  if(id) {
    Sketch
      .findByIdAndRemove(id, function(err, sketch) {
        if(err) {
          sendJsonResponse(res, 404, err);
          return ;
        }
        sendJsonResponse(res, 204, null);
      });
  } else {
    sendJsonResponse(res, 404, {
      "message": "No sketch"
    });
  }
};
