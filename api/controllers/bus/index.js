const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


module.exports = {
    
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
                    operatorId: Number(req.userData.operatorId)
                    
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
                    operatorId: Number(req.userData.operatorId)
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
            res.status(200).json({data, message:"successfully deleted"});
        } catch (error) {
            res.status(500).json(error);
        }
    }





}