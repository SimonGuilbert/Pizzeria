//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/order');

//CREATE
router.post("/createOrder", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/orders", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/order/:id", (req, res) => {
    
    controller.read(req, res);

});

//DELETE
router.delete("/order/:id", (req, res) => {
    
    controller.delete(req, res);

});

//COMPLETED
router.post("/order/:id/payed", (req, res) => {

    controller.payed(req, res);

});

router.post("/order/:id/not_payed", (req, res) => {

    controller.not_payed(req, res);

});

module.exports = router;