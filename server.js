const express = require('express');
const app = express();
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

require('./startup/routers')(app);
require('./startup/logging')();

require('./startup/db')();
    // app.listen(process.env.PORT || 3000);
    const PORT = process.env.PORT||'8080';
    app.listen(PORT);
    // app.listen(process.env.PORT || 3000);

console.log('Node Running for Movies API');
module.exports = app;