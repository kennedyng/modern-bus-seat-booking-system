const express = require("express");
const router = express();
const operatorProfileController = require("../controllers/operator/profile");
const checkAuth = require("../middlewares/auth-check")
const {  paginateData }  = require("../middlewares/pagination");
const { PrismaClient } = require('@prisma/client');
const { operatorsProfilesQuery } = require("../controllers/operator/query");


router.get('/view/all', paginateData(operatorsProfilesQuery))
router.get('/view',checkAuth, operatorProfileController.getOperatorProfile )
router.patch('/update', checkAuth, operatorProfileController.updateOperatorProfile )


module.exports = router;