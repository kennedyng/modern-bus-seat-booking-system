const express = require("express");
const router = express();

router.get('/login', (req, res) => {
    res.send("Passenger Login In");
})


router.post('/register', (req, res) => {
    res.send("Passenger Register In");
})

router.put('/edit', (req, res) => {
    res.send("Passenger Edit Details");
})
router.delete('/delete', (req, res) => {
    res.send("delete passenger account");
})

module.exports = router;