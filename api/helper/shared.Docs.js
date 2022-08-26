const paginationParameters = [
    {
        in:"query",
        name:"page",
        schema: {
            type: "integer",
          
            
                
        },
        required: false,
        default: 1,
        description: "specify numeric page number",
        minimum: 1
    },

    {
        in:"query",
        name:"size",
        schema: {
            type: "integer",
           
            
        },
        required: false,
        default: 5,
        description: "specify numberic size of data",
        minimum: 0
    }
]

const operatorParameter = [
    {
        in:"path",
        name:"operatorId",
        schema: {
            type: "integer",
            example: 1,
            
        },
        required: true,
        description: "specify numberic operator id",
        minimum: 0
    }
]



const authenticatedObject = {
    message: "authorization sucessfull",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzZW5nZXJJZCI6MSwicGhvbmVfbnVtYmVyIjoiMSIsImlhdCI6MTY2MTUzOTI2MSwiZXhwIjoxNjYxNTQyODYxfQ.WAOFjHOQTV2U9fUvGvL02v-y8jAo9pUw1CElF5AMg40"
  }

const status500Object = {
    content: {
        "application/json": {
            schema: {
                type: "object",
                
            }
        }
    }
    
}


const status409Object = {
    
}

const status200bject = {
    
}

const status201bject = {
    
}





module.exports = { 
    paginationParameters,
    authenticatedObject,
    status500Object,
    operatorParameter,
}