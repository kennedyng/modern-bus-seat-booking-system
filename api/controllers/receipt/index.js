
const { PrismaClient } = require('@prisma/client');
const pagination = require("../../middlewares/pagination");


const prisma = new PrismaClient();




module.exports = {

    getReceipt:  async( req, res) => {
        try {
            const receiptData = await prisma.receipt.findUnique({
                where: {
                    id: Number(req.params.receiptId)
                },
                include: {
                    Trip: {
                        include: {
                            Bus: true,
                            Route: true
                        }
                    }
                }
    
            })
    
            res.status(201).json(receiptData)
        } catch (error) {
            res.status(500).json({error})
            
        }
    },

    createReceipt: async( req, res) => {
        try {
            const data = await prisma.receipt.create({
                data: {
                    method_of_pay: req.body.method_of_pay,
                    transaction_id: req.body.transaction_id,
                    amount_payed: parseFloat(req.body.amount_payed),
                    passengerId: Number(req.userData.passengerId),
                    tripId: Number(req.body.tripId)
                }
            })
    
            res.status(201).json({ data, message: "created successfully"});
        } catch (error) {
            res.status(500).json(error)
            
        }
    }



}