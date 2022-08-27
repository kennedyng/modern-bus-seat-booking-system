

const listTrip = {
    
    tags: ['trip management'],
  



}




const listOperatorTrips = {
    
    tags: ['trip management'],
    
}


const createTrip = {
    tags: ['trip management'],

    
   
}


const updateTrip = {

    tags: ['trip management'],
   
}


const deleteTrip = {
    tags: ['trip management'],
    
}



const tripManagement = {
    "/trip/view/one": {     
        get: listTrip
    },

    "/trip/view/all": {     
        get: listOperatorTrips
    },

    "/trip/create": {     
        post: createTrip
    },



    "/trip/update": {     
        patch: updateTrip
    },

    "/trip/delete": {     
        delete: deleteTrip
    },

}

module.exports = tripManagement;


