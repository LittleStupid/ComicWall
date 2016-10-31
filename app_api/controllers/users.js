var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.userReadAll = function(req, res) {
  User.find()
    .populate("users")
    .exec(function(err,users) {
      if(err) {
      sendJsonResponse(res, 404, {
        "message": "no user"
      });
      } else {
        sendJsonResponse(res, 200, users);
      }
    });
};

module.exports.userCreateOne = function(req, res) {
  User.create({name: req.body.name, header: req.body.header}, function(err, user) {
    if(err) {
      sendJsonResponse( res, 400, err );
    } else {
      sendJsonResponse( res, 201, user );
    }
  });
};

module.exports.userReadOne = function(req, res) {
  if(req.params && req.params.userId) {
    User
      .findById(req.params.userId)
      .populate("sketches")
      .exec(function(err,user) {
              if(!user) {
                sendJsonResponse( res, 404, {
                  "message": "user not found"
                });
                return ;
              } else if (err) {
                sendJsonResponse(res, 404, err);
                return ;
              }
              sendJsonResponse(res, 200, user);
            });
          } else {
            sendJsonResponse(res, 404, {
              "message": "No user in request"
            });
          }
};
