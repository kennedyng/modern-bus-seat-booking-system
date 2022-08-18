const express = require("express");
const { PrismaClient } = require('@prisma/client');

const router = express();

const prisma = new PrismaClient();

router.get('/view/:passengerId', async(req, res) => {
    try {
        const { passengerId } = req.params;
        data = await prisma.passengerProfile.findUnique({
            where: {
                passengerId: Number(passengerId)
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
        res.sendStatus(500);
    }
})


router.post('/create/:passengerId', async(req, res) => {
    try {
       const createProfile = await prisma.passengerProfile.create({
           data: {
               ...req.body,
               passengerId : Number(req.params.passengerId)
               
            }
       })
       res.status(201).json({
           createProfile,
           message: "created successfully"
       })
    } catch (error) {
        
        res.status(500).json({
            error
        })
    }
})


router.patch('/update/:passengerId',async (req, res) => {
    try {
        updateProfile = await prisma.passengerProfile.update({
            data: {
                ...req.body
            },
            where: {
                passengerId: Number(req.params.passengerId)
            }
        })
        res.status(201).json({
            updateProfile,
            message: "updated successfully"
        })
    } catch (error) {
        res.status(500).json({
            error
        })
        
    }
})

router.delete('/delete/:passengerId', async (req, res) => {
    try {
        const deleteProfile = await prisma.passengerProfile.delete({
            where: {
                passengerId: Number(req.params.passengerId)
            }
        })
        res.status(201).json({
            deleteProfile,
            message:"deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            error,
        })
    }
})

module.exports = router;