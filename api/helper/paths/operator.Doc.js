

const operatorLogin = {
    tags: ["authorization", "operator"],
    description: "",
    summary: "",

    requestBody: {
        description:"",
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/operator"
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



const operatorRegister = {
    tags: ["operator"],
    description: "provide approriate details to register a new operator",
    summary: "Register a new operator",

    requestBody: {
        description:"",
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/operatorProfile",
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




const operatorViewProfile = {
    security: [
        { bearerAuth: [] } 
    ],
    tags: ["operator"],
    description: "To view a operator profile a varied operator's Bearer Token is needed.",
    summary: "operator's profile",


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
    tags: ["operator"],
    description: "To update a operator profile a varied operator's Bearer Token is needed.",
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
    tags: ["operator"],
    description: "To update a operator profile a varied operator's Bearer Token is needed.",
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

   

    "/auth/operator/register": {
        post: operatorRegister 
    },

    "/auth/operator/login": {
        post: operatorLogin 
    },

    "/operator/profile/view": {
        get: operatorViewProfile
    },


    "/operator/profile/update": {
        patch: passengerProfileUpdate
    },


    "/operator/profile/delete": {
        delete: passengerProfileDelete
    }
}




module.exports = passengerPaths