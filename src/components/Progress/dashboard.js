import React from "react";
import ProgressCard from "./progress";
import "./dashboard.css";

function Dashboard() {
  const tasks = [
    {
      id: "FIG-121",
      owner: "https://via.placeholder.com/30",
      name: "Hire 1",
      status: "Completed",
      lastModified: "04/08/2025 4:49 AM",
    },
    {
      id: "FIG-122",
      owner: "https://via.placeholder.com/30",
      name: "Hire 2",
      status: "In progress",
      lastModified: "04/08/2025 4:49 AM",
    },
    {
      id: "FIG-123",
      owner: "https://via.placeholder.com/30",
      name: "Hire 3",
      status: "Not started",
      lastModified: "04/08/2025 4:50 AM",
    },
  ];

  // Calculate counts dynamically
  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === "Completed").length;
  const inProgress = tasks.filter((t) => t.status === "In progress").length;
  const notStarted = tasks.filter((t) => t.status === "Not started").length;

  return (
    <div className="dashboard">
      <h2>Onboarding progress</h2>

      <div className="progress-section">
        <ProgressCard value={completed} total={total} label="Completed" color="#2563eb" />
        <ProgressCard value={inProgress} total={total} label="In progress" color="#6d28d9" />
        <ProgressCard value={notStarted} total={total} label="Not started" color="#ec4899" />
      </div>

      <div className="table-section">
        <div className="table-controls">
          <input type="text" placeholder="Search hires..." />
          <button>Filter</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Owner</th>
              <th>Name</th>
              <th>Progress</th>
              <th>Last Modified</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>
                  <img src={task.owner} alt="owner" className="avatar" />
                </td>
                <td>{task.name}</td>
                <td>
                  <span
                    className={`status ${task.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {task.status}
                    {task.status === "Completed"
                      ? " ✔"
                      : task.status === "In progress"
                      ? " ⏳"
                      : " ⭕"}
                  </span>
                </td>
                <td>{task.lastModified}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
