const express = require("express");
const router = express();
const jwt = require("jsonwebtoken");


router.get('/login', (req, res) => {
    res.send("Operator Login In");
    
})


router.post('/register', (req, res) => {
    res.send("Operator Register In");
})


router.put('/edit', (req, res) => {
    res.send("Operator Edit account ");
})

router.delete('/delete', (req, res) => {
    res.send("Operator Delete Account");
})





module.exports = router;