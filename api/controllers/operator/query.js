const operatorsProfilesQuery = {
    totalQuery: ( req ) => {
        return {
            select: {
                id: true
            }
        }
    },
    dataQuery: ( req ) => {
        return {
            include: {
                operator: {
                    select: {
                        email: true
                    }
                }
            }
         }
    }, 
    intialDataSize: 5,
    model: "operatorProfile"
}

module.exports = {
    operatorsProfilesQuery
}