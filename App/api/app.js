/*
        THIS IS A FINAL YEAR BACKEND APPLICATION CODE IN JAVASCRIPT, PRISMA, MYSQL
        AND EXPRESS.
*/
const express = require('express')
const cors = require("cors");
const app = express();
const port = 3000;
const bodyParser = require('body-parser')


const passengerAuthRouter = require("./routes/passengerAuth");
const operatorAuthRouter = require("./routes/operatorAuth");



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(cors());


app.use('/auth/passenger', passengerAuthRouter);
app.use('/auth/operator', operatorAuthRouter);

app.listen( process.env.port ||port, () => {
  console.log(`Modern E bus system running at port ${port}`)
})
