
const operatorRegister = {    
    tags: ['operator authorization'],
   
}

const operatorLogin = {
   
    tags: ['operator authorization'],
  
}


const operatoAuth = {
    "/auth/operator/register": {     
        post: operatorRegister
    },

    "/auth/operator/login": {     
        get: operatorLogin 
    },
}

module.exports = operatoAuth;


