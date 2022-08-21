const express = require("express");
const operatorController = require("../controllers/operator/auth");

const router = express();


router.get('/login', operatorController.logIn)

router.post('/register', operatorController.register )




module.exports = router;