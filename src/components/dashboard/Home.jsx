import "./index.css";

import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h2>Welcome, Tushar!</h2>
      </div>
      <div className="status-section">
        <h3>System Status</h3>
        <div className="status-cards">
          <div className="status-card">
            <h4>Security System</h4>
            <p>Status: Armed</p>
          </div>
          <div className="status-card">
            <h4>Temperature</h4>
            <p>Current: 72°F</p>
          </div>
          <div className="status-card">
            <h4>Lights</h4>
            <p>Status: Off</p>
          </div>
        </div>
      </div>
      <div className="activity-section">
        <h3>Recent Activities</h3>
        <ul>
          <li>Door locked at 8:00 PM</li>
          <li>Living room lights turned off at 9:00 PM</li>
          <li>Thermostat set to 72°F at 7:30 AM</li>
        </ul>
      </div>
      <div className="actions-section">
        <h3>Quick Actions</h3>
        <button>Turn Off All Lights</button>
        <button>Lock All Doors</button>
      </div>
    </div>
  );
};

export default Home;
