const express = require("express");
const router = express();
const checkAuth = require("../middlewares/auth-check");

const passengerProfileController = require("../controllers/passenger/profile");

router.get('/view', checkAuth, passengerProfileController.getProfile )
router.patch('/update',checkAuth, passengerProfileController.updateProfile)
router.delete('/delete', checkAuth, passengerProfileController.deleteProfile)

module.exports = router;