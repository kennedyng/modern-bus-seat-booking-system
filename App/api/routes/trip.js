const express = require("express");
const router = express();
const tripController = require("../controllers/trip");
const checkAuth = require("../middlewares/auth-check");


router.get('/view/all/:operatorId', tripController.getOperatorTrips )
router.get('/view/:starting_point/:ending_point/:operatorId', tripController.getTrip)
router.get('/view/one/:tripId', tripController.getOneTrip)

router.post('/create', checkAuth, tripController.createTrip)
router.patch('/update/:tripId', checkAuth,  tripController.updateTrip )
router.delete('/delete/:tripId',checkAuth, tripController.deleteTrip)
module.exports = router;





