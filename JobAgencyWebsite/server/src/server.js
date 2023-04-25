global.config = require("./config");
const express = require("express");
let jobsData = require("./database.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const SearchJobsController = require("./controllers/searchJobsController.js");
const SortController = require("./controllers/sortController.js");
const PageController = require("./controllers/pageController.js");

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.listen(config.port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${config.port}`);
});

app.get("/", function (req, res) {
  res.send("Get data using /jobs route");
});

app.post("/jobs", function (req, res) {
  let searchedJobs = SearchJobsController.searchAndFilter(
    req.body.searchState.search,
    req.body.searchState.filters
  );
  searchedJobs = SortController.sort(req.body.searchState.sort, searchedJobs);
  searchedJobs = PageController.handleJobsPage(
    req.body.pageNumber,
    searchedJobs
  );

  res
    .status(200)
    .json({ jobsData: searchedJobs, searchState: req.body.searchState });
});

app.get("/jobs/:id", function (req, res) {
  const job = SearchJobsController.searchById(req.params.id);
  if (!job) {
    res.status(200).json({ jobName: "notFound" });
  } else {
    res.status(200).json(job);
  }
});

// app.post("/search", function (req, res) {
//   console.log(req.body);
//   let searchedJobs = SearchJobsController.searchBox(req, res);
//   searchedJobs = SortController.sort(req, res, searchedJobs);
//   res.status(200).json(searchedJobs);
// });
