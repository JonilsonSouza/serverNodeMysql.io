const express = require('express');

const app = express();

const index = require('./router/index');

const bodyParser = require('body-parser');

app.use('/',index);

module.exports = app;