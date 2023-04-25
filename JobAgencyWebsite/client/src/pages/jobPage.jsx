import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/navbar";
import JobHeader from "../components/jobPage/jobHeader";
import JobBody from "../components/jobPage/jobBody";
import { configs } from "../config.js";

function JobPage() {
  const params = useParams();
  const navigate = useNavigate();

  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    getJobData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getJobData() {
    const res = await axios.get(`${configs.serverAddress}/jobs/${params?.id}`);
    setJobData(res.data);
  }

  const makePageBody = () => {
    if (jobData) {
      if (jobData.jobName === "notFound") {
        return navigate(`/notFound}`);
      }

      return (
        <>
          <div className="jobHead" style={{ margin: "50px 0 30px 0" }}>
            <JobHeader jobData={jobData} />
          </div>
          <JobBody jobData={jobData} />
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
