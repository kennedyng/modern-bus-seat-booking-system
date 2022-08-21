const { PrismaClient } = require('@prisma/client');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

module.exports = {

    logIn: async(req, res) => {
        try {
         
            const passenger = await prisma.passenger.findFirst({
                where: {
                    phone_number: req.body.phone_number
                }
            })
            if(passenger){
                bcrypt.compare( req.body.password, passenger.password, (err, result)=> {
                   if(err){
                       return res.status(500).json({ message: "authorization failed"})
                   }else{
                       const token = jwt.sign({
                           passengerId: passenger.id,
                           phone_number: passenger.phone_number
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
        
    },


    register: async(req, res) => {
        try {
            const userExist = await prisma.passenger.count({
                where: {
                    phone_number: req.body.phone_number
                }
            })
    
            if(userExist){
                return res.status(409).json({message: "phone number is used"})
            }else{
                bcrypt.hash(req.body.password, 10, async(err, hash) => {
                    if(err){
                        return res.status(500);
                    }
                    else{
                        const data = await prisma.passengerProfile.create({
                            data: {
                                first_name: req.body.first_name,
                                middle_name: req.body.middle_name,
                                last_name: req.body.last_name,
                                nrc: req.body.nrc,
                                address: req.body.address,
                                passenger: {
                                    create: {
                                        password: hash,
                                        phone_number: req.body.phone_number
                                    }
                                }, 
    
                            }
                        })
                        res.status(201).json({message: "passenger registered"})
                    }
                })
            }
            
        } catch (error) {
            res.status(500).json(error)
            
        }
        
    }
    
}