var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DessertSchema = new Schema({
  name : String,
  price : String,
  desc : String,
  duJour : String,
  });

module.exports = mongoose.model('Dessert', DessertSchema);