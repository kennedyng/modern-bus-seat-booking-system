

const listBus = {
    
    tags: ['bus management'],
  



}




const listOperatorBuses = {
    
    tags: ['bus management'],
    
}


const createBus = {
    tags: ['bus management'],

    
   
}


const updateBus = {

    tags: ['bus management'],
   
}


const deleteBus = {
    tags: ['bus management'],
    
}



const busManagement = {
    "/bus/view/one": {     
        get: listBus
    },

    "/bus/view/all": {     
        get: listOperatorBuses
    },

    "/bus/create": {     
        post: createBus
    },



    "/bus/update": {     
        patch: updateBus
    },

    "/bus/delete": {     
        delete: deleteBus
    },

}

module.exports = busManagement;


