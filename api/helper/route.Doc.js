

const listRoute = {
    
    tags: ['route management'],
  



}




const listOperatorRoute = {
    
    tags: ['route management'],
    
}


const createRoute = {
    tags: ['route management'],

    
   
}


const updateRoute = {

    tags: ['route management'],
   
}


const deleteRoute = {
    tags: ['route management'],
    
}



const routeManagement = {
    "/route/view/one": {     
        get: listRoute
    },

    "/route/view/all": {     
        get: listOperatorRoute
    },

    "/route/create": {     
        post: createRoute
    },



    "/route/update": {     
        patch: updateRoute
    },

    "/route/delete": {     
        delete: deleteRoute
    },

}

module.exports = routeManagement;


