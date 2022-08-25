const operatorTripsQuery = {
    totalQuery: ( req ) => {
        return {
            where: {
                operatorId: Number(req.params.operatorId)
            },
            select: {
                id: true,
            }
            
        }
    },
    dataQuery: ( req ) => {
        return {
            where: {
                operatorId: Number(req.params.operatorId)
            },
            orderBy: {
                departing_time: "desc"

            },
            include: {
                Route: true,
                Bus: true
            },
        }
    }, 
    intialDataSize: 5,
    model: "trip"
}
const tripQuery = {
    totalQuery: ( req ) => {
        return {
            where: {
                Route: {
                    starting_point: req.params.starting_point
                }
            }
        }
    },
    dataQuery: ( req ) => {
        return {
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
        }
    }, 
    intialDataSize: 5,
    model: "trip"
}

module.exports = {
    operatorTripsQuery,
    tripQuery
}