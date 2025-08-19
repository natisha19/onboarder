import React from "react";
import "./topnav.css";

function TopNav() {
  return (
    <div className="topnav">
      <div className="logo">Shadow Coach</div>
      <div className="nav-links">
        <a href="#">home</a>
        <a href="#">support</a>
        <a href="#">account</a>
      </div>
      <div className="user-info">
        <img
          src="https://via.placeholder.com/30"
          alt="profile"
          className="avatar"
        />
        <span>Welcome back, Siddhesh</span>
      </div>
    </div>
  );
}

export default TopNav;
