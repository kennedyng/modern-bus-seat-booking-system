
const operatorRoutes = {
    security: [
        { bearerAuth: [] } 
    ],
    tags: ["route"],
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
    description: "update route by `ID`",
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
    summary: "delete route by ID",
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
