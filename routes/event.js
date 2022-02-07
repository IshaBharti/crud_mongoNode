var express = require('express');
var router = express.Router();
var connections=require("../connections/db")
var usermodels=require("../model/eventModels")
var eventController=require("../controllers/eventController")
/* GET users listing. */
router.get('/eventName', eventController.eventName)
router.post('/insertEvent', eventController.insertEvent)
router.get('/getEvent',eventController.eventAddress)
router.put('/updateEvent/:id',eventController.updateEvent)
router.get('/singleEvent/:id',eventController.singleEvent)
router.get('/deleteEvent/:id',eventController.deleteEvent)
router.post('/dateEvent',eventController.eventdate)
    

module.exports = router;
