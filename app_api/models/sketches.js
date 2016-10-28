var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sketchSchema = new mongoose.Schema({
  name: { type: String, default: "20304.jpg"},
  author: { type: Schema.Types.ObjectId, ref: 'Author' }
});

mongoose.model('Sketch', sketchSchema);
