const express = require("express");
const routeController = require("../controllers/route")
const router = express();
const checkAuth = require("../middlewares/auth-check");
const { startingPointsQuery, endingPointsQuery, operatorRoutesQuery } = require("../controllers/route/query")
const {  paginateData } = require("../middlewares/pagination")

router.get('/starting_points/:operatorId', paginateData(startingPointsQuery)  )
router.get('/ending_points/:operatorId/:starting_point', paginateData(endingPointsQuery))
router.get('/view/one/:routeId', routeController.getRoute)
router.get('/view/all/:operatorId', paginateData(operatorRoutesQuery) )
router.post('/create', checkAuth,  routeController.createRoute )
router.patch('/update/:routeId/', checkAuth, routeController.updateRoute )
router.delete('/delete/:routeId', checkAuth, routeController.deleteRoute)

module.exports = router;
