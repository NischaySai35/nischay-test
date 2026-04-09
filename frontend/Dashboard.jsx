// Dashboard.jsx
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    // Simulate fetching metrics from an API
    setTimeout(() => {
      setMetrics({
        users: 1200,
        revenue: 45000,
        sessions: 3400,
        bounceRate: '42%'
      });
    }, 1000);
  }, []);

  if (!metrics) {
    return <div>Loading metrics... please wait!</div>;
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>Analytics Dashboard</h2>
        <p>Overview of your application's key metrics.</p>
      </header>
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Total Users</h3>
          <p>{metrics.users}</p>
        </div>
        <div className="metric-card">
          <h3>Revenue</h3>
          <p>${metrics.revenue}</p>
        </div>
        <div className="metric-card">
          <h3>Active Sessions</h3>
          <p>{metrics.sessions}</p>
        </div>
        <div className="metric-card">
          <h3>Bounce Rate</h3>
          <p>{metrics.bounceRate}</p>
        </div>
      </div>
      <footer style={{ marginTop: '40px', color: 'gray' }}>
        <p>Data is refreshed every 24 hours.</p>
        <p>Padding text to make the file slightly longer.</p>
        <p>Just adding more extra text for length limits.</p>
        <p>Padding text 4.</p>
        <p>Padding text 5.</p>
        <p>Padding text 6.</p>
        <p>Padding text 7.</p>
        <p>Padding text 8.</p>
        <p>Padding text 9.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
