var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ClientSchema = new Schema({
  lastname : String,
  firstname : String,
  email : String,
  phoneNumber : String
  });

module.exports = mongoose.model('Client', ClientSchema);