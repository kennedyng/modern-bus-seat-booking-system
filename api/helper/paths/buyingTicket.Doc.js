const operatorsProfileList = {
    tags: ["buying ticket"],
    description: "",
    summary: "available operators",

    parameters: [
        { $ref: "#components/parameters/page" },
        { $ref: "#components/parameters/size" }
    ],

    responses: {
        500: {
            $ref: "#/components/responses/ServerError"
        },
        
        200: {
            $ref: "#/components/responses/Ok"
          
          
        },
         
    }







}

const boughtTickets = {
    security: [
        { bearerAuth: [] } 
    ],


    tags: ["buying ticket"],
    description: "",
    summary: "passengers bought tickets",

    parameters: [
        { $ref: "#components/parameters/page" },
        { $ref: "#components/parameters/size" }
    ],

    responses: {
        500: {
            $ref: "#/components/responses/ServerError"
        },
        
        200: {
            $ref: "#/components/responses/Ok"
          
          
        },
         
    }





}

const ticketDetails = {
    security: [
        { bearerAuth: [] } 
    ],


    tags: ["buying ticket"],
    description: "",
    summary: "ticket details",

    parameters: [
        
        { $ref: "#components/parameters/receiptId" }
    ],

    responses: {
        500: {
            $ref: "#/components/responses/ServerError"
        },
        
        200: {
            $ref: "#/components/responses/Ok"
          
          
        },
         
    }
    
}



const tripDetails = {
    tags: [ "buying ticket", "trip" ],
    description: "",
    summary: "ticket details",

    parameters: [
        
        { $ref: "#components/parameters/tripId" }
    ],

    responses: {
        500: {
            $ref: "#/components/responses/ServerError"
        },
        
        200: {
            $ref: "#/components/responses/Ok"
          
          
        },
         
    }
    
}

const operatorStartingPoints = {

    tags: ["buying ticket"],
    description: "",
    summary: "ticket details",

    parameters: [
        { $ref: "#components/parameters/page" },
        { $ref: "#components/parameters/size" },
        { $ref: "#components/parameters/operatorId" }
    ],

    responses: {
        500: {
            $ref: "#/components/responses/ServerError"
        },
        
        200: {
            $ref: "#/components/responses/Ok"
          
          
        },
         
    }
    
}


const operatorEndingPoints = {
    tags: ["buying ticket"],
    description: "ending points based on selected starting point",
    summary: "ending points",

    parameters: [
        { $ref: "#components/parameters/page" },
        { $ref: "#components/parameters/size" },
        { $ref: "#components/parameters/operatorId" },

        { 
            in: "path",
            name: "starting_point",
            schema: {
                type: "string",
                example: "lusaka"
            }
         }
    ],

    responses: {
        500: {
            $ref: "#/components/responses/ServerError"
        },
        
        200: {
            $ref: "#/components/responses/Ok"
          
          
        },
         
    }
}


const availableTrips = {
    tags: ["buying ticket"],
    description: "",
    summary: "available trips",
    parameters: [
        { $ref: "#components/parameters/page" },
        { $ref: "#components/parameters/size" },
        { $ref: "#components/parameters/operatorId" },
        {
            in: "path",
            name: "starting_point",
            schema: {
                type: "string",
                example: "lusaka"
            }
        },

        {
            in: "path",
            name: "ending_point",
            schema: {
                type: "string",
                example: "lusaka"
            }
        }
    ],

    responses: {
        500: {
            $ref: "#/components/responses/ServerError"
        },
        
        200: {
            $ref: "#/components/responses/Ok"
          
          
        },
         
    }
    

}

const buyingTicketPaths = {

   

    "/operator/profile/view/all/": {
        get: operatorsProfileList 
    },

    
    "/receipt/view": {
        get: boughtTickets 
    },

    "/receipt/view/one/{receiptId}": {
        get: ticketDetails
    },


    "/route/starting_points/{operatorId}": {
        get: operatorStartingPoints
    },



    "/route/ending_points/{operatorId}/{starting_point}": {
        get: operatorEndingPoints
    },



    "/trip/view/{starting_point}/{ending_point}/{operatorId}": {
        get:  availableTrips
    },


    "/trip/view/one/{tripId}": {
        get:  tripDetails
    },

}




module.exports = buyingTicketPaths