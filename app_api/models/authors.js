var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authorSchema = new mongoose.Schema({
  name: { type: String, default: "author_name" },
  header: { type: String, default: "0.jpg" },
  sketches : [{ type: Schema.Types.ObjectId, ref: 'Sketch' }]
});

mongoose.model('Author', authorSchema);
