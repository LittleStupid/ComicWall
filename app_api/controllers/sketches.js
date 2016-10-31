var mongoose = require('mongoose');
var Sketch = mongoose.model('Sketch');
var User = mongoose.model('User');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.sketchCreateOne = function(req, res) {
  Sketch.create({name: req.body.name, user: req.body.user, coverName: req.body.coverName},
                function(err, sketch) {
    if(err) {
      sendJsonResponse( res, 400, err );
    } else {
      UpdateUserSketches(req.body.user, sketch._id);
      sendJsonResponse( res, 201, sketch );
    }
  });
};

function UpdateUserSketches(userId, sketchId) {
  if(!userId) {
    return false;
  }
  if(!sketchId) {
    return false;
  }

  User.findById(userId, function(err, user){
    if(!user) {
      return false;
    }
    if(err) {
      console.log(err);
      return false;
    }

    user.sketches.push(sketchId);
    user.save(function(err,user){
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
      .populate("user")
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
    .populate("user")
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

function delUserSketch(userId, sketchId) {
  if(!userId){
    return false;
  }

  if(!sketchId){
    return false;
  }

  User.findById(userId, function(err, user){
    if(err){
      return false;
    }
    if(user.sketches.length <= 0) {
      return true;
    }

    for( var i = 0; i < user.sketches.length; i++ ){
      if(user.sketches[i] == sketchId) {
        user.sketches.splice(i,1);
        user.save(function(err){
          if(err){
            return false;
          }
          return true;
        });
      }
    }
  });
}

module.exports.sketchDeleteOne = function(req, res) {
  var id = req.params.id;
  if(id) {
    Sketch
      .findByIdAndRemove(id)
      .exec(function(err, sketch) {
              if(err) {
                sendJsonResponse(res, 404, err);
                return ;
              }
              console.log(sketch.user);
              delUserSketch(sketch.user, id);
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
