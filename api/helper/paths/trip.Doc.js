
const operatorsTrips = {
    security: [
        { bearerAuth: [] } 
    ],
    tags: ["trip"],
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