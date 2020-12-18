//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/boisson.js');

//CREATE
router.post("/createBoisson", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/boissons", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/boisson/:id", (req, res) => {
    
    controller.read(req, res);

});
/*
//UPDATE
router.put("/boisson/:id", (req, res) => {
    
    controller.update(req, res);

});
*/

//DU JOUR 
router.post("/boisson/:id", (req, res) => {

    controller.duJour(req,res);
    
});

//GET DU JOUR
router.get("/boissonDuJour", (req,res) => {
    controller.getDuJour(req,res);
});

//DELETE
router.delete("/boisson/:id", (req, res) => {
    
    controller.delete(req, res);

});

module.exports = router;