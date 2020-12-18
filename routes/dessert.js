//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/dessert.js');

//CREATE
router.post("/createDessert", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/desserts", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/dessert/:id", (req, res) => {
    
    controller.read(req, res);

});
/*
//UPDATE
router.put("/dessert/:id", (req, res) => {
    
    controller.update(req, res);

});
*/

//DU JOUR 
router.post("/dessert/:id", (req, res) => {

    controller.duJour(req,res);
    
});

//GET DU JOUR
router.get("/dessertDuJour", (req,res) => {
    controller.getDuJour(req,res);
});

//DELETE
router.delete("/dessert/:id", (req, res) => {
    
    controller.delete(req, res);

});

module.exports = router;