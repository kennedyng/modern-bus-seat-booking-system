/*

const passengerLogin = {
    tags: ["authorization", "passenger"],
    description: "",
    summary: "",

    requestBody: {
        description:"",
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/passenger"
                }
            }
        }
        
    },


    responses: {
        500: {
            $ref: "#/components/responses/ServerError"
        },
        403: {
            $ref: "#/components/responses/AuthFailed"
        },
        200: {
            $ref: "#/components/responses/Ok"
        }, 
    }


    

}



const passengerRegister = {
    tags: ["passenger"],
    description: "provide approriate details to register a new passenger",
    summary: "Register a new passenger",

    requestBody: {
        description:"",
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/passengerCreateProfile",
                }
            }
        }
        
    },


    responses: {
        500: {
            $ref: "#/components/responses/ServerError"
        },
        409: {
            $ref: "#/components/responses/Conflict"
        },
        201: {
            $ref: "#/components/responses/Ok"
        },
        200: {
            $ref: "#/components/responses/Created"
        }, 
    }


    

}




const passengerProfileView = {
    security: [
        { bearerAuth: [] } 
    ],
    tags: ["passenger"],
    description: "To view a passenger profile a varied passenger's Bearer Token is needed.",
    summary: "passenger's profile",


    responses: {
        500: {
            $ref: "#/components/responses/ServerError"
        },
        
        200: {
            $ref: "#/components/responses/Ok"
        },
         
    }
    

}


const passengerProfileUpdate = {
    security: [
        { bearerAuth: [] } 
    ],
    tags: ["passenger"],
    description: "To update a passenger profile a varied passenger's Bearer Token is needed.",
    summary: "update passengers profile",

    requestBody: {
        description:"",
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/passengerProfile",
                }
            }
        }
        
    },


    responses: {
        500: {
            $ref: "#/components/responses/ServerError"
        },
        
        201: {
            $ref: "#/components/responses/Created"
        },
        403: {
            $ref: "#/components/responses/AuthFailed"
        },
        
    }

    

}


const passengerProfileDelete = {
    security: [
        { bearerAuth: [] } 
    ],
    tags: ["passenger"],
    description: "To update a passenger profile a varied passenger's Bearer Token is needed.",
    summary: "update passengers profile",

   


    responses: {
        500: {
            $ref: "#/components/responses/ServerError"
        },
        
        200: {
            $ref: "#/components/responses/Ok"
        },
        403: {
            $ref: "#/components/responses/AuthFailed"
        },
        
    }
    

}





const passengerPaths = {

   

    "/auth/passenger/register": {
        post: passengerRegister 
    },

    "/auth/passenger/login": {
        post: passengerLogin 
    },

    "/passenger/profile/view": {
        get: passengerProfileView
    },


    "/passenger/profile/update": {
        patch: passengerProfileUpdate
    },


    "/passenger/profile/delete": {
        delete: passengerProfileDelete
    }
}

*/

const operatorsTrips = {
    security: [
        { bearerAuth: [] } 
    ],
    tags: ["trip", "operator"],
    description: "",
    summary: "operators trips",
    parameters: [
        { $ref: "#components/parameters/page" },
        { $ref: "#components/parameters/size" }
    ],

    responses: {
        500: {
            $ref: "#/components/responses/ServerError"
        },
        
        200: {
            $ref: "#/components/responses/Ok"
        },
        403: {
            $ref: "#/components/responses/AuthFailed"
        },
        
    }


}



const createTrip = {
    security: [
        { bearerAuth: [] } 
    ],
    tags: ["trip"],
    description: "create trip",
    summary: "create trip",
    requestBody: {
        required: true,
        description: "",
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/trip"
                }
            }
        }
        
    },

    responses: {
        500: {
            $ref: "#/components/responses/ServerError"
        },
        
        201: {
            $ref: "#/components/responses/Created"
        },
        403: {
            $ref: "#/components/responses/AuthFailed"
        },
        
    }
}

const updateTrip = {
    security: [
        { bearerAuth: [] } 
    ],
    tags: ["trip"],
    description: "update trip",
    summary: "update trip",
    parameters: [
        { $ref: "#components/parameters/tripId" }
    ],
    requestBody: {
        required: true,
        description: "",
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/trip"
                }
            }
        }
        
    },

    responses: {
        500: {
            $ref: "#/components/responses/ServerError"
        },
        
        201: {
            $ref: "#/components/responses/Created"
        },
        403: {
            $ref: "#/components/responses/AuthFailed"
        },
        
    }
}


const deleteTrip = {
    security: [
        { bearerAuth: [] } 
    ],
    tags: ["trip"],
    description: "update trip",
    summary: "delete trip by id",
    parameters: [
        { $ref: "#components/parameters/tripId" }
    ],
    
    responses: {
        500: {
            $ref: "#/components/responses/ServerError"
        },
        
        200: {
            $ref: "#/components/responses/Ok"
        },
        403: {
            $ref: "#/components/responses/AuthFailed"
        },
        
    }
}

const tripPaths = {

   

    "/trip/view/all": {
        get: operatorsTrips
    },

    "/trip/create": {
        post: createTrip
    },

    "/trip/update/{tripId}": {
        patch: updateTrip
    },

    "/trip/delete/{tripId}": {
        delete: deleteTrip
    }
}


module.exports = tripPaths