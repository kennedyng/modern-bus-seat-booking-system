const startingPointsQuery = {
    totalQuery: ( req ) => {
        return {
            where: {
                operatorId: Number(req.params.operatorId)
            },
            select: {
                id: true
            },
            distinct:['starting_point']
        }
    },
    dataQuery: ( req ) => {
        return {
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
         }
    }, 
    intialDataSize: 5,
    model: "route"
}




const endingPointsQuery = {
    totalQuery: ( req ) => {
        return {
            where: {
                operatorId: Number(req.params.operatorId),
                AND: {
                    starting_point: req.params.starting_point
                }
                
            },
            select: {
                id: true
            },
            distinct:['ending_point']
        }
    },
    dataQuery: ( req ) => {
        return {
            where: {
                operatorId: Number(req.params.operatorId),
                AND: {
                    starting_point: req.params.starting_point
                }
            },
            select: {
                ending_point: true,
            
            },
            orderBy:{
                ending_point:'asc'
            },
            distinct: ['ending_point'],
         }
    }, 
    intialDataSize: 5,
    model: "route"
}




const operatorRoutesQuery = {
    totalQuery: ( req ) => {
        return {
            where: {
                operatorId: Number(req.params.operatorId),
            },
        }
    },
    dataQuery: ( req ) => {
        return {
            where: {
                operatorId: Number(req.params.operatorId),
            },
        }
    }, 
    intialDataSize: 5,
    model: "route"
}
module.exports ={ 
    startingPointsQuery,
    endingPointsQuery,
    operatorRoutesQuery
}