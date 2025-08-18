// TicketsTable.js
import React from "react";

const ticketsData = [
  {
    ticketNo: "B653421",
    subject: "PPO inquiry",
    status: "Responded",
    date: "04/08/2025",
    responded: true,
  },
  {
    ticketNo: "B762817",
    subject: "Wage inquiry",
    status: "Unread",
    date: "04/08/2025",
    responded: false,
  },
];

const statusStyles = {
  Responded: {
    background: "#f6fff6",
    color: "#17a01c",
    border: "1px solid #17a01c",
    icon: "✅",
  },
  Unread: {
    background: "#fff6f6",
    color: "#d83b36",
    border: "1px solid #d83b36",
    icon: "❌",
  },
};

const TicketsTable = () => (
  <div style={{ padding: "0 0 32px 0" }}>
    <table style={{
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "sans-serif",
      boxShadow: "0 2px 10px #f7f7f7"
    }}>
      <thead>
        <tr style={{ background: "#f7f7f7", color: "#949494" }}>
          <th style={thStyle}>Ticket No.</th>
          <th style={thStyle}>Subject</th>
          <th style={thStyle}>Status</th>
          <th style={thStyle}>Date raised</th>
          <th style={thStyle}>Action</th>
        </tr>
      </thead>
      <tbody>
        {ticketsData.map((t) => (
          <tr key={t.ticketNo} style={{ borderBottom: "1px solid #ebebeb" }}>
            <td style={tdStyle}>{t.ticketNo}</td>
            <td style={tdStyle}>{t.subject}</td>
            <td style={tdStyle}>
              <span
                style={{
                  display: "inline-block",
                  padding: "3px 13px",
                  borderRadius: "16px",
                  fontSize: 13,
                  fontWeight: 600,
                  marginRight: 5,
                  background: statusStyles[t.status].background,
                  color: statusStyles[t.status].color,
                  border: statusStyles[t.status].border,
                }}
              >
                {t.status} <span style={{ fontSize: 14 }}>{statusStyles[t.status].icon}</span>
              </span>
            </td>
            <td style={tdStyle}>{t.date}</td>
            <td style={tdStyle}>
              <button
                style={{
                  background: "#77ec46",
                  color: "#fff",
                  padding: "7px 17px",
                  borderRadius: "7px",
                  border: "none",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontSize: 13,
                  boxShadow: "0 1px 4px #ddffec44"
                }}
              >
                Respond
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Simple inline styles for table headers and cells
const thStyle = {
  padding: "12px 13px",
  fontWeight: 800,
  textAlign: "left",
  fontSize: 15,
};

const tdStyle = {
  padding: "12px 13px",
  fontWeight: 500,
  fontSize: 15,
  background: "#fff",
};

export default TicketsTable;
