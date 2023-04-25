const Controller = require("./controller.js");
const jobsData = require("../database.js");

class SearchController extends Controller {
  searchAndFilter(search, filters) {
    const selectedJobs = [];
    for (const job of jobsData) {
      // search
      const availableInNames = !search || job.name.includes(search);
      const availableInJobNames = !search || job.jobName.includes(search);
      const acceptedBySearch = availableInNames || availableInJobNames;

      // filters
      const acceptedByFilterJob =
        !filters.job || job.jobName.includes(filters.job);
      const acceptedByFilterCity =
        !filters.city || job.city.includes(filters.city);
      const acceptedByFilterIsOnline =
        !filters.isOnline || job.isOnline === filters.isOnline;

      if (
        acceptedBySearch &&
        acceptedByFilterJob &&
        acceptedByFilterCity &&
        acceptedByFilterIsOnline
      ) {
        selectedJobs.push(job);
      }
    }
    return selectedJobs;
  }

  searchById(id) {
    const job = jobsData.find((obj) => obj.id.toString() === id);

    return job;
  }
}

module.exports = new SearchController();
