import React from "react";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/navbar";
import JobsContext from "../contexts/jobsContext";
import JobHeader from "../components/jobPage/jobHeader";
import JobBody from "../components/jobPage/jobBody";

function JobPage() {
  const jobsContext = useContext(JobsContext);
  const params = useParams();
  const navigate = useNavigate();

  const makePageBody = () => {
    if (jobsContext.jobsData !== null) {
      if (params.id >= jobsContext.jobsData.length) {
        return navigate(`/notFound}`);
      }
      const job = jobsContext.jobsData[params.id];
      return (
        <>
          <div className="jobHead" style={{ margin: "50px 0 30px 0" }}>
            <JobHeader
              id={job.id}
              profileAvatar={job.profileAvatar}
              name={job.name}
              isOnline={job.isOnline}
              jobName={job.jobName}
              jobAvatars={job.jobAvatars}
              city={job.city}
              description={job.description}
              catalog={job.catalog}
            />
          </div>
          <JobBody
            id={job.id}
            profileAvatar={job.profileAvatar}
            name={job.name}
            isOnline={job.isOnline}
            jobName={job.jobName}
            jobAvatars={job.jobAvatars}
            city={job.city}
            description={job.description}
            catalog={job.catalog}
          />
        </>
      );
    }
  };

  return (
    <div className="jobPage">
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {makePageBody()}
      </div>
    </div>
  );
}

export default JobPage;
