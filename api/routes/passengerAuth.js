const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const router = express();


const passengerAuthController = require("../controllers/passenger/auth")

router.get('/login', passengerAuthController.logIn)
router.post('/register', passengerAuthController.register )




module.exports = router;