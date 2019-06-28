const express = require("express");
const mysql = require("mysql");
const router = express.Router();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "projectdb"
});

router.post("", (req, res) => {
  const data = JSON.parse(req.body.data);
  connection.connect(() => {
    var query =
      "insert into profile (name, surname) values ('" +
      data.name +
      "', '" +
      data.surname +
      "');";
    connection.query(query, (err, result, field) => {
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

module.exports = router;
