

const operatorLogin = {
    tags: ["authorization", "operator"],
    summary: "generate operator`s token",

    requestBody: {
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/operator"
                }
            },
           
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
    summary: "Create a new operator`s account profile",

    requestBody: {
        description:"",
        required: true,
        content: {
            "multipart/form-data": {
                schema: {
                    type: "string",
                    format: "binary",
                    $ref: "#/components/schemas/operatorProfile",
                }
            }
        },

        
        
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


const operatorViewAccounts = {
    security: [
        { bearerAuth: [] } 
    ],
    tags: ["operator"],
    summary: "operator's accounts",
    description: "view operator accounts details",


    responses: {
        500: {
            $ref: "#/components/responses/ServerError"
        },
        
        200: {
            $ref: "#/components/responses/Ok"
        },
         
    }
    

}



const operatorUpdateProfile = {
    security: [
        { bearerAuth: [] } 
    ],
    tags: ["operator"],
    summary: "update passengers profile",

    requestBody: {
        description:"",
        required: true,
        content: {
            "multipart/form-data": {
                schema: {
                    type: "string",
                    format: "binary",
                    $ref: "#/components/schemas/operatorProfile",
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
        patch: operatorUpdateProfile
    },


    "/accounts/view": {
        get: operatorViewAccounts
    },


   
}




module.exports = passengerPaths