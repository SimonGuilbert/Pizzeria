function createBoisson(req, res) {
    let Boisson = require('../models/boisson');
    let newBoisson = Boisson ({
        name : req.body.name,
        price : req.body.price,
        desc : req.body.desc,
        duJour : 'false'
    });
  
    newBoisson.save()
    .then((savedBoisson) => {

        //send back the created Boisson
        res.json(savedBoisson);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readBoissons(req, res) {

    let Boisson = require("../models/boisson");

    Boisson.find({})
    .then((boissons) => {
        res.status(200).json(boissons);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readBoisson(req, res) {

    let Boisson = require("../models/boisson");

    Boisson.find({_id : req.params.id})
    .then((boisson) => {
        res.status(200).json(boisson);
    }, (err) => {
        res.status(500).json(err);
    });
 }
/*
function updateBoisson(req, res) {

    let Boisson = require("../models/boisson");

    Boisson.findByIdAndUpdate({_id: req.params.id}, 
        {name : req.body.name, 
        price : req.body.price}, 
        {new : true})
    .then((updatedBoisson) => {
        res.status(200).json(updatedBoisson);
    }, (err) => {
        res.status(500).json(err);
    });
}
*/

function duJour(req,res) {

    let Boisson = require("../models/boisson");

    Boisson.updateOne({ duJour: "true" }, 
        {duJour: "false"})
    .then((updatedBoisson) => {
        res.status(200).json(updatedBoisson);
    }, (err) => {
        res.status(500).json(err);
    });

    Boisson.findByIdAndUpdate({_id: req.params.id},
        {duJour : "true"})
    .then((updatedBoisson) => {
        res.status(200).json(updatedBoisson);
    }, (err) => {
        res.status(500).json(err);
    });
}

function getDuJour(req,res) {

    let Boisson = require("../models/boisson");

    Boisson.findOne({duJour : "true"})
    .then((foundBoisson) => {
        res.status(200).json(foundBoisson);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteBoisson(req, res) {

    let Boisson = require("../models/boisson");

    Boisson.findOneAndRemove({_id : req.params.id})
    .then((deletedBoisson) => {
        res.status(200).json(deletedBoisson);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.create = createBoisson;
module.exports.reads = readBoissons;
module.exports.read = readBoisson;
module.exports.delete = deleteBoisson;
//module.exports.update = updateBoisson;
module.exports.duJour = duJour;
module.exports.getDuJour = getDuJour;