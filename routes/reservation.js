//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/reservation');

//CREATE
router.post("/createReservation", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/reservations", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/reservation/:id", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/reservation/:id", (req, res) => {
    
    controller.update(req, res);

});

//DELETE
router.delete("/reservation/:id", (req, res) => {
    
    controller.delete(req, res);

});

module.exports = router;