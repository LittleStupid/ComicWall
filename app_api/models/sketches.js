var mongoose = require('mongoose');

var sketchSchema = new mongoose.Schema({
  name: { type: String, default: "sketch_name"}
});

mongoose.model('Sketch', sketchSchema);
