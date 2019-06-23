const express = require("express");
const mysql = require("mysql");
const bodyparser = require("body-parser");

const app = express();

app.use(
  bodyparser.urlencoded({
    extended: false
  })
);
app.use(bodyparser.json());
app.listen(8083, () => console.log("node is running on port 8083"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "projectdb"
});

app.post("/profile", function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  var data = JSON.parse(req.body.data);
  var name = data.name;
  var surname = data.surname;
  connection.connnect(function() {
    var query =
      "INSERT into 'profile' (name, surname) VALUES('" +
      name +
      "', '" +
      surname +
      "')";
    connection.query(query, function(err, result, field) {
      if (err) {
        return res.status(500).send(err);
      } else {
        if (result.affectedRows > 0) {
          res.end("success");
        } else {
          res.end("Try again");
        }
      }
    });
  });
});
