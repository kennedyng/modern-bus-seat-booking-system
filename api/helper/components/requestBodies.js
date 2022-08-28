

const loginBody = {
    content: {
        "application/json": {
            schema: {
                type: "object",  
            },

            examples: {
                loginExample: {
                    $ref:"#/components/examples/loginExample"
                }
            }
            

        }
    }
    
    
}

const PassengerLogin = {
    content: {
        "application/json": {
            schema: {
                type: "object",  
            },

            examples: {
                loginExample: {
                    $ref:"#/components/examples/passengerLogin"
                }
            }
            

        }
    }
    
    
}
module.exports = {
    loginBody,
    PassengerLogin
}