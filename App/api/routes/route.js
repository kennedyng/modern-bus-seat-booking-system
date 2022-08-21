const express = require("express");
const { PrismaClient } = require('@prisma/client');
const pagination = require("../middlewares/pagination");

const routeController = require("../controllers/route")
const router = express();

const prisma = new PrismaClient();

router.get('/starting_points/:operatorId', routeController.getStartingPoints )
router.get('/ending_points/:operatorId/:starting_point', routeController.getEndingPoints)
router.get('/view/one/:routeId', routeController.getRoute )


router.get('/view/all/:operatorId', routeController.getOperatorRoutes )

router.post('/create', routeController.createRoute )


//fare is madatory
router.patch('/update/:routeId/', routeController.updateRoute )

router.delete('/delete/:routeId', routeController.deleteRoute)





module.exports = router;





module.exports = router;