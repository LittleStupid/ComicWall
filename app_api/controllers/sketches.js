var mongoose = require('mongoose');
var Sketch = mongoose.model('Sketch');
var Author = mongoose.model('Author');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.sketchCreateOne = function(req, res) {
  Sketch.create({name: req.body.name, author: req.body.author},
                function(err, sketch) {
    if(err) {
      sendJsonResponse( res, 400, err );
    } else {
      UpdateAuthorSketches(req.body.author, sketch._id);
      sendJsonResponse( res, 201, sketch );
    }
  });
};

function UpdateAuthorSketches(authorId, sketchId) {
  if(!authorId) {
    return false;
  }
  if(!sketchId) {
    return false;
  }

  Author.findById(authorId, function(err, author){
    if(!author) {
      return false;
    }
    if(err) {
      console.log(err);
      return false;
    }

    author.sketches.push(sketchId);
    author.save(function(err,author){
      if(err) {
        console.log(err);
        return false;
      } else {
        return true;
      }
    });

    return false;
  });
}

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

module.exports.sketchReadOneByName = function(req, res) {
  if(req.params && req.params.name) {
    Sketch
      .findOne( {"name":req.params.name+'.jpg'} )
      .populate("author")
      .exec(function(err,sketch) {
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
  Sketch.find({})
    .populate("author")
    .exec(function(err,sketches) {
      if(err) {
        sendJsonResponse(res, 404, {
          "message": "no sketches"
        });
      } else {
        sendJsonResponse(res, 200, sketches);
      }
    });
};

function delAuthorSketch(authorId, sketchId) {
  console.log("----------=-=-=-=-=-");
  if(!authorId){
    console.log("@@@");
    return false;
  }

  if(!sketchId){
    return false;
  }

  Author.findById(authorId, function(err, author){
    if(err){
      return false;
    }
    if(author.sketches.length <= 0) {
      return true;
    }

    for( var i = 0; i < author.sketches.length; i++ ){
      if(author.sketches[i] == sketchId) {
        author.sketches.splice(i,1);
        author.save(function(err){
          if(err){
            return false;
          }
          console.log("PPPPPPPPPPPP SUCCESS QQQQQQQQ");
          return true;
        });
      }
    }
  });
}

module.exports.sketchDeleteOne = function(req, res) {
  console.log("++++++++++");

  var id = req.params.id;
  if(id) {
    Sketch
      .findByIdAndRemove(id)
      .exec(function(err, sketch) {
              if(err) {
                sendJsonResponse(res, 404, err);
                return ;
              }
              console.log(sketch.author);
              delAuthorSketch(sketch.author, id);
              sendJsonResponse(res, 204, {
                "message": "deleted"
              });
            });
          } else {
            sendJsonResponse(res, 404, {
              "message": "No sketch"
            });
          }
};
