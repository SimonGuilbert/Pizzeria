function createReservation(req, res) {
    let Reservation = require('../models/reservation');
    let newReservation = Reservation ({
        dayReservation: req.body.dayReservation,
        hourReservation : req.body.hourReservation,
        nb_persons : req.body.nb_persons,
        client : req.body.client
    });
  
    newReservation.save()
    .then((savedReservation) => {

        //send back the created Reservation
        res.json(savedReservation);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readReservations(req, res) {

    let Reservation = require("../models/reservation");

    Reservation.find({})
    .then((reservations) => {
        res.status(200).json(reservations);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readReservation(req, res) {

    let Reservation = require("../models/reservation");

    Reservation.findById({_id : req.params.id})
    .then((reservation) => {
        res.status(200).json(reservation);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateReservation(req, res) {

    let Reservation = require("../models/reservation");

    Reservation.findByIdAndUpdate({_id: req.params.id}, 
        {nb_persons : req.body.nb_persons}, 
        {new : true})
    .then((updatedReservation) => {
        res.status(200).json(updatedReservation);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteReservation(req, res) {

    let Reservation = require("../models/reservation");

    Reservation.findOneAndRemove({_id : req.params.id})
    .then((deletedReservation) => {
        res.status(200).json(deletedReservation);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.create = createReservation;
module.exports.reads = readReservations;
module.exports.read = readReservation;
module.exports.delete = deleteReservation;
module.exports.update = updateReservation;