const express = require("express");
const busController = require("../controllers/bus")
const checkAuth = require("../middlewares/auth-check");
const { paginateData } = require("../middlewares/pagination");
const { operatorBusesQuery } = require("../controllers/bus/query")
const router = express();

router.get('/view/all/',checkAuth, paginateData(operatorBusesQuery));
router.get("/view/one/:busId", busController.getBus );
router.post('/create', checkAuth, busController.createBus )
router.patch('/update/:busId',checkAuth, busController.updateBus )
router.delete('/delete/:busId', checkAuth, busController.deleteBus )
module.exports = router;