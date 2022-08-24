const express = require("express");
const router = express();
const operatorProfileController = require("../controllers/operator/profile");
const checkAuth = require("../middlewares/auth-check")
router.get('/view/all', operatorProfileController.getAllOperatorProfiles)
router.get('/view',checkAuth, operatorProfileController.getOperatorProfile )
router.patch('/update', checkAuth, operatorProfileController.updateOperatorProfile )


module.exports = router;