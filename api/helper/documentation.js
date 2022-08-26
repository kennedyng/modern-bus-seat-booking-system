const passengerAuth = require("./passengerAuth.Doc")
const operatorAuth = require("./operatorAuth.Doc")
const buyingTicket = require("./buyingTicket.Doc")
const tripManagement = require("./trip.Doc");
const routeMangement = require("./route.Doc");
const busManagement = require("./bus.Doc");
const swaggerDocumentation = {
    openapi: "3.0.0",
    info: {
        title: "Modern E-bus USSD Seat Booking API ",
        description: "This final year project backend documentation",
        version: "0.0.1"
    },
    servers: [
        {
            url: "https://ebus-api.herokuapp.com",
            description: "production development"
        },
        {
            url: "https://localhost:3000",
            description: "local development"
        },
       
    ],

    tags: [

        {
            name:"passenger authorization",
            description:"",
            
        },
        {
            name:"operator authorization"
        },
        {
            name:"buying ticket"
        },
        {
            name:"trip management"
        },
        {
            name:"route management"
        },
        {
            name:"bus management"
        },
        
       
    ],

    paths: { 

        ...passengerAuth,
        ...buyingTicket,
        ...buyingTicket,
        ...operatorAuth,
        ...tripManagement,
        ...routeMangement,
        ...busManagement
     },


    components: {
        schemas: {
            passenger: {
                type: "object",
                required: [
                    "phone_number",
                    "password"
                ],
                properties: {
                    id: {
                        type: "integer",
                        example: 1

                    }, 
                    phone_number: {
                        type: "string",
                        example: "0978329482"
                    },
                    password: {
                        type: "string",
                        expample: "1234"
                    } 
                }
            },



            passengerProfile: {
                type: "object",
                required: [
                    "first_name",
                    "last_name",
                    "nrc",
                    "passengerId"
                ],
                properties: {
                    id: {
                        type: "integer",
                        example: 1

                    }, 
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
                    time_created: {
                        type: "string",
                        example: new Date()
                    }, 
                    time_updated: {
                        type: "string",
                        example: new Date()
                    },
                    passengerId: {
                        type: "integer",
                        example: "1"
                    } 
                }
            },





            operator: {
                type: "object",
                required: [
                    "email",
                    "password"
                ],
                properties: {
                    id: {
                        type: "integer",
                        example: 1

                    }, 
                    email: {
                        type: "string",
                        example: "0978329482"
                    },
                    password: {
                        type: "string",
                        example: "one@gmail.com"
                    } 
                }
            },




            operatorProfile: {
                type: "object",
                required: [
                    "company_name",
                    "motto"
                ],
                properties: {
                    id: {
                        type: "integer",
                        example: 1

                    }, 
                    company_name: {
                        type: "string",
                        example: "one stone limited"
                    },
                    motto: {
                        type: "string",
                        example: "turning thoughts into deeds"
                    },
                    logo_pic: {
                        type: 'image.png'

                    },
                    time_created: {
                        type: "string",
                        example: new Date()
                    }, 
                    time_updated: {
                        type: "string",
                        example: new Date()
                    },
                    operatorId: {
                        type: "integer",
                        example: "turning thoughts into deeds"
                    } 
                }
            },




        }
    }

     
}

module.exports = swaggerDocumentation