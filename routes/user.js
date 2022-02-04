var express = require('express');
var router = express.Router();
var connections=require("../connections/db")
var usermodels=require("../model/userModel")
var userControllers=require("../controllers/userControllers")
/* GET users listing. */
router.get('/getUser', userControllers.getUser)
router.post('/insertUser', userControllers.insertdata)
router.get('/getDoc',userControllers.getDocument)
router.post('/updateDoc/:id',userControllers.updateDocument)
router.get('/singleData/:id',userControllers.singleDocument)
router.get('/deleteData/:id',userControllers.deleteDocument)



module.exports = router;
