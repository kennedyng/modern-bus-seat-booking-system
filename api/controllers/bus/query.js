
const operatorBusesQuery = {
    totalQuery: ( req ) => {
        return {
            select: {
                id: true
            },
            where: {
                operatorId: req.userData.operatorId
            }
        }
    },
    dataQuery: ( req ) => {
        return { 
            where: {
                operatorId: req.userData.operatorId
            }

        }
    }, 
    intialDataSize: 5,
    model: "bus"
}




module.exports = {
    operatorBusesQuery
    
}