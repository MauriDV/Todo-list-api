var mysql = require('mysql');

class Db {
  constructor(host,user,pass,dbName){
    this.host = host;
    this.user = user;
    this.pass = pass;
    this.dbName = dbName;
    this.connection = null;
  }
  connect(){
    var config = {
  		host: this.host,
  		user: this.user,
  		password: this.pass,
  		database: this.dbName,
  		charset: 'UTF8_GENERAL_CI'
  	};
  	var connection=mysql.createConnection(config);
  	connection.connect(function(err){
  		if (err) {
  			console.log('Error in db');
  		}else{
  			console.log('Connection with: '+ config.database);
  		}
  	});
  	this.connection = connection;
  }
}

module.exports = Db;
