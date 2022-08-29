/*
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


*/
const operatorRoutes = {
    security: [
        { bearerAuth: [] } 
    ],
    tags: ["route", "operator"],
    description: "",
    summary: "operators routes",
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

const createRoute = {
    security: [
        { bearerAuth: [] } 
    ],
    tags: ["route"],
    description: "create route",
    summary: "create route",
    requestBody: {
        required: true,
        description: "",
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/route"
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

const updateRoute = {
    security: [
        { bearerAuth: [] } 
    ],
    tags: ["route"],
    description: "update route",
    summary: "update route",
    parameters: [
        { $ref: "#components/parameters/routeId" }
    ],
    requestBody: {
        required: true,
        description: "",
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/route"
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


const deleteRoute = {
    security: [
        { bearerAuth: [] } 
    ],
    tags: ["route"],
    description: "update route by id",
    summary: "delete route by id",
    parameters: [
        { $ref: "#components/parameters/routeId" }
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

const routePaths = {

   

    "/route/view/all": {
        get: operatorRoutes
    },

    "/route/create": {
        post: createRoute
    },

    "/route/update/{routeId}": {
        patch: updateRoute
    },

    "/route/delete/{routeId}": {
        delete: deleteRoute
    },

}


module.exports = routePaths
