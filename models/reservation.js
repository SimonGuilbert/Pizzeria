var mongoose = require('mongoose');

var Schema = mongoose.Schema;
let Client = require('./client');

var ReservationSchema = new Schema({
  dayReservation : {
    type : Date,
    default : Date.now
  },
  hourReservation : {
    type : Date,
    default : Date.now
  },
  nb_persons : String,
  client : {
    type: Schema.ObjectId,
    ref: 'Client'
  }
});

module.exports = mongoose.model('Reservation', ReservationSchema);