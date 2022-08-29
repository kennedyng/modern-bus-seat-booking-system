
const page = {
        in: "query",
        name: "page",
        schema: {
            type: "integer",
            
        },
        examples: {
            integer1: {
                $ref: "#/components/examples/integer1"
            },
            integer10: {
                $ref: "#/components/examples/integer10"
            }
        }
}



const size = {
    in: "query",
    name: "size",
    schema: {
        type: "integer",
    },
    examples: {
        integer1: {
            $ref: "#/components/examples/integer1"
        },
        integer10: {
            $ref: "#/components/examples/integer10"
        }
    }
}





const receiptId = {
    in: "path",
    name: "receiptId",
    schema: {
        type: "integer",
    },
    examples: {
        integer1: {
            $ref: "#/components/examples/integer1"
        },
        integer10: {
            $ref: "#/components/examples/integer10"
        }
    }
}
const passengerId = {
    in: "query",
    name: "path",
    schema: {
        type: "integer",
        
        
    }
}   




const operatorId = {
    in: "path",
    name: "operatorId",
    schema: {
        type: "integer",  
        
    },
    examples: {
        integer1: {
            $ref: "#/components/examples/integer1"
        },
        integer10: {
            $ref: "#/components/examples/integer10"
        }
    }
}



const tripId = {
    in: "path",
    name: "tripId",
    schema: {
        type: "integer",  
        
    },
    examples: {
        integer1: {
            $ref: "#/components/examples/integer1"
        },
        integer10: {
            $ref: "#/components/examples/integer10"
        }
    }
}



const routeId = {
    in: "path",
    name: "routeId",
    schema: {
        type: "integer",  
        
    },
    examples: {
        integer1: {
            $ref: "#/components/examples/integer1"
        },
        integer10: {
            $ref: "#/components/examples/integer10"
        }
    }
}



const busId = {
    in: "path",
    name: "busId",
    schema: {
        type: "integer",  
        
    },
    examples: {
        integer1: {
            $ref: "#/components/examples/integer1"
        },
        integer10: {
            $ref: "#/components/examples/integer10"
        }
    }
}
    
module.exports = {
    page,
    size,
    operatorId,
    receiptId,
    tripId,
    routeId,
    busId
}