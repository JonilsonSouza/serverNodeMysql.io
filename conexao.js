'use strict'
const mysql = require('mysql');

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

module.exports = execSqlQuery;

