function createPizza(req, res) {
    let Pizza = require('../models/pizza');
    let newPizza = Pizza ({
        name : req.body.name,
        price : req.body.price
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

    Pizza.find({name : req.params.name})
    .then((pizza) => {
        res.status(200).json(pizza);
    }, (err) => {
        res.status(500).json(err);
    });
 }

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

function deletePizza(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.findOneAndRemove({name : req.params.name})
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
module.exports.update = updatePizza;