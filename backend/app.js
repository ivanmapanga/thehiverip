const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors")

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "projectdb"
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Authorization, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

module.exports = app;

// app.post("/profile", function(req, res) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   var data = JSON.parse(req.body.data);
//   var name = data.name;
//   var surname = data.surname;
//   connection.connnect(function() {
//     var query =
//       "INSERT into 'profile' (name, surname) VALUES('" +
//       name +
//       "', '" +
//       surname +
//       "')";
//     connection.query(query, function(err, result, field) {
//       if (err) {
//         return res.status(500).send(err);
//       } else {
//         if (result.affectedRows > 0) {
//           res.end("success");
//         } else {
//           res.end("Try again");
//         }
//       }
//     });
//   });
// });
