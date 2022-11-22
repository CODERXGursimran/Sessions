// npm i mysql

const mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Simu.2001",
    database: "world_vision"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected to database!");

    var sql = "CREATE TABLE customers(name VARCHAR(255), age int)";

    // con.query("CREATE DATABASE mydb", function (err, result) {
    //     if (err) throw err;
    //     console.log("Result: " + "Database Created");
    // });

    // con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("Result: " + "Table created");
    // });

    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM children_info", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
    });
});