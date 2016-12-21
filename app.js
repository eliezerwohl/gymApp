var express = require("express");
var app = express();
var PORT = process.env.PORT || 9000;
var password = require("./ignore.js");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  port: 3306,
  password:password.password,
  database : 'testdb'
});
connection.query("SHOW TABLES LIKE 'yourtable';", function(err, rows, fields) {
	debugger
  	if (err) throw err;
  	console.log(err)
  	if (rows.length > 0) {
  		console.log("Db exists")
  	}
  	else{
  		//create table
  		console.log("creating table")
  	}
 
});


 
var logger = require("morgan");
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

require('./routes')(app, connection);


app.listen(PORT, function(){
	console.log("listening on " + PORT)
})