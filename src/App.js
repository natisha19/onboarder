// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from "./components/topnav";
import SideNav from "./components/sidenav";
import Dashboard from "./components/Progress/dashboard";
import NewHireDetails from "./components/Newhiredetails/newhiredetails"; // new file
import EmployeeTasks from "./components/employeetasks/employeetasks";
import TicketsTable from "./components/tickets/tickethandling";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <TopNav />
        <div className="main-layout">
          <SideNav />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/new-hires" element={<NewHireDetails />} />
              <Route path="/employee-tasks" element={<EmployeeTasks />} />
              <Route path="/ticket-handle" element={<TicketsTable />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
