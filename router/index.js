'use strict'

const express = require('express');

const router = express.Router();

const app = express();

const conexao= require('../connection/conexao');

module.exports = router;
app.use('/', router);

router.get('/ola',(req,res)=>{
	res.send('Ola mundo');
});

router.get('/usuario',(req,res)=>{
	conexao('SELECT * FROM usuarios',res);
});
