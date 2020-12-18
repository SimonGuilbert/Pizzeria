var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PizzaSchema = new Schema({
  name : String,
  price : String,
  desc : String,
  duJour : String,
  });

module.exports = mongoose.model('Pizza', PizzaSchema);