var express = require("express");
var app = express();
var PORT = process.env.PORT || 9000;

var logger = require("morgan");
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log("listening on " + PORT)
})