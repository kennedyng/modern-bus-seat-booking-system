
const integer1 = {
    value: 1
}


const integer10 = {
    value: 10
}

const loginExample = {
    value: {
        name:"llll"
    }
}



const passengerLogin = {
    value: {
        phone_number: "0978329482",
        password: "1234"
    }
}



passengerRegister = {
    value: {
        first_name: "kennedy",
        middle_name: "chanda",
        last_name: "ngosa",
        nrc: "347160/10/1",
        address: "50/23 new chawama ma plot lusaka zambia",
        ...passengerLogin.value

    }
}




const serverErrorEmpty = {
    value: {

    }
}


const serverError = {
    value: {
        error: {

        }
        
    }
}

const operatorLogin = {
    value: {
        email: "one@gmail.com",
        password: "1234"
    }
}


const authFailed = {
    value: {
        message: "authorization failed"
    
    }
}


const emptyObject = {
    value: {
        
    
    }
}



module.exports = {
    loginExample,
    passengerLogin,
    passengerRegister,


    //servers error
    serverError,
    serverErrorEmpty,



    authFailed,
    emptyObject,


    integer10,
    integer1
}