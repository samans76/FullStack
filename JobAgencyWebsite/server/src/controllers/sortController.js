const Controller = require("./controller.js");

class SortController extends Controller {
  sort(sort, jobs) {
    if (sort === null || sort === "noSort") {
      jobs = this.sortByNewest(jobs);
    } else if (sort === "mostExpensive") {
      jobs = this.sortByMostExpensive(jobs);
    } else if (sort === "cheapest") {
      jobs = this.sortByCheapest(jobs);
    } else if (sort === "newest") {
      jobs = this.sortByNewest(jobs);
    } else if (sort === "oldest") {
      jobs = this.sortByOldest(jobs);
    }

    return jobs;
  }

  sortByNewest(jobs) {
    jobs.sort((a, b) => b.id - a.id);
    return jobs;
  }
  sortByOldest(jobs) {
    jobs.sort((a, b) => a.id - b.id);
    return jobs;
  }
  sortByMostExpensive(jobs) {
    jobs.sort((a, b) => b.price - a.price);
    return jobs;
  }
  sortByCheapest(jobs) {
    jobs.sort((a, b) => a.price - b.price);
    return jobs;
  }
}

module.exports = new SortController();
