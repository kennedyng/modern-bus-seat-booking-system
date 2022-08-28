const NotFound = {
    description: "not found",
    content: {
        "application/json": {
            schemas: {
                type: "object",
                
            },

            examples: {
                passengerRegister: {
                    $ref:"#/components/examples/passengerRegister"
                }
            }
        }
    }

}


const ServerError = {
    content: {
        "applicatio/json": {
            schema: {
                type: "object",
            },

            examples: {
                serverError: {
                    $ref: "#/components/examples/serverError"
                },

                serverErrorEmpty: {
                    $ref: "#/components/examples/serverErrorEmpty"
                }

            }
        }
    }
}




const AuthFailed = {
    content: {
        "applicatio/json": {
            schema: {
                type: "object",
            },

            examples: {
                authFailed: {
                    $ref: "#/components/examples/authFailed"
                },

            }
        }
    }
}




const Ok = {
    content: {
        "applicatio/json": {
            schema: {
                type: "object",
            },

            examples: {
                Ok: {
                    $ref: "#/components/examples/emptyObject"
                },

            }
        }
    }
}



const Conflict = {
    description: "conflict",
    content: {
        "applicatio/json": {
            schema: {
                type: "object",
            }
        }
    }
}



const Created = {
    description: "created",
    content: {
        "applicatio/json": {
            schema: {
                type: "object",
            }
        }
    }
}

const  responses = {
    NotFound,
    ServerError,
    AuthFailed,
    Ok,
    Conflict,
    Created
}

module.exports = responses