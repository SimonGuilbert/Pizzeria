//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/pizza.js');

//CREATE
router.post("/createPizza", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/pizzas", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/pizza/:name", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/pizza/:id", (req, res) => {
    
    controller.update(req, res);

});

//DELETE
router.delete("/pizza/:name", (req, res) => {
    
    controller.delete(req, res);

});

module.exports = router;