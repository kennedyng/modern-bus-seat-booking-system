const express = require("express");
const routeController = require("../controllers/route")
const router = express();
const checkAuth = require("../middlewares/auth-check");



router.get('/starting_points/:operatorId', routeController.getStartingPoints )
router.get('/ending_points/:operatorId/:starting_point', routeController.getEndingPoints)
router.get('/view/one/:routeId', routeController.getRoute )


router.get('/view/all/:operatorId', routeController.getOperatorRoutes )

router.post('/create', checkAuth,  routeController.createRoute )
router.patch('/update/:routeId/', checkAuth, routeController.updateRoute )
router.delete('/delete/:routeId', checkAuth, routeController.deleteRoute)

module.exports = router;
