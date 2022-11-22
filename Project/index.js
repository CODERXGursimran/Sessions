// import getChildById from './demo_db_connection.js'

// steps followed: -
// npm init -y (package.json created)
// npm i express (express installed / package-lock.json created)
// in package.json added [start: index.js]
// create index.jsb
// write npm start in new terminal

const express =  require('express');
var bodyParser = require('body-parser');

const dbConnection = require('./demo_db_connection')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const port = 4567;  // can be any range

const dogs = [ 
    { name: "Limbo", breed: "Husky"},
    { name: "Sam", breed: "Labrador"}
]

app.get("/", (req, res) => {
    // res.send("Hello people!");
    res.json(dogs);
})

app.get("/about", (req, res) => {
    res.send("Tell about yourself!");
})

app.get("/dogs/:id", (req, res) => {
    // res.send("Tell about specific dog! " + req.params.id);
    res.json(dogs[parseInt(req.params.id) - 1]);
})

app.post("/dogs", (req, res) => {
    console.log(req.body);
    res.json({ message: "ok" });
})

app.put("/dogs/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.json({ message: "updating dog " + req.params.id });
})

app.delete("/dogs/:id", (req, res) => {
    console.log(req.params.id);
    res.json({ message: "deleting dog " + req.params.id });
})



app.get("/children/:childId", (req, res) => {
        
        dbConnection.query("select * from mytable", function(error, result, fields) {
        console.log(childInfo); // undefined
        res.send(childInfo);
    })
})

app.listen(port, () => {
    console.log('Listening on port ' + port);
})

// CRUD -> create, read, update, delete
// HTTP -> POST, GET, PUT(for Update) /PATCH, DELETE



