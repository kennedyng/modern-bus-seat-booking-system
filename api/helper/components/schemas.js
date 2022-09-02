
const passengerSchema = {
    passenger: {
        type: "object",
        required: [
            "phone_number",
            "password"
        ],
        properties: {
            phone_number: {
                type: "string",
                example: "0978329482"
            },
            password: {
                type: "string",
                example: "1234"
            } 
        }
    }


}




const passengerProfileSchema = {
    passengerProfile: {
        type: "object",
        required: [
            "first_name",
            "last_name",
            "nrc",
            "phone_number",
            "password"
        ],
        properties: {
            first_name: {
                type: "string",
                example: "kennedy"
            }, 
            middle_name: {
                type: "string",
                example: "chanda"
            }, 
            last_name: {
                type: "string",
                example: "ngosa"
            }, 
            nrc: {
                type: "string",
                example: "347160/10/1"
            }, 
            address: {
                type: "string",
                example: "50/23 new kamwala ma plot"
            }, 
            phone_number: {
                type: "string",
                example: "0978329482"
            },
            password: {
                type: "string",
                example: "1234"
            },
            
            

        }
    },



}





const operatorSchema = {
    operator: {
        type: "object",
        required: [
            "email",
            "password"
        ],
        properties: { 
            email: {
                type: "string",
                example: "one@gmail.com"
            },
            password: {
                type: "string",
                example: "1234"
            } 
        }
    }


}





const operatorProfileSchema = {
    operatorProfile: {
        type: "object",
        required: [
            "company_name",
            "motto",
            "email",
            "password",
            
        ],
        properties: { 
            company_name: {
                type: "string",
                example: "one stone limited"
            },
            motto: {
                type: "string",
                example: "turning thoughts into deeds"
            },
            logo_pic: {
                type: 'file',

            },
            email: {
                type: "integer",
                example: "one@gmail.com"
            },
            password: {
                type: "string",
                example: "1234"
            },
           
        }
    }

}

const receiptSchema = {
    receipt: {
        type: "object",
        required: [
            "method_of_pay",
            "transaction_id",
            "tripId",
            "amount_payed"
            
        ],
        properties: { 
            method_of_pay: {
                type: "string",
                example: "MTN"
            },
            transaction_id: {
                type: "string",
                description: "arbitrary number from payment system",
            },
            amount_payed: {
                type: 'float',
                example: "200",
                description: "amount of payment in Zambian currency"

            },
            tripId: {
                type: "integer",
            },
           
           
        }
    }

}






const tripSchema = {
    trip: {
        type: "object",
        required: [
            "routeId",
            "departing_time",
            "busId"
        ],
        properties: {
            departing_time: {
                type: "date time",
                example: new Date()
            },
            routeId: {
                type: "integer",
                example: "1"
            },
            busId: {
                type: "integer",
                example: "1"
            } 
        }
    }


}






const routeSchema = {
    route: {
        type: "object",
        required: [
            "starting_point",
            "ending_point",
            "fare",
        ],
        properties: {
            starting_point: {
                type: "string",
                example: "lusaka",
                description: "origin location"
            }, 
            ending_point: {
                type: "string",
                example: "ndola",
                description: "destination location"
            },
            fare: {
                type: "float",
                example: "200",
                description:"amount of money per passenger"
            },
             
        }
    }
}




const busSchema = {
    bus: {
        type: "object",
        required: [
            "plate_number",
            "total_seat",
           
           
        ],
        properties: {
             
            plate_number: {
                type: "string",
                example: "ABC 1234",
                description: "registration vechicle number"
            }, 
            total_seat: {
                type: "integer",
                example: "123",
                description: "total capacity of passengers seats of the vehicle"
            },
          
             
         
             
        }
    }


}
module.exports = {

    ...passengerSchema,
    ...passengerProfileSchema,
    ...operatorSchema,
    ...operatorProfileSchema,
    ...tripSchema,
    ...routeSchema,
    ...busSchema,
    ...receiptSchema





};