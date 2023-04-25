const Controller = require("./controller.js");

class PageController extends Controller {
  handleJobsPage(page, jobs) {
    const pageSize = 8;

    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize - 1;
    const pageJobs = jobs.slice(startIndex, endIndex + 1);

    return pageJobs;
  }
}

module.exports = new PageController();
