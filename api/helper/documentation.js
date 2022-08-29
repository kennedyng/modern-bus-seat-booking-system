const schemas = require("./components/schemas");
const examples = require("./components/examples");
const parameters = require("./components/parameters");
const requestBodies = require("./components/requestBodies");
const responses = require("./components/responses");

const passengerPaths = require("./paths/passenger.Doc")
const operatorPaths = require("./paths/operator.Doc")
const buyingTicketPaths = require("./paths/buyingTicket.Doc")
const tripPaths = require("./paths/trip.Doc")
const routePaths = require("./paths/route.Doc")
const busPaths = require("./paths/bus.Doc")


const swaggerDocumentation = {
    openapi: "3.0.0",
    info: {
        title: "Modern Bus Seat Booking System API",
        version: "0.0.1",
        description: `The purpose of this web page is to document and detail the backend web APis for the final year project titled **Modern E-Bus Seat Booking System**.
                      The main objective of the system is to automate the manual way of buying and selling of public bus ticket between the bus operator and passengers.
                      The system supports two types of users namely **passengers** and **operators**. **Passenger** is any user wants to use the system to buy a bus seat ticket.
                      **Operator** is a public bus company that renders travelling services to the passengers. **Passengers** can register for an account with the system and start
                      buying bus tickets from any available bus operators using MTN money as a method of payments. **Operators** can register with system and start managing they journeys.
                      \n\nThis Documentation Details \n1. Profile Account Management for both Users (**Operators/ Passengers**).\n2. A flow of buying **Passenger** Seat ticket.
                      \n3. **Operator** Trips Management.
                                         
        `
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
            description:"The system is using a Bearer Token Authentication system. Generate A token by loging to the system as a **Operator or Passenger** the Token will `expire in 1 hour`",
            
        },
        {
            name:"passenger",
            description: "Manage passenger's profile"
        },
        {
            name:"operator",
            description: "Manage operator's profile"
        },
        {
            name:"buying ticket",
            description: "Buy a passenger's seat"
        },
        {
            name:"trip",
            description: "Manage operator`s trips"
        },
        {
            name:"route",
            description: "Manage operator's routes"
        },
        {
            name:"bus",
            description: "manage operator`s buses"
        },
        
       
    ],


    paths: { 
        ...passengerPaths,
        ...operatorPaths,
        ...buyingTicketPaths,
        ...tripPaths,
        ...routePaths,
        ...busPaths

        
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