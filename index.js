'use strict'

const mysql = require('mysql');
const bodyParser = require('body-parser');
const server = require('./server.js');
const express = require('express');

const router = express.Router();


router.get('/users',(req,res,rows)=>{
	execSqlQuery("SELECT * FROM usuarios",res);
});





function execSqlQuery(sqlInsert, res) {
      const connection = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "root",
        database: "banconodejs"
    });
    connection.query(sqlInsert, function (error, results, fields) {
        if (error)
            console.log('executou!');

        else
            res.json(results);
        connection.end();
        console.log('executou!');
    });
}

