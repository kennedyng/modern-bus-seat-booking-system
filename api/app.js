
const express = require('express')
const cors = require("cors");
const app = express();
const port = 3000;
const bodyParser = require('body-parser')

//routes imports
const passengerAuthRouter = require("./routes/passengerAuth");
const operatorAuthRouter = require("./routes/operatorAuth");
const passengerProfileRouter = require("./routes/passengerProfile");
const operatorProfileRouter = require("./routes/operatorProfile");
const tripRouter = require("./routes/trip");
const routeRouter = require('./routes/route');
const receiptRouter = require('./routes/receipt');
const busRouter = require("./routes/bus");
const accountsRouter = require("./routes/accounts");

const swaggerDoc = require("swagger-ui-express");
const swaggerDocumentation = require("./helper/documentation")


app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/uploads/logo', express.static('uploads/logo'))

app.use(cors());

//authentications routes
app.use('/auth/passenger', passengerAuthRouter);
app.use('/auth/operator', operatorAuthRouter);


app.use('/passenger/profile', passengerProfileRouter);
app.use('/operator/profile', operatorProfileRouter);
app.use('/trip', tripRouter);
app.use('/route', routeRouter);
app.use('/receipt', receiptRouter);
app.use('/bus', busRouter);
app.use('/accounts', accountsRouter);

//documentation route
app.use("/documentation", swaggerDoc.serve)
app.use("/documentation", swaggerDoc.setup(swaggerDocumentation))


app.listen( process.env.PORT || port, () => {
  console.log(`Modern E bus system running at port ${ process.env.PORT || port}`)
})
