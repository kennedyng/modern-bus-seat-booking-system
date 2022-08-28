
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


module.exports = {

    getProfile: async(req, res) => {
        try {
            const { passengerId } = req.params;
            data = await prisma.passengerProfile.findUnique({
                where: {
                    passengerId: Number(req.userData.passengerId)
                },
               include: {
                   passenger: {
                       select: {
                           phone_number: true
                       }
                   }
               }
             
            });
            res.status(200).json({
                data
            })
        } catch (error) {
            res.sendStatus(500).json({error});
        }
    },

    updateProfile: async (req, res) => {
        try {
            updateProfile = await prisma.passengerProfile.update({
                data: {
                        first_name: req.body.first_name,
                        middle_name: req.body.middle_name,
                        last_name:  req.body.last_name,
                        nrc: req.body.nrc,
                        address: req.body.address,
                        
                },
                where: {
                    passengerId: Number(req.userData.passengerId)
                }
            })
            res.status(201).json({
                updateProfile,
                message: "updated successfully"
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                error
            })
        }
    },

    deleteProfile: async (req, res) => {
        try {
            const deleteProfile = await prisma.passenger.delete({
                where: {
                    id: Number(req.userData.passengerId)
                }
            })
            res.status(200).json({
                deleteProfile,
                message:"deleted successfully"
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                error,
            })
        }
    }

}