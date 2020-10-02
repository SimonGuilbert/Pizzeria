var mongoose = require('mongoose');

var Schema = mongoose.Schema;
let Client = require('./client');

var OrderSchema = new Schema({
  dateOrder : {
    type : Date,
    default : Date.now
  },
  is_payed : {
    type : Boolean,
    default : false
  },
  client : {
    type: Schema.ObjectId,
    ref: 'Client'
  }
});

module.exports = mongoose.model('Order', OrderSchema);