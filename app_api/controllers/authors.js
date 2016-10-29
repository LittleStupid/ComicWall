var mongoose = require('mongoose');
var Author = mongoose.model('Author');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.authorReadAll = function(req, res) {
  Author.find()
    .populate("sketches")
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
