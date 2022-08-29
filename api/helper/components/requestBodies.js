

const loginBody = {
    content: {
        "application/json": {
            schema: {
                type: "object",  
            },

            examples: {
                passengerLogin: {
                    $ref:"#/components/examples/passengerLogin"
                },
                operatorLogin: {
                    $ref:"#/components/examples/operatorLogin"
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