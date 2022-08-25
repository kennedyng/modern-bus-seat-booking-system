const { PrismaClient } = require('@prisma/client');
const pagination = require("../../middlewares/pagination");

const prisma = new PrismaClient();


module.exports= {

    getAllOperatorProfiles: async(req, res, next) => {
       try {
           const total = await prisma.passengerProfile.count();
           const data = await prisma.passengerProfile.findMany()
           req.modelData = {total, data}
           next();
       } catch (error) {
           res.status(500).json({error})
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