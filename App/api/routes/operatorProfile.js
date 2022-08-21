const express = require("express");
const router = express();
const operatorProfileController = require("../controllers/operator/profile");

router.get('/view/all', operatorProfileController.getAllOperatorProfiles)
router.get('/view/:operatorId', operatorProfileController.getOperatorProfile )
router.patch('/update/:operatorId', operatorProfileController.updateOperatorProfile )


module.exports = router;