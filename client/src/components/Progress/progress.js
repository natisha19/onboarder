import React, { useEffect, useState } from "react";
import "./progress.css";

function ProgressCard({ value, total, label, color }) {
  const [progress, setProgress] = useState(0);
  const radius = 35;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const percentage = (value / total) * 100;
    setProgress(percentage);
  }, [value, total]);

  return (
    <div className="progress-card">
      <svg className="circle" width="80" height="80">
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#eee"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke={color}
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (progress / 100) * circumference}
          strokeLinecap="round"
          className="progress-bar"
        />
      </svg>
      <p style={{ color }}>{value} / {total}</p>
      <span style={{ color }}>{label}</span>
    </div>
  );
}

export default ProgressCard;
