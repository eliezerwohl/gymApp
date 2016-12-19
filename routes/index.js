
function sendFunc(res, string){
	res.sendFile(process.cwd() + "/public/views/" + string +".html");
}

module.exports = function(app,connection) {

	app.get("/home", function(req, res){
		sendFunc(res, "page");
	});

	app.post("/posttest", function(req, res){
	connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  	if (err) throw err;
  	debugger
	  res.sendStatus(rows[0].solution);

		});
	})
		app.get("/", function(req, res){
		sendFunc(res, "home");
	});

		app.get("*", function(req,res){
			res.send("404'd!")
		})
}