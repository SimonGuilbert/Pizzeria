var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BoissonSchema = new Schema({
  name : String,
  price : String,
  desc : String,
  duJour : String,
  });

module.exports = mongoose.model('Boisson', BoissonSchema);