const { PrismaClient } = require('@prisma/client');
const pagination = require("../../middlewares/pagination");
const prisma = new PrismaClient();


module.exports = {
    getOperatorBuses: async(req, res) => {
        try {
            const totalBuses =  await prisma.bus.count({
                where: {
                    operatorId: Number(req.params.operatorId)
                }
            })
    
            const { skip, limit, totalPages } = pagination.getPaginationVar({
                page: req.query.page,
                size: req.query.size,
                totalCount: totalBuses
            });
            const data = await prisma.bus.findMany({
                where: {
                    operatorId: Number(req.params.operatorId)
                },
                skip: skip,
                take: limit
            })
            res.status(201).json({data, totalPages})
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getBus: async(req, res) => {
        try {
            const data = await prisma.bus.findUnique({
                where: {
                    id: Number(req.params.busId)
                }
            })
    
            res.status(201).json(data)
    
        } catch (error) {
            res.status(500).json(error);
        }
    },

    createBus: async(req, res) => {
        try {
            const data = await prisma.bus.create({
                data: {
                    plate_number: req.body.plate_number,
                    total_seat: parseInt(req.body.total_seat),
                    operatorId: Number(req.body.operatorId)
                    
                }
            })
    
            res.status(201).json({data, message:"successfully created"});
        } catch (error) {
            res.status(500).json(error);
            
        }
    },

    updateBus: async(req, res) => {
        try {
            const data = await prisma.bus.update({
                data: {
                    plate_number: req.body.plate_number,
                    total_seat: parseInt(req.body.total_seat),
                    operatorId: Number(req.body.operatorId)
                },
                where: {
                    id: Number(req.params.busId)
                }
            })
    
            res.status(201).json({data, message:"successfully updated"});
        } catch (error) {
            res.status(500).json(error);
            
        }
    },

    deleteBus: async(req, res) => {
        try {
            const data = await prisma.bus.delete({
                where: {
                    id: Number(req.params.busId)
                }
            })
            res.status(201).json({data, message:"successfully deleted"});
        } catch (error) {
            res.status(500).json(error);
        }
    }





}