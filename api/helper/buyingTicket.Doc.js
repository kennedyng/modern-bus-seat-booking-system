
const listOperators = {
    
    tags: ['buying ticket'],
   
}

const listOperatorStartingPoints = {
   
    tags: ['buying ticket'],
  
}


const listOperatorEndingPoints = {
    
    tags: ['buying ticket'],
  



}




const listOperatorTrips = {
    
    tags: ['buying ticket'],
    
}


const tripDetail = {
    tags: ['buying ticket'],


   
}


const listBoughtTickets = {

    tags: ['buying ticket'],
   
}


const tripReceiptDetail = {

    tags: ['buying ticket'],
   
}

const buyTicket = {
    tags: ['buying ticket'],
    
}



const buyingTicket = {
    "/operator/profile/all": {     
        get: listOperators
    },

    "/route/starting_point": {     
        get: listOperatorStartingPoints
    },

    "/route/ending_points": {     
        get: listOperatorEndingPoints
    },



    "/trip/view": {     
        get: listOperatorTrips
    },

    "/trip/view/one": {     
        get: tripDetail
    },

    "/receipt/view": {     
        get: listBoughtTickets
    },

    "/receipt/view/one": {     
        get: tripReceiptDetail
    },

    "/receipt/create": {     
        post: buyTicket
    }
}

module.exports = buyingTicket;


