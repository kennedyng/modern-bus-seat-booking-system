const passengerReceiptsQuery = {
    totalQuery: ( req ) => {
        return {
            select: {
                id: true
            },
            where: {
                passengerId: Number(req.userData.passengerId)
            }
        }
    },
    dataQuery: ( req ) => {
        return {
            where: {
                passengerId: Number(req.userData.passengerId)
            },
            include: {
                Trip: {
                    include: {
                        Bus: true,
                        Route: true
                    }
                }
            },
            orderBy: {
                time_created: 'desc'
            }
         }
    }, 
    intialDataSize: 5,
    model: "receipt"
}

const operatorReceiptsQuery = {
    totalQuery: ( req ) => {
        return {
            select: {
                id: true
            },
            where: {
                Trip: {
                    operatorId: Number(req.userData.operatorId)
                }
            }
            
        }
    },
    dataQuery: ( req ) => {
        return {
            where: {
                Trip: {
                    operatorId: Number(req.userData.operatorId)
                }
            },
            include: {
                Trip: {
                    include: {
                        Route: true,
                        Bus: true
                    }
                }
            }
        }
    }, 
    intialDataSize: 5,
    model: "receipt"
}

module.exports = {
    passengerReceiptsQuery,
    operatorReceiptsQuery
}