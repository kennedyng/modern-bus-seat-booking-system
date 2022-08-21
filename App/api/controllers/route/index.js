const { PrismaClient } = require('@prisma/client');
const pagination = require("../../middlewares/pagination");
const prisma = new PrismaClient();


module.exports = {
    getStartingPoints:  async( req, res ) => {
        try{
            const totalItems = await prisma.route.findMany({
                where: {
                    operatorId: Number(req.params.operatorId)
                },
                select: {
                    id: true
                },
                distinct:['starting_point']
            })
    
            const { totalPages, skip, limit } = pagination.getPaginationVar({
                page: req.query.page,
                size: req.query.size,
                totalCount: totalItems.length
            })
    
    
            const startingPoints = await prisma.route.findMany({
                where: {
                    operatorId: Number(req.params.operatorId)
                },
                select: {
                    starting_point: true,
                
                },
                orderBy:{
                    starting_point:'asc'
                },
                distinct: ['starting_point'],
                skip: skip,
                take: limit
              
            });
    
            res.status(201).json({startingPoints, totalPages})
        }
        catch(error){
            res.status(500).json(error)
        }
    },

    getEndingPoints: async( req, res ) => {
        try{
            const totalItems = await prisma.route.findMany({
                where: {
                    operatorId: Number(req.params.operatorId),
                    AND: {
                        starting_point: req.params.starting_point
                    }
                    
                },
                select: {
                    id: true
                },
                distinct:['ending_point']
            })
    
            const { totalPages, skip, limit } = pagination.getPaginationVar({
                page: req.query.page,
                size: req.query.size,
                totalCount: totalItems.length
            });
    
            const endinPoints = await prisma.route.findMany({
                where: {
                    operatorId: Number(req.params.operatorId),
                    AND: {
                        starting_point: req.params.starting_point
                    }
                },
                select: {
                    ending_point: true,
                
                },
                orderBy:{
                    ending_point:'asc'
                },
                distinct: ['ending_point'],
                skip: skip,
                take: limit
            });
            res.status(201).json({endinPoints, totalPages})
        }
        catch(error){
           
            res.status(500).json(error)
        }
    
    },

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
                    operatorId: Number(req.body.operatorId)
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
    
            res.status(201).json({deleteRoute, message:"deleted successfully"})
        } catch (error) {
            res.status(500).json(error)   
        }
    }

}