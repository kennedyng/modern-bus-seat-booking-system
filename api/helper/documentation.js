const schemas = require("./components/schemas");
const examples = require("./components/examples");
const parameters = require("./components/parameters");
const requestBodies = require("./components/requestBodies");
const responses = require("./components/responses");

const passengerPaths = require("./paths/passenger.Doc")
const operatorPaths = require("./paths/operator.Doc")
const buyingTicketPaths = require("./paths/buyingTicket.Doc")
const tripPaths = require("./paths/trip.Doc")

const swaggerDocumentation = {
    openapi: "3.0.0",
    info: {
        title: "Modern Bus Seat Booking System",
        version: "0.0.1",
        description: ``
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "local development"
        },
        {
            url: "https://ebus-api.herokuapp.com",
            description: "production development"
        }
       
       
    ],

    tags: [

        {
            name:"authorization",
            description:"",
            
        },
        {
            name:"passenger",
            description: ""
        },
        {
            name:"operator"
        },
        {
            name:"buying ticket"
        },
        {
            name:"trip"
        },
        {
            name:"route"
        },
        {
            name:"bus"
        },
        
       
    ],


    paths: { 
        ...passengerPaths,
        ...operatorPaths,
        ...buyingTicketPaths,
        ...tripPaths

        
     },


    components: {

        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT"

            }

        },
        schemas: schemas,

        parameters: parameters,

        

        requestBodies: requestBodies,


        responses: responses,

        examples: examples
        
    }


}



module.exports = swaggerDocumentation;