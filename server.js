const express = require('express');
const app = express();
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const port = process.env.PORT||8080;
app.listen(port, function() {
    console.log("App is running on port " + port);
});
app.use('/',function(req,res,next){
    res.send("Node running");
    next();
});
require('./startup/routers')(app);
require('./startup/logging')();

require('./startup/db')();
    // app.listen(process.env.PORT || 3000);
   
    // app.listen(process.env.PORT || 3000);

console.log('Node Running for Movies API');
module.exports = app;