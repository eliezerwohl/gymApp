function sendFunc(res, string){
	res.sendFile(process.cwd() + "/public/views/" + string +".html");
}

module.exports = function(app) {

	app.get("/home", function(req, res){
		sendFunc(res, "page");
	});

	app.post("/posttest", function(req, res){
		debugger
		res.send("you did a post request")
	})
		app.get("/", function(req, res){
		sendFunc(res, "home");
	});

		app.get("*", function(req,res){
			res.send("404'd!")
		})
}