// SideNav.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./sidenav.css";

function SideNav() {
  return (
    <div className="sidenav">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Progress
          </NavLink>
        </li>
        <li>
          <NavLink to="/new-hires" className={({ isActive }) => (isActive ? "active" : "")}>
            New hire details
          </NavLink>
        </li>
        <li>SendMail</li>
        <li><NavLink to="/employee-tasks">Employee tasks</NavLink></li>
        <li><NavLink to="/ticket-handle">Tickets</NavLink></li>
      </ul>
    </div>
  );
}

export default SideNav;
