
function sendFunc(res, string){
	res.sendFile(process.cwd() + "/public/views/" + string +".html");
}
// function queryFunc(connection, string,  callback){
// connection.query(string, function(err, rows, fields) {
//   	if (err) throw err;
//   	callback(rows)
// 		});
// }
module.exports = function(app,connection, table) {

	app.get("/home", function(req, res){
		sendFunc(res, "page");
	});

	app.post("/posttest", function(req, res){
		var string = "SELECT 1 + 1 AS solution"
		table.queryFunc(connection, string, function(data){
			res.send(data)
		})
	})
		app.get("/", function(req, res){
		sendFunc(res, "home");
	});

		app.get("*", function(req,res){
			res.send("404'd!")
		})
}