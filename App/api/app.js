
const express = require('express')
const cors = require("cors");
const app = express();
const port = 3000;
const bodyParser = require('body-parser')


const passengerAuthRouter = require("./routes/passengerAuth");
const operatorAuthRouter = require("./routes/operatorAuth");

const passengerProfileRouter = require("./routes/passengerProfile");



app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


app.use(cors());

//authentications routes
app.use('/auth/passenger', passengerAuthRouter);
app.use('/auth/operator', operatorAuthRouter);


app.use('/passenger/profile', passengerProfileRouter);

app.listen( process.env.port ||port, () => {
  console.log(`Modern E bus system running at port ${port}`)
})
