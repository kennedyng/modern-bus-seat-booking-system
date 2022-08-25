const express = require("express");
const router = express();
const tripController = require("../controllers/trip");
const checkAuth = require("../middlewares/auth-check");
const {  paginateData } = require('../middlewares/pagination')
const { operatorTripsQuery } = require("../controllers/trip/query")



router.get('/view/all/:operatorId', paginateData(operatorTripsQuery))

router.get('/view/:starting_point/:ending_point/:operatorId', tripController.getTrip)
router.get('/view/one/:tripId', tripController.getOneTrip)
router.post('/create', checkAuth, tripController.createTrip)
router.patch('/update/:tripId', checkAuth,  tripController.updateTrip )
router.delete('/delete/:tripId',checkAuth, tripController.deleteTrip)
module.exports = router;





