import React from "react";
import { useNavigate } from "react-router-dom";
import "./jobCard.css";
import Profile from "../profile";

function JobCard(props) {
  const navigate = useNavigate();

  const descriptionLimited = () => {
    if (props.description.length > 200) {
      return props.description.slice(0, 196) + " ...";
    } else {
      return props.description;
    }
  };

  return (
    <div
      className="jobCard m-4 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12"
      onClick={() => {
        navigate(`/jobPage/${props.id}`);
      }}
    >
      <div className="cardHead">
        <img className="jobAvatar" src={props.jobAvatars[0]} alt="avatar" />
        <div className="city">
          <div className="locationIcon">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="cityName">{props.city}</div>
        </div>
      </div>

      <Profile
        className="profile"
        profileAvatar={props.profileAvatar}
        name={props.name}
        isOnline={props.isOnline}
      />

      <div className="cardBody">
        <div className="jobName">{props.jobName}</div>
        <div className="description">{descriptionLimited()}</div>
      </div>
    </div>
  );
}

export default JobCard;
