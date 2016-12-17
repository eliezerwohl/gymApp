var express = require("express");
var app = express();
var PORT = process.env.PORT || 9000;

var logger = require("morgan");
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

require('./routes')(app);


app.listen(PORT, function(){
	console.log("listening on " + PORT)
})