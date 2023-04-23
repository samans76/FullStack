import React from "react";
import { useNavigate } from "react-router-dom";
import "./jobCard.css";
import Profile from "../profile";

function JobCard(props) {
  console.log(props);
  const navigate = useNavigate();

  const descriptionLimited = () => {
    if (props.jobData?.description.length > 200) {
      return props.jobData?.description.slice(0, 196) + " ...";
    } else {
      return props.jobData?.description;
    }
  };

  return (
    <div
      className="jobCard m-4 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12"
      onClick={() => {
        navigate(`/jobPage/${props.jobData?.id}`);
      }}
    >
      <div className="cardHead">
        <img
          className="jobAvatar"
          src={props.jobData?.jobAvatars[0]}
          alt="avatar"
        />
        <div className="city">
          <div className="locationIcon">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="cityName">{props.jobData?.city}</div>
        </div>
      </div>

      <Profile
        className="profile"
        profileAvatar={props.jobData?.profileAvatar}
        name={props.jobData?.name}
        isOnline={props.jobData?.isOnline}
      />

      <div className="cardBody">
        <div className="jobName">{props.jobData?.jobName}</div>
        <div className="description">{descriptionLimited()}</div>
      </div>
    </div>
  );
}

export default JobCard;
