const express = require("express");
const receiptController = require("../controllers/receipt")
const router = express();
const checkAuth = require('../middlewares/auth-check')



router.get('/view', checkAuth, receiptController.getPassengerReceipts)
router.get('/view/all', checkAuth, receiptController.getOperatorRecipts )
router.get('/view/one/:receiptId', receiptController.getReceipt)
router.post('/create',checkAuth, receiptController.createReceipt )

module.exports=router