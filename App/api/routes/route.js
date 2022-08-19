const express = require("express");
const { PrismaClient } = require('@prisma/client');
const pagination = require("../middlewares/pagination");


const router = express();

const prisma = new PrismaClient();



router.get('/starting_points/:operatorId', async( req, res ) => {
    try{
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
          
        });

        res.status(201).json({startingPoints})
    }
    catch(error){
        console.log(error)
        res.status(500).json(error)

    }

})


router.get('/view/all/:operatorId', async(req, res) => {
    try {
        const data = await prisma.trip.findMany({
            
            where: {
                operatorId: Number(req.params.operatorId),
            },
            include: {
                Route: true,
                Bus: true
            }
        })
        res.status(201).json({data})
        console.log(data);
    } catch (error) {
        res.status(500).json({error})
        
    }
    
})


router.post('/register', (req, res) => {
    res.send("Operator Register In");
})


router.put('/edit', (req, res) => {
    res.send("Operator Edit account ");
})

router.delete('/delete', (req, res) => {
    res.send("Operator Delete Account");
})





module.exports = router;





module.exports = router;