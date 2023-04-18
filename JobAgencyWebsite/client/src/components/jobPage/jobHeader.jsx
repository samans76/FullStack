import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./jobHeader.css";
import Profile from "../profile";

function JobHeader(props) {
  const createButtons = () => {
    const buttons = [];
    // eslint-disable-next-line no-unused-vars
    for (const [i, avatar] of props.jobAvatars.entries()) {
      let button = <></>;
      if (i === 0) {
        button = (
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
            key={i}
          ></button>
        );
      } else {
        button = (
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={i.toString()}
            aria-label={"Slide " + (i + 1).toString()}
            key={i}
          ></button>
        );
      }

      buttons.push(button);
    }
    return buttons;
  };

  const createImages = () => {
    const images = [];

    for (const [i, avatar] of props.jobAvatars.entries()) {
      let image = <></>;
      if (i === 0) {
        image = (
          <div className="cImage carousel-item active" key={i}>
            <img src={avatar} className="d-block" alt="jobImage" />
          </div>
        );
      } else {
        image = (
          <div className="cImage carousel-item" key={i}>
            <img src={avatar} className="d-block" alt="jobImage" />
          </div>
        );
      }

      images.push(image);
    }

    return images;
  };
  const createCarousel = () => {
    return (
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">{createButtons()}</div>
        <div className="carousel-inner">{createImages()}</div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  };

  return (
    <div className="jobHeader">
      <div className="Carousel" style={{ marginBottom: "25px" }}>
        {createCarousel()}
      </div>

      <Profile
        className="profile"
        profileAvatar={props.profileAvatar}
        name={props.name}
        isOnline={props.isOnline}
      />
    </div>
  );
}

export default JobHeader;

// id
// profileAvatar
// name
// isOnline
// jobName
// jobAvatars
// city
// description
// catalog
