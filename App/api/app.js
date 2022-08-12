
const express = require('express')
const app = express();
const port = 3000;


const passengerRouter = require("./routes/passenger");
const operatorRouter = require("./routes/operator");


app.use('/passenger', passengerRouter);
app.use('/operator', operatorRouter);

app.listen( process.env.port ||port, () => {
  console.log(`Modern E bus system running at port ${port}`)
})
