// components/EmployeeDetails.js
import React, { useState, useEffect } from "react";
import "./newhiredetails.css";

function EmployeeDetails() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/employees")
      .then((res) => res.json())
      .then((data) => {
        console.log("Employees fetched:", data); // Debug log
        setEmployees(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch employees", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading employees...</div>;

  return (
    <div className="employee-details">
      <div className="search-filter">
        <input type="text" placeholder="Search employees..." />
        <button>Filter</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Name</th>
            <th>Supervisor</th>
            <th>Last Modified</th>
          </tr>
        </thead>
            <tbody>
      {employees.map((employee) => (
        <tr key={employee._id}>
          <td>{employee._id}</td>
          <td>{employee.name || "No Name"}</td>
          <td>{employee.owner || "No Supervisor"}</td>
          <td>
            {employee.startDate
              ? new Date(employee.startDate).toLocaleString()
              : "No Date"}
          </td>
        </tr>
      ))}
    </tbody>

      </table>
    </div>
  );
}

export default EmployeeDetails;
