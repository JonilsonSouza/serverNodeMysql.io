'use strict'

const debug = require('debug')('nodestr:server');
const http = require('http');
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const router = express.Router();
const app = express();

const port = 9000;
app.set('port', port);

const server = http.createServer(app);

module.exports = router;
app.use('/', router);

server.listen(port);
console.log('Api rodando na porta  ' + port);