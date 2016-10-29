var mongoose = require('mongoose');
var Author = mongoose.model('Author');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.authorReadAll = function(req, res) {
  Author.find()
    .populate("authors")
    .exec(function(err,authors) {
      if(err) {
      sendJsonResponse(res, 404, {
        "message": "no author"
      });
      } else {
        sendJsonResponse(res, 200, authors);
      }
    });
};

module.exports.authorCreateOne = function(req, res) {
  Author.create({name: req.body.name, header: req.body.header}, function(err, author) {
    if(err) {
      sendJsonResponse( res, 400, err );
    } else {
      sendJsonResponse( res, 201, author );
    }
  });
};

module.exports.authorReadOne = function(req, res) {
  if(req.params && req.params.authorId) {
    Author
      .findById(req.params.authorId)
      .populate("sketches")
      .exec(function(err,author) {
              if(!author) {
                sendJsonResponse( res, 404, {
                  "message": "author not found"
                });
                return ;
              } else if (err) {
                sendJsonResponse(res, 404, err);
                return ;
              }
              sendJsonResponse(res, 200, author);
            });
          } else {
            sendJsonResponse(res, 404, {
              "message": "No author in request"
            });
          }
};
