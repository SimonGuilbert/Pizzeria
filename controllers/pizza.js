function createPizza(req, res) {
    let Pizza = require('../models/pizza');
    let newPizza = Pizza ({
        name : req.body.name,
        price : req.body.price,
        desc : req.body.desc,
        duJour : 'false'
    });
  
    newPizza.save()
    .then((savedPizza) => {

        //send back the created Pizza
        res.json(savedPizza);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readPizzas(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.find({})
    .then((pizzas) => {
        res.status(200).json(pizzas);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readPizza(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.find({_id : req.params.id})
    .then((pizza) => {
        res.status(200).json(pizza);
    }, (err) => {
        res.status(500).json(err);
    });
 }
/*
function updatePizza(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.findByIdAndUpdate({_id: req.params.id}, 
        {name : req.body.name, 
        price : req.body.price}, 
        {new : true})
    .then((updatedPizza) => {
        res.status(200).json(updatedPizza);
    }, (err) => {
        res.status(500).json(err);
    });
}
*/

function duJour(req,res) {

    let Pizza = require("../models/pizza");

    Pizza.updateOne({ duJour: "true" }, 
        {duJour: "false"})
    .then((updatedPizza) => {
        res.status(200).json(updatedPizza);
    }, (err) => {
        res.status(500).json(err);
    });

    Pizza.findByIdAndUpdate({_id: req.params.id},
        {duJour : "true"})
    .then((updatedPizza) => {
        res.status(200).json(updatedPizza);
    }, (err) => {
        res.status(500).json(err);
    });
}

function getDuJour(req,res) {

    let Pizza = require("../models/pizza");

    Pizza.findOne({duJour : "true"})
    .then((foundPizza) => {
        res.status(200).json(foundPizza);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deletePizza(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.findOneAndRemove({_id : req.params.id})
    .then((deletedPizza) => {
        res.status(200).json(deletedPizza);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.create = createPizza;
module.exports.reads = readPizzas;
module.exports.read = readPizza;
module.exports.delete = deletePizza;
//module.exports.update = updatePizza;
module.exports.duJour = duJour;
module.exports.getDuJour = getDuJour;