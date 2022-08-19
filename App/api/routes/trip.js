const express = require("express");
const { PrismaClient } = require('@prisma/client');
const pagination = require("../middlewares/pagination");
const router = express();

const prisma = new PrismaClient();




router.get('/view/all/:operatorId', async(req, res) => {
    try {
        const totalCount =  await prisma.trip.count({
            where: {
                operatorId: Number(req.params.operatorId)
            }
        })

        const { limit, skip, totalPages } = pagination.getPaginationVar({
            page: req.query.page,
            size: req.query.size,
            totalCount
        })
        const data = await prisma.trip.findMany({
            where: {
                operatorId: Number(req.params.operatorId),
            },
            orderBy: {
                departing_time: "desc"

            },
            include: {
                Route: true,
                Bus: true
            },
            skip: skip,
            take: limit
        })
        res.status(201).json({data, totalPages})
    } catch (error) {
        res.status(500).json({error})
        
    }
    
})

router.get('/view/:starting_point/:ending_point', async(req, res) => {
    try {
       // get trip based on starting point and ending point
        console.log("data", data);
          
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
        
    }
    
})

router.post('/create', async(req, res) => {
    try {
        const createTrip = await prisma.trip.create({
            data: {
                departing_time: req.body.departing_time,
                busId: parseInt(req.body.busId),
                routeId: parseInt(req.body.routeId),
                operatorId: parseInt(req.body.operatorId)
            }
        })
        res.status(201).json({createTrip, message: "created successfully"})
    } catch (error) {

        console.log("eeror", error)
        res.status(500).json(error)
        
    }
})
router.patch('/update/:tripId', async(req, res) => {
    try {
        const updateTrip = await prisma.trip.update({
            data: {
                departing_time: req.body.departing_time,
                busId: Number(req.body.busId)
            },
            where: {
                id: Number(req.params.tripId)
            }
        })
        res.status(201).json({updateTrip, message: "updated successfully"});
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
        
    }
})

router.delete('/delete/:tripId', async(req, res) => {
    try {
        const deleteTrip = await prisma.trip.delete({
            where: {
                id: Number(req.params.tripId)
            }
        })
        res.status(201).json({deleteTrip, message: "deleted successfully"})
    } catch (error) {
        res.status(500).json(error);
        
    }
})
module.exports = router;





module.exports = router;