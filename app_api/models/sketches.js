var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sketchSchema = new mongoose.Schema({
  name: { type: String, default: "20304.jpg"},
  coverName: { type: String, default: "cover name"},
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('Sketch', sketchSchema);
