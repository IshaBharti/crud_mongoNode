var express = require('express');
var router = express.Router();
var connections=require("../connections/db")
var usermodels=require("../model/userModel")
var adminController=require("../controllers/adminController");
const getadmin = require('../controllers/adminController');
const { insertdata } = require('../controllers/userControllers');
/* GET users listing. */
router.post('/getAdmin', adminController,getadmin)

module.exports = router;
