exports.createTable =function(connection){
	var userTable ="Create TABLE user(" 
	userTable+= "id INT(11) AUTO_INCREMENT,"
	userTable += "username varchar(255), password varchar(255), PRIMARY KEY(id))"
	connection.query(userTable, function(err, rows, fields) {
	})
}

exports.queryFunc = function(connection, string,  callback){
connection.query(string, function(err, rows, fields) {
  	if (err) throw err;
  	callback(rows)
		});
}

exports.showTables = function(){
	return "SHOW TABLES LIKE 'user';";
}