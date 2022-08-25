const express = require("express");
const receiptController = require("../controllers/receipt")
const router = express();
const checkAuth = require('../middlewares/auth-check')
const { paginateData } = require("../middlewares/pagination");
const { passengerReceiptsQuery, operatorReceiptsQuery } = require('../controllers/receipt/query');

router.get('/view', checkAuth, paginateData(passengerReceiptsQuery))
router.get('/view/all', checkAuth, paginateData(operatorReceiptsQuery) )
router.get('/view/one/:receiptId', receiptController.getReceipt)
router.post('/create',checkAuth, receiptController.createReceipt )

module.exports=router