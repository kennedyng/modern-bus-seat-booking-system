const express = require("express");
const { PrismaClient } = require('@prisma/client');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const router = express();

const prisma = new PrismaClient();

router.get('/login', async(req, res) => {
    try {
     
        const operator = await prisma.operator.findFirst({
            where: {
                email: req.body.email
            }
        })
        if(operator){
            bcrypt.compare( req.body.password, operator.password, (err, result)=> {
               if(err){
                   return res.status(500).json({ message: "authorization failed"})
               }else{
                   const token = jwt.sign({
                       operatorId: operator.id,
                       email: operator.email
                   }, 
                   process.env.JWT_KEY,
                   
                   {
                       expiresIn: "1h"
                   })
                
                   return res.status(201).json({message: "authorization sucessfull", token})
               }
            })
        
        }else{
            res.status(500).json(console.error)
        }
        
    } catch (error) {
        console.log(error)
        
    }
    
})


router.post('/register',  async(req, res) => {
    try {
        const userExist = await prisma.operator.count({
            where: {
                email: req.body.email
            }
        })

        if(userExist){
            return res.status(409).json({message: "Email is used"})
        }else{
            bcrypt.hash(req.body.password, 10, async(err, hash) => {
                if(err){
                    return res.status(500);
                }
                else{
                    const data = await prisma.operatorProfile.create({
                        data: {
                            company_name: req.body.company_name,
                            motto: req.body.motto,
                            logo_pic: req.body.logo_pic,
                            operator: {
                                create: {
                                    password: hash,
                                    email: req.body.email
                                }
                            }, 

                        }
                    })
                    res.status(201).json({message: "operator registered"})
                }
            })
        }
        
    } catch (error) {
        res.status(500).json(error)
        
    }
    
})




module.exports = router;