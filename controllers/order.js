function createOrder(req, res) {
    let Order = require('../models/order');
    let newOrder = Order ({
        dateOrder: req.body.dateOrder,
        description : req.body.description,
        client : req.body.client
    });
  
    newOrder.save()
    .then((savedOrder) => {

        //send back the created Order
        res.json(savedOrder);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readOrders(req, res) {

    let Order = require("../models/order");

    Order.find({})
    .then((orders) => {
        res.status(200).json(orders);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readOrder(req, res) {

    let Order = require("../models/order");

    Order.findById({_id : req.params.id})
    .then((order) => {
        res.status(200).json(order);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function deleteOrder(req, res) {

    let Order = require("../models/order");

    Order.findOneAndRemove({_id : req.params.id})
    .then((deletedOrder) => {
        res.status(200).json(deletedOrder);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function payed(req, res) {

    let Order = require("../models/order");

    Order.findByIdAndUpdate({_id: req.params.id}, 
        {is_payed : true}, 
        {new : true})
    .then((updatedOrder) => {
        res.status(200).json(updatedOrder);
    }, (err) => {
        res.status(500).json(err);
    });

}

function not_payed(req, res) {

    let Order = require("../models/order");

    Order.findByIdAndUpdate({_id: req.params.id}, 
        {is_payed : false}, 
        {new : true})
    .then((updatedOrder) => {
        res.status(200).json(updatedOrder);
    }, (err) => {
        res.status(500).json(err);
    });

}

module.exports.create = createOrder;
module.exports.reads = readOrders;
module.exports.read = readOrder;
module.exports.delete = deleteOrder;
module.exports.payed = payed;
module.exports.not_payed = not_payed;