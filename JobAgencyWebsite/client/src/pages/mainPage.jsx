import React, { Component } from "react";
import NavBar from "../components/navbar";
import JobCards from "../components/jobCardsPage/jobCards";
import SearchBox from "../components/searchBox";
class MainPage extends Component {
  render() {
    return (
      <div className="mainPage">
        <NavBar />
        <div className="container">
          <div className="row">
            <div
              className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6 order-sm-2 d-flex flex-row justify-content-center align-items-start"
              style={{ marginTop: "15px" }}
            >
              <SearchBox />
            </div>
            <div className="col-xl-9 col-lg-6 col-md-6 col-sm-6 col-xs-6 order-sm-1">
              <JobCards />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// d-flex justify-content-center
export default MainPage;
