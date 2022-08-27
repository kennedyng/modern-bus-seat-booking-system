const { paginationParameters } = require("./shared.Docs");
const { status500Object } = require("./shared.Docs");
const { operatorParameter } = require("./shared.Docs");
const listOperators = {
    tags: ['buying ticket'],
    description: "list of all registed bus operators",
    summary: "available bus operators",

    parameters: [
        ...paginationParameters,
        
    ],

    responses: {
        200: {
            description: "ok",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        example: {
                            "totalPages": 3,
                            "data": [
                              {
                                "id": 1,
                                "company_name": "one stone limited",
                                "motto": "turning thoughts into deeds",
                                "logo_pic": "uploads/logo/2022-08-25T16:04:56.182Zpaidsolution.png",
                                "time_created": "2022-08-25T16:04:58.480Z",
                                "time_updated": "2022-08-25T16:04:58.481Z",
                                "operatorId": 1,
                                "operator": {
                                  "email": "one@gmail.com"
                                }
                              }
                            ]
                          }
                    }
                }
            }
        },
        500: {...status500Object} 
        

    },


    
   
}

const listOperatorStartingPoints = {
   
    tags: ['buying ticket'],
    parameters: [
        ...paginationParameters,
        ...operatorParameter
    ],

    responses: {
        200: {
            description: "ok",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        example: {
                            "totalPages": 1,
                            "data": [
                              {
                                "starting_point": "kabwe"
                              },
                              {
                                "starting_point": "lusaka"
                              }
                            ]
                          }
                    }
                }
            }
        },
        500: {...status500Object}
        
    }
  
}


const listOperatorEndingPoints = {
    
    tags: ['buying ticket'],
    parameters: [
        ...paginationParameters,
        ...operatorParameter,
        {
            in:"path",
            name: "starting_point",
            required: true,
            schema: {
                type: "string",
                example: "lusaka"
            }

        }
    ],

    responses: {
        200: {
            description: "ok",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        example: {
                            "totalPages": 1,
                            "data": [
                              {
                                "ending_point": "ndola"
                              }
                            ]
                          }
                    }
                }
            }
        },
        500: {...status500Object}
        
    }
  



}




const listOperatorTrips = {
    
    tags: ['buying ticket'],
    
    
}


const tripDetail = {
    tags: ['buying ticket'],
    parameters: [
        ...paginationParameters,
        {
            in: "path",
            name:"tripId",
            schema: {
                type: "integer",
            },
            required: true,
        }
    ],
    responses: {
        200: {
            description: "ok",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                       
                        example: {
                            "totalPages": 2,
                            "data": [
                              {
                                "id": 2,
                                "departing_time": "2022-08-26T00:00:00.000Z",
                                "operatorId": 1,
                                "routeId": 1,
                                "busId": 2,
                                "Route": {
                                  "id": 1,
                                  "starting_point": "lusaka",
                                  "ending_point": "ndola",
                                  "fare": 250,
                                  "operatorId": 1
                                },
                                "Bus": {
                                  "id": 2,
                                  "plate_number": "ABC 123",
                                  "total_seat": 70,
                                  "operatorId": 1
                                }
                              }
                            ]
                          }
                    }
                }
            }
        },
        500: {...status500Object}
        
    }
  


   
}


const listBoughtTickets = {

    tags: ['buying ticket'],
   
}


const tripReceiptDetail = {

    tags: ['buying ticket'],
   
}

const buyTicket = {
    tags: ['buying ticket'],
    
}



const buyingTicket = {
    "/operator/profile/view/all": {     
        get: listOperators
    },

    "/route/starting_points/{operatorId}": {     
        get: listOperatorStartingPoints
    },

    "/route/ending_points/{operatorId}/{starting_point}": {     
        get: listOperatorEndingPoints
    },



    "/trip/view/": {     
        get: listOperatorTrips
    },

    "/trip/view/one/{tripId}": {     
        get: tripDetail
    },

    "/receipt/view": {     
        get: listBoughtTickets
    },

    "/receipt/view/one": {     
        get: tripReceiptDetail
    },

    "/receipt/create": {     
        post: buyTicket
    }
}





module.exports = buyingTicket;


