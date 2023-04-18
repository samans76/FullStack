import React, { Component } from "react";
import NavBar from "../components/navbar";

class NotFound extends Component {
  state = {};
  render() {
    return (
      <div className="notFound vw-100 vh-100">
        <NavBar />
        <div
          className="message"
          style={{
            width: "910px",
            margin: "auto",
            textAlign: "center",
            marginTop: "320px",
            fontSize: "43px",
            padding: "61px",
            borderRadius: "30px",
            color: "white",
            backgroundColor: "#ec484bd0",
            border: "1px solid #ca3e3f",
          }}
        >
          متاسفانه این صفحه دیگر دسترس نیست.
        </div>
      </div>
    );
  }
}

export default NotFound;
