// express js server and sql connection
const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mysql connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "TdP42P1Rh19#00tv4i#5",
  database: "onlyFact",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to database!");
});

app.get("/fact", function (req, res) {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/fact/all", function (req, res) {
  connection.query("SELECT * FROM fact", function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.post("/fact/:id/vote", function (req, res) {
  const id = req.params.id;
  const { up = 0, down = 0 } = req.body;
  if (up == 0 && down == 0) {
    res.send("Missing up or down");
    return;
  }

  if (-1 > up || up > 1 || -1 > down || down > 1) {
    res.send("up or down must be 1 or -1");
    return;
  }

  connection.query(
    `UPDATE fact SET up = up + ${up}, down = down + ${down} WHERE id = ${id}`,
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
