const express = require("express");
const router = express();


const tripController = require("../controllers/trip")

router.get('/view/all/:operatorId', tripController.getOperatorTrips )
router.get('/view/:starting_point/:ending_point/:operatorId', tripController.getTrip)
router.post('/create', tripController.createTrip)
router.patch('/update/:tripId', tripController.updateTrip )
router.delete('/delete/:tripId', tripController.deleteTrip)
module.exports = router;





module.exports = router;