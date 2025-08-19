// components/NewHireDetails.js
import React, { useState, useEffect } from "react";
import "./newhiredetails.css";

function NewHireDetails() {
  const [hires, setHires] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace /api/employees with your actual API endpoint on your server
    fetch("/api/employees")
      .then((res) => res.json())
      .then((data) => {
        // Assuming your server sends an array of hires/employees
        setHires(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch hires", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading hires...</div>;

  return (
    <div className="new-hire-details">
      <div className="search-filter">
        <input type="text" placeholder="Search hires..." />
        <button>Filter</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Owner</th>
            <th>Name</th>
            <th>Last Modified</th>
          </tr>
        </thead>
        <tbody>
          {hires.map((hire) => (
            <tr key={hire._id || hire.id}>
              <td>{hire._id || hire.id}</td>
              <td>
                <img
                  src={hire.owner || `https://i.pravatar.cc/40?u=${hire.email || hire._id}`}
                  alt="owner"
                  className="avatar"
                />
              </td>
              <td>{hire.name || hire.fullName || "No Name"}</td>
              <td>
                {hire.modified
                  ? new Date(hire.modified).toLocaleString()
                  : "No Date"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NewHireDetails;
