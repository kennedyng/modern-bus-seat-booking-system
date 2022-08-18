const express = require("express");
const { PrismaClient } = require('@prisma/client');

const router = express();

const prisma = new PrismaClient();

router.get('/view/:operatorId', async(req, res) => {
    try {
        const { operatorId } = req.params;
        data = await prisma.operatorProfile.findUnique({
            where: {
                operatorId: Number(operatorId)
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
})


router.post('/create/:operatorId', async(req, res) => {
    try {
       const createProfile = await prisma.operatorProfile.create({
           data: {
               ...req.body,
               operatorId : Number(req.params.operatorId)
               
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


router.patch('/update/:operatorId',async (req, res) => {
    try {
        updateProfile = await prisma.operatorProfile.update({
            data: {
                ...req.body
            },
            where: {
                operatorId: Number(req.params.operatorId)
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

router.delete('/delete/:operatorId', async (req, res) => {
    try {
        const deleteProfile = await prisma.operatorProfile.delete({
            where: {
                operatorId: Number(req.params.operatorId)
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