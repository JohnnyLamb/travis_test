var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Beer = new Schema({
  name: String,
  location: String
});
module.exports = mongoose.model('beers', Beer);
