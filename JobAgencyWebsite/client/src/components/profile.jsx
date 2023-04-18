import React, { Component } from "react";
import "./profile.css";

class Profile extends Component {
  state = {
    profileAvatar: this.props.profileAvatar,
    name: this.props.name,
    isOnline: this.props.isOnline,
  };

  render() {
    return (
      <div className="profile">
        <div className="avatar">
          <img
            className="profileAvatar"
            src={this.state.profileAvatar}
            alt="profile"
          />
          <div
            className="isOnlineCircle"
            style={{ backgroundColor: this.isOnlineColor() }}
          ></div>
        </div>

        <div className="text">
          <div className="name">{this.props.name}</div>
          <div className="isOnlineText">{this.isOnlineText()}</div>
        </div>
      </div>
    );
  }

  isOnlineColor() {
    if (this.props.isOnline) {
      return "#00b946";
    } else {
      return "#ababab";
    }
  }

  isOnlineText() {
    if (this.props.isOnline) {
      return "آنلاین";
    } else {
      return "آفلاین";
    }
  }
}

export default Profile;
