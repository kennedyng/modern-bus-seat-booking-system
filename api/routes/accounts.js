const express = require("express");
const accountsController = require("../controllers/accounts")
const router = express();
const checkAuth = require("../middlewares/auth-check");

router.get('/view',checkAuth, accountsController.getOperatorAccountsData);

module.exports = router;