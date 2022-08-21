const express = require("express");
const { PrismaClient } = require('@prisma/client');
const pagination = require("../../middlewares/pagination");


const router = express();

const prisma = new PrismaClient();

module.exports = {

    getOperatorTrips: async(req, res) => {
        try {
            const totalCount =  await prisma.trip.count({
                where: {
                    operatorId: Number(req.params.operatorId)
                }
            })
            const { limit, skip, totalPages } = pagination.getPaginationVar({
                page: req.query.page,
                size: req.query.size,
                totalCount
            })
            const data = await prisma.trip.findMany({
                where: {
                    operatorId: Number(req.params.operatorId),
                },
                orderBy: {
                    departing_time: "desc"
    
                },
                include: {
                    Route: true,
                    Bus: true
                },
                skip: skip,
                take: limit
            })
            res.status(201).json({data, totalPages})
        } catch (error) {
            res.status(500).json({error})
            
        }
        
    },

    getTrip:  async(req, res) => {
        try {   
        const totalItems = await prisma.trip.findMany({
            where: {
                Route: {
                    starting_point: req.params.starting_point,
                    AND: {
                        ending_point: req.params.ending_point
                    }
            },
            operatorId: Number(req.params.operatorId)
            },
            include: {
                Route: true,
                Bus: true
            },
            orderBy: {
                departing_time: "desc"
            }
        })
    
        const {totalPages, skip, limit } =  pagination.getPaginationVar({
            page: req.query.page,
            size: req.query.size,
            totalCount: totalItems.length
        })
           const data = await prisma.trip.findMany({
               where: {
                  Route: {
                      starting_point: req.params.starting_point,
                      AND: {
                          ending_point: req.params.ending_point
                      }
                  },
                  operatorId: Number(req.params.operatorId)
               },
               include: {
                   Route: true,
                   Bus: true
               },
               orderBy: {
                   departing_time: "desc"
               },
               skip: skip,
               take: limit
           })
            res.status(201).json({data, totalPages}) 
        } catch (error) {
            res.status(500).json({error})
            
        }
        
    },
    createTrip: async(req, res) => {
        try {
            const createTrip = await prisma.trip.create({
                data: {
                    departing_time: req.body.departing_time,
                    busId: parseInt(req.body.busId),
                    routeId: parseInt(req.body.routeId),
                    operatorId: parseInt(req.body.operatorId)
                }
            })
            res.status(201).json({createTrip, message: "created successfully"})
        } catch (error) {
            res.status(500).json(error)  
        }
    },

    updateTrip: async(req, res) => {
        try {
            const updateTrip = await prisma.trip.update({
                data: {
                    departing_time: req.body.departing_time,
                    busId: Number(req.body.busId)
                },
                where: {
                    id: Number(req.params.tripId)
                }
            })
            res.status(201).json({updateTrip, message: "updated successfully"});
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
            
        }
    },
    deleteTrip: async(req, res) => {
        try {
            const deleteTrip = await prisma.trip.delete({
                where: {
                    id: Number(req.params.tripId)
                }
            })
            res.status(201).json({deleteTrip, message: "deleted successfully"})
        } catch (error) {
            res.status(500).json(error);
            
        }
    }

}