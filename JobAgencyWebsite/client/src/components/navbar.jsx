import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="navBar">
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          style={{ backgroundColor: "#61230e" }}
        >
          <div className="container">
            <NavLink className="navbar-brand fs-1 fw-bold" to="/">
              Job Agency
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto fs-2">
                <li className="nav-item m-3">
                  <NavLink className="nav-link" to="/">
                    صفحه اصلی
                  </NavLink>
                </li>
                <li className="nav-item m-3">
                  <NavLink className="nav-link" to="/">
                    باشگاه مشتریان
                  </NavLink>
                </li>
                <li className="nav-item m-3">
                  <NavLink className="nav-link" to="/">
                    درباره ما
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
