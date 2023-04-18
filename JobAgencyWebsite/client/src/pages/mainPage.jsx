import React, { Component } from "react";
import NavBar from "../components/navbar";
import JobCards from "../components/jobCardsPage/jobCards";

class MainPage extends Component {
  render() {
    return (
      <div className="mainPage">
        <NavBar />
        <div className="container">
          <JobCards />
        </div>
      </div>
    );
  }
}

export default MainPage;
