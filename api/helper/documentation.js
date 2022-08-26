const passengerAuth = require("./passengerAuth.Doc")
const operatorAuth = require("./operatorAuth.Doc")
const buyingTicket = require("./buyingTicket.Doc")
const tripManagement = require("./trip.Doc");
const routeMangement = require("./route.Doc");
const busManagement = require("./bus.Doc");
const swaggerDocumentation = {
    openapi: "3.0.0",
    info: {
        title: "Modern E-bus USSD Seat Booking System  ",
        description: "",
        version: "0.0.1"
    },
    servers: [
        {
            url: "https://ebus-api.herokuapp.com",
            description: "production development"
        },
       
    ],

    tags: [

        {
            name:"passenger authorization"
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
     }

     
}

module.exports = swaggerDocumentation