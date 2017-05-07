var mysql = require('mysql');

class Db {
  
  //Constructor
  constructor(host,user,pass,dbName){
    this.host = host;
    this.user = user;
    this.pass = pass;
    this.dbName = dbName;
    this.connection = null;
  }

  //Establish connection to the database
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
  		}
  	});
  	this.connection = connection;
  }
}

module.exports = Db;
