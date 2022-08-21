
const { PrismaClient } = require('@prisma/client');
const pagination = require("../../middlewares/pagination");


const prisma = new PrismaClient();


module.exports = {

    getPassengerReceipts:  async( req, res) => {
        try {
    
            const totalItems = await prisma.receipt.count({
                where: {
                    passengerId: Number(req.params.passengerId)
                }
            })
    
            const {totalPages, skip, limit } = pagination.getPaginationVar({
                page: req.query.page,
                size: req.query.size,
                totalCount: totalItems
            })
            const receiptData = await prisma.receipt.findMany({
                where: {
                    passengerId: Number(req.params.passengerId)
                },
                include: {
                    Trip: {
                        include: {
                            Bus: true,
                            Route: true
                        }
                    }
                },
                orderBy: {
                    time_created: 'desc'
                },
                skip:skip,
                take: limit
    
            })
    
            res.status(201).json({receiptData, totalPages})
        } catch (error) {
            res.status(500).json(error)
            
        }
    },

    getOperatorRecipts: async( req, res) => {
        try {
    
            const totalItems = await prisma.receipt.count({
                where: {
                    Trip: {
                        operatorId: Number(req.params.operatorId)
                    }
                }
            })
    
            const {totalPages, skip, limit } = pagination.getPaginationVar({
                page: req.query.page,
                size: req.query.size,
                totalCount: totalItems
            })
            const data = await prisma.receipt.findMany({
                where: {
                    Trip: {
                        operatorId: Number(req.params.operatorId)
                    }
                },
                include: {
                    Trip: {
                        include: {
                            Route: true,
                            Bus: true
                        }
                    }
                },
                skip: skip,
                take: limit
            })
    
            res.status(201).json({data, totalPages})
            
        } catch (error) {
            res.status(500).json(error)
            
        }
    },

    createReceipt: async( req, res) => {
        try {
            const data = await prisma.receipt.create({
                data: {
                    method_of_pay: req.body.method_of_pay,
                    transaction_id: req.body.transaction_id,
                    amount_payed: parseFloat(req.body.amount_payed),
                    passengerId: Number(req.body.passengerId),
                    tripId: Number(req.body.tripId)
                }
            })
    
            res.status(201).json({ data, message: "created successfully"});
        } catch (error) {
            res.status(500).json(error)
            
        }
    }



}