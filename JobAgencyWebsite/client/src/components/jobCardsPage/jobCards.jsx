import React, { Component } from "react";
import JobsContext from "../../contexts/jobsContext.js";
import JobCard from "./jobCard.jsx";

class JobCards extends Component {
  static contextType = JobsContext;

  render() {
    return (
      <div className="jobCards row d-flex justify-content-center align-items-center">
        {this.createCards()}
      </div>
    );
  }

  createCards() {
    const cards = [];
    if (this.context.jobsData !== null) {
      for (const job of this.context.jobsData) {
        const card = (
          <JobCard
            jobData={job}
            key={job.id}
            // id={job.id}
            // key={job.id}
            // profileAvatar={job.profileAvatar}
            // name={job.name}
            // isOnline={job.isOnline}
            // jobName={job.jobName}
            // jobAvatars={job.jobAvatars}
            // city={job.city}
            // description={job.description}
            // catalog={job.catalog}
          />
        );
        cards.push(card);
      }
    }

    return cards;
  }
}

export default JobCards;
