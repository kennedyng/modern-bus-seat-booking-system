const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


module.exports = {
    

    getRoute : async(req, res) => {
        try {
            const data = await prisma.route.findUnique({
                
                where: {
                    id: Number(req.params.routeId),
                },
            })
            res.status(201).json({data})
        } catch (error) {
            res.status(500).json({error})        
        }
        
    },






    getOperatorRoutes: async(req, res) => {
        try {
            const data = await prisma.route.findMany({
                
                where: {
                    operatorId: Number(req.params.operatorId),
                },
            })
            res.status(201).json({data})
        } catch (error) {
            res.status(500).json({error})        
        }
        
    },



    createRoute: async (req, res) => {
        try {
            const createRoute = await prisma.route.create({
                data: {
                    starting_point: req.body.starting_point,
                    ending_point: req.body.ending_point,
                    fare: Number(req.body.fare),
                    operatorId: Number(req.userData.operatorId)
                }
            })
            res.status(201).json({createRoute, message: "created successfully"})
        } catch (error) {
            res.status(500).json(error)
        }
    },




    updateRoute: async (req, res) => {
        try {
            const updateRoute = await prisma.route.update({
                where: {
                    id: Number(req.params.routeId)
                },
                data: {
                    starting_point: req.body.starting_point,
                    ending_point: req.body.ending_point,
                    fare: Number(req.body.fare)
                }
            })
    
            res.status(201).json({updateRoute, message:"updated successfully"})
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
        
    },


    
    deleteRoute: async(req, res) => {
        try {
            const deleteRoute = await prisma.route.delete({
                where: {
                    id: Number(req.params.routeId)
                }
            })
    
            res.status(200).json({deleteRoute, message:"deleted successfully"})
        } catch (error) {
            res.status(500).json(error)   
        }
    }

}