'use strict'
const app = require('./app.js');
const debug = require('debug')('nodestr:server');
const http = require('http');

const port = 9000;
app.set('port', port);


const server = http.createServer(app);

server.listen(port);

console.log('Api rodando na porta  ' + port);


