// EmployeeTasks.js
import React, { useState } from "react";
import "./employeetasks.css"; // Create corresponding CSS for styling

const initialData = {
  projects: 18,
  projectsCompleted: 2,
  tasks: 132,
  tasksCompleted: 28,
  productivity: 76,
  productivityDelta: 5,
  activeProjects: [
    {
      id: 1,
      name: "File Management App",
      icon: "📦",
      hours: 34,
      priority: "Medium",
      members: 5,
      progress: 15,
    },
    {
      id: 2,
      name: "Slack Team UI Design",
      icon: "💬",
      hours: 34,
      priority: "Medium",
      members: 5,
      progress: 25,
    },
    {
      id: 3,
      name: "GitHub Satellite",
      icon: "🐙",
      hours: 34,
      priority: "Medium",
      members: 5,
      progress: 15,
    },
    {
      id: 4,
      name: "3D Character Modelling",
      icon: "🎨",
      hours: 34,
      priority: "High",
      members: 5,
      progress: 15,
    },
    {
      id: 5,
      name: "Webapp Design System",
      icon: "🌐",
      hours: 34,
      priority: "High",
      members: 5,
      progress: 15,
    },
  ],
};

const priorityColors = {
  High: "#ff6161",
  Medium: "#ffb700",
  Low: "#3cc480",
};

function EmployeeTasks() {
  const [data, setData] = useState(initialData);

  return (
    <div className="employee-tasks-container">
      {/* Dashboard stats */}
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <div className="card-title">Projects</div>
          <div className="card-value">{data.projects}</div>
          <div className="card-sub">{data.projectsCompleted} Completed</div>
        </div>
        <div className="dashboard-card">
          <div className="card-title">Active Task</div>
          <div className="card-value">{data.tasks}</div>
          <div className="card-sub">{data.tasksCompleted} Completed</div>
        </div>
        <div className="dashboard-card">
          <div className="card-title">Productivity</div>
          <div className="card-value">{data.productivity}%</div>
          <div className="card-sub" style={{ color: "#3cc480" }}>
            +{data.productivityDelta}% Completed
          </div>
        </div>
      </div>

      {/* Active Projects Table */}
      <div className="projects-section">
        <div className="section-header">
          <h3>Active Projects</h3>
          <button className="create-btn">Create New Project</button>
        </div>
        <table className="projects-table">
          <thead>
            <tr>
              <th>Project name</th>
              <th>Hours</th>
              <th>Priority</th>
              <th>Members</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {data.activeProjects.map((project) => (
              <tr key={project.id}>
                <td>
                  <span className="project-icon">{project.icon}</span>
                  {project.name}
                </td>
                <td>{project.hours}</td>
                <td>
                  <span
                    className="priority-label"
                    style={{
                      background: priorityColors[project.priority] || "#ffb700",
                    }}
                  >
                    {project.priority}
                  </span>
                </td>
                <td>
                  {/* Just a placeholder for avatars */}
                  <div className="avatars">
                    {[...Array(project.members)].map((_, i) => (
                      <span className="avatar" key={i}>
                        👤
                      </span>
                    ))}
                  </div>
                </td>
                <td>
                  <div className="progress-bar-outer">
                    <div
                      className="progress-bar-inner"
                      style={{
                        width: `${project.progress}%`,
                        background: project.progress > 20 ? "#3cc480" : "#ff6161",
                      }}
                    ></div>
                  </div>
                  <span>{project.progress}%</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="view-all">View All Projects</div>
      </div>
    </div>
  );
}

export default EmployeeTasks;
