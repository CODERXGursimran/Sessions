// npm i mysql

const mysql = require('mysql2');

const dbConnection = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "Simu.2001",
    database: "world_vision"
});

const getChildById = (ChildId) => {
    return dbConnection.query("SELECT * FROM children_info where Child_ID = 1", function(err, result, fields) {
        if (err) throw err;
        console.log(result)
        return result;
    });
}

// dbConnection.connect(function(err) {
//     if(err) throw err;
//     console.log("Connected to database!");

//     var sql = "CREATE TABLE customers(name VARCHAR(255), age int)";

    // con.query("CREATE DATABASE mydb", function (err, result) {
    //     if (err) throw err;
    //     console.log("Result: " + "Database Created");
    // });

    // con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("Result: " + "Table created");
    // });

//     dbConnection.connect(function(err) {
//         if (err) throw err;
//         dbConnection.query("SELECT * FROM children_info", function (err, result, fields) {
//           if (err) throw err;
//           console.log(result);
//         });
//     });
// });

// exports.getChildById = getChildById