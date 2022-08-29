const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {


    getOneTrip:  async(req, res) => {
     try {
         const data = await prisma.trip.findUnique({
             where: {
                 id: Number(req.params.tripId)
             },
             include: {
                 Route: true,
                 Bus: true,
                 Operator: {
                     select: {
                         email: true
                     }
                 }

             }
         })

         res.send(data)
     } catch (error) {
         console.log(error)
         res.status(500).json(error);
         
     }
    },






    createTrip: async(req, res) => {
        try {
            const createTrip = await prisma.trip.create({
                data: {
                    departing_time: req.body.departing_time,
                    busId: parseInt(req.body.busId),
                    routeId: parseInt(req.body.routeId),
                    operatorId: parseInt(req.userData.operatorId)
                }
            })
            res.status(201).json({createTrip, message: "created successfully"})
        } catch (error) {
            res.status(500).json(error)  
        }
    },





    updateTrip: async(req, res) => {
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
    },




    
    deleteTrip: async(req, res) => {
        try {
            const deleteTrip = await prisma.trip.delete({
                where: {
                    id: Number(req.params.tripId)
                }
            })
            res.status(200).json({deleteTrip, message: "deleted successfully"})
        } catch (error) {
            res.status(500).json(error);
            
        }
    }

}