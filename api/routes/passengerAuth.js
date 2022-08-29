const express = require("express");

const router = express();


const passengerAuthController = require("../controllers/passenger/auth")

router.post('/login', passengerAuthController.logIn)
router.post('/register', passengerAuthController.register )




module.exports = router;