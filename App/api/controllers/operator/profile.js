const { PrismaClient } = require('@prisma/client');
const pagination = require("../../middlewares/pagination");
const { path } = require('../../routes/trip');
const prisma = new PrismaClient();


module.exports= {

    getAllOperatorProfiles: async(req, res) => {
        try {
            const totalCount = await prisma.operatorProfile.count();
            const {limit, skip, totalPages } = pagination.getPaginationVar({
                page: req.query.page,
                size: req.query.size,
                totalCount
            });
            const data  = await prisma.operatorProfile.findMany({
                skip: skip, 
                take: limit,
            });
        res.status(201).json({data, totalPages})    
        } catch (error) {
            res.sendStatus(500).json(error)
            
        }
          
    },


    getOperatorProfile: async(req, res) => {
        try {
            const { operatorId } = req.params;
            data = await prisma.operatorProfile.findUnique({
                where: {
                    operatorId: Number(req.userData.operatorId)
                },
               include: {
                   operator: {
                       select: {
                           email: true
                       }
                   }
               }
             
            });
            res.status(200).json({
                data
            })
        } catch (error) {
            res.sendStatus(500);
        }
    },

    updateOperatorProfile: async (req, res) => {
        try {
            updateProfile = await prisma.operatorProfile.update({
                data: {
                    ...req.body
                },
                where: {
                    operatorId: Number(req.userData.operatorId)
                }
            })
            res.status(201).json({
                updateProfile,
                message: "updated successfully",
                userData: req.userData
            })
        } catch (error) {
            res.status(500).json({
                error
            })
        }
    }




}