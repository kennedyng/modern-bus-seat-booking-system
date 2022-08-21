const express = require("express");
const router = express();

const passengerProfileController = require("../controllers/passenger/profile");

router.get('/view/:passengerId', passengerProfileController.getProfile )
router.patch('/update/:passengerId', passengerProfileController.updateProfile)
router.delete('/delete/:passengerId', passengerProfileController.deleteProfile)

module.exports = router;