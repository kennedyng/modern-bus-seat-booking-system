const express = require("express");
const receiptController = require("../controllers/receipt")
const router = express();



router.get('/view/:passengerId', receiptController.getPassengerReceipts)
router.get('/view/all/:operatorId', receiptController.getOperatorRecipts )
router.post('/create', receiptController.createReceipt )




module.exports=router