var express = require("express");
var app = express();
var PORT = process.env.PORT || 9000;
var password = require("./ignore.js");
var mysql      = require('mysql');
var table = require("./server/controllers/tableController.js")
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  port: 3306,
  password:password.password,
  database : 'gymappdb'
});


table.queryFunc(connection, table.showTables(), function(rows){
   if (rows.length > 0) {
     console.log("Db exists")
   }
   else{
    console.log("create db")
    table.createTable(connection);
   }
})

var logger = require("morgan");
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

require('./routes')(app, connection, table);


app.listen(PORT, function(){
	console.log("listening on " + PORT)
})