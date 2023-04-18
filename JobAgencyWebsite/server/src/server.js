global.config = require("./config");
const express = require("express");
const jobsData = require("./database.js");
const cors = require("cors");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(config.port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${config.port}`);
});

app.get("/", function (req, res) {
  res.send("Get data using /jobs route");
});

console.log(jobsData);
app.get("/jobs", function (req, res) {
  res.status(200).json(jobsData);
});
