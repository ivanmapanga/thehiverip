const express = require("express");
const router = express.Router();
const app = require("../app")

router.post("", (req, res) => {
  const data = JSON.parse(req.body.data);
  app.connection.connnect(function() {
    var query =
      "INSERT into 'profile' (name, surname) VALUES('" +
      data.name +
      "', '" +
      data.surname +
      "')";
    app.connection.query(query, function(err, result, field) {
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
