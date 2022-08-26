

const registerPassenger = {
    tags:["passenger authorization"],
    description: "create new account"
} 

const passengerLogin = {
    tags:["passenger authorization"],
    description: "login ",
    summary: "create a new passenger account",
   
    
    
    responses: {
        200: {
            description: "ok",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        example: {
                            token: "",

                        }
                    }
                }
            }
        },
        500: {
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                    }
                }
            }
            
        },
      
        
    }
} 

const passengerAuth = {
    "/auth/passenger/register": {
    post: registerPassenger
    },

    "/auth/passenger/login": {
        get: passengerLogin
    }

}



module.exports= passengerAuth