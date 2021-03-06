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

router.get("/pizza/:id", (req, res) => {
    
    controller.read(req, res);

});
/*
//UPDATE
router.put("/pizza/:id", (req, res) => {
    
    controller.update(req, res);

});
*/

//DU JOUR 
router.post("/pizza/:id", (req, res) => {

    controller.duJour(req,res);
    
});

//GET DU JOUR
router.get("/pizzaDuJour", (req,res) => {
    controller.getDuJour(req,res);
});

//DELETE
router.delete("/pizza/:id", (req, res) => {
    
    controller.delete(req, res);

});

module.exports = router;