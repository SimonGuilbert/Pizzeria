function createDessert(req, res) {
    let Dessert = require('../models/dessert');
    let newDessert = Dessert ({
        name : req.body.name,
        price : req.body.price,
        desc : req.body.desc,
        duJour : 'false'
    });
  
    newDessert.save()
    .then((savedDessert) => {

        //send back the created Dessert
        res.json(savedDessert);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readDesserts(req, res) {

    let Dessert = require("../models/dessert");

    Dessert.find({})
    .then((desserts) => {
        res.status(200).json(desserts);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readDessert(req, res) {

    let Dessert = require("../models/dessert");

    Dessert.find({_id : req.params.id})
    .then((dessert) => {
        res.status(200).json(dessert);
    }, (err) => {
        res.status(500).json(err);
    });
 }
/*
function updateDessert(req, res) {

    let Dessert = require("../models/dessert");

    Dessert.findByIdAndUpdate({_id: req.params.id}, 
        {name : req.body.name, 
        price : req.body.price}, 
        {new : true})
    .then((updatedDessert) => {
        res.status(200).json(updatedDessert);
    }, (err) => {
        res.status(500).json(err);
    });
}
*/

function duJour(req,res) {

    let Dessert = require("../models/dessert");

    Dessert.updateOne({ duJour: "true" }, 
        {duJour: "false"})
    .then((updatedDessert) => {
        res.status(200).json(updatedDessert);
    }, (err) => {
        res.status(500).json(err);
    });

    Dessert.findByIdAndUpdate({_id: req.params.id},
        {duJour : "true"})
    .then((updatedDessert) => {
        res.status(200).json(updatedDessert);
    }, (err) => {
        res.status(500).json(err);
    });
}

function getDuJour(req,res) {

    let Dessert = require("../models/dessert");

    Dessert.findOne({duJour : "true"})
    .then((foundDessert) => {
        res.status(200).json(foundDessert);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteDessert(req, res) {

    let Dessert = require("../models/dessert");

    Dessert.findOneAndRemove({_id : req.params.id})
    .then((deletedDessert) => {
        res.status(200).json(deletedDessert);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.create = createDessert;
module.exports.reads = readDesserts;
module.exports.read = readDessert;
module.exports.delete = deleteDessert;
//module.exports.update = updateDessert;
module.exports.duJour = duJour;
module.exports.getDuJour = getDuJour;