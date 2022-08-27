
const {  status500Object } = require("./shared.Docs")

const registerPassenger = {
    tags:["passenger authorization"],
    description: "create new account"
} 

const passengerLogin = {
    tags:["passenger authorization"],
    description: "login as a passenger by providing the phone number and the password.",
    summary: "login as a passenger",
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/passenger"
                }
            }
        }
    },

    
    
   
    
    
    responses: {
        200: {
            description: "ok",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        example: {
                            token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzZW5nZXJJZCI6MSwicGhvbmVfbnVtYmVyIjoiMSIsImlhdCI6MTY2MTUzOTI2MSwiZXhwIjoxNjYxNTQyODYxfQ.WAOFjHOQTV2U9fUvGvL02v-y8jAo9pUw1CElF5AMg40`,
                            message: "successfully authorized"

                        }
                    }
                }
            }
        },
       
        500: status500Object,

        403: {
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        example: {
                            message: "authorization failed"
                        }
                        
                    }
                }
            }
            
        },
      
        
    },
    
} 

const passengerAuth = {
    "/auth/passenger/register": {
    post: registerPassenger
    },

    "/auth/passenger/login": {
        post: passengerLogin
    }

}



module.exports= passengerAuth