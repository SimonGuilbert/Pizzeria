function createClient(req, res) {
    let Client = require('../models/client');
    let newClient = Client ({
        lastname : req.body.lastname,
        firstname : req.body.firstname,
        email : req.body.email,
        phoneNumber : req.body.phoneNumber
    });
  
    newClient.save()
    .then((savedClient) => {

        //send back the created Client
        res.json(savedClient);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readClients(req, res) {

    let Client = require("../models/client");

    Client.find({})
    .then((clients) => {
        res.status(200).json(clients);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readClient(req, res) {

    let Client = require("../models/client");

    Client.find({phoneNumber : req.params.phoneNumber})
    .then((client) => {
        res.status(200).json(client);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateClient(req, res) {

    let Client = require("../models/client");

    Client.findByIdAndUpdate({_id: req.params.id}, 
        {lastname : req.body.lastname, 
        firstname : req.body.firstname,
        email : req.body.email,
        phoneNumber : req.body.phoneNumber}, 
        {new : true})
    .then((updatedClient) => {
        res.status(200).json(updatedClient);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteClient(req, res) {

    let Client = require("../models/client");

    Client.findOneAndRemove({phoneNumber : req.params.phoneNumber})
    .then((deletedClient) => {
        res.status(200).json(deletedClient);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.create = createClient;
module.exports.reads = readClients;
module.exports.read = readClient;
module.exports.delete = deleteClient;
module.exports.update = updateClient;