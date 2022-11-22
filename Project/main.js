const { response } = require('express');
const express =  require('express');
const mysql =  require('mysql2');
const app =  express();

const con = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "Simu.2001",
    database: "world_vision"
}); 

con.connect((err) => {
    if(err) console.log(err)
    else console.log("Connected!")
})

app.get("/children", (req,res) => {
    con.query("select * from children_info", function(err, result, fields){
        if(err) console.log(err)
        else res.send(result)
    })
})

app.get("/children/:Child_ID", (req, res) => {
    const fetchID = req.params.Child_ID
    con.query("Select * from children_info where Child_ID = ?", fetchID, function(err, result, fields) {
        if(err) console.log(err)
        else {
            res.send(result)
            
            // if(result.length == 0) res.send("id not present")
            // else res.send(result);

            // if(result.length == 0) console.log("id not present")
            // else {
                // var childid = JSON.parse(JSON.stringify(result))
                // console.log(value[0].Name)
                // console.log(value[0].age)
            // }
        }
    })
})


app.listen(3000, (err) => {
    if(err) console.log(err)
    else console.log("on port 3000")
})