'use strict'

const debug = require('debug')('nodestr:server');
const http = require('http');
const express = require('express');
const router = express.Router();
const app = express();

const port = 9000;
app.set('port', port);


const server = http.createServer(app);
app.use('/', router);

server.listen(port);
console.log('Api rodando na porta  ' + port);
module.exports = router;

