const passengerAuth = require("./passengerAuth.Doc")
const operatorAuth = require("./operatorAuth.Doc")
const buyingTicket = require("./buyingTicket.Doc")
const tripManagement = require("./tripMagament.Doc");
const routeMangement = require("./routeManagement.Doc");
const busManagement = require("./busManagement.Doc");

const schamas = require("./schemas.Doc")
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
        schemas: schamas
    }

     
}

module.exports = swaggerDocumentation