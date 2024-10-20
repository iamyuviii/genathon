import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './Dashboard.css';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [recentCallLogs, setRecentCallLogs] = useState([]);
  const [selectedCall, setSelectedCall] = useState(null);
  const [callDetails, setCallDetails] = useState(null); // For AI analysis (Phase 3)

  useEffect(() => {
    // Mock API data for dashboard
    setDashboardData({
      totalCalls: 1234,
      totalHours: 567,
    });

    // Mock API data for recent call logs
    setRecentCallLogs([
      { id: 1, type: 'Incoming', contact: 'John Doe', date: '2024-10-18', duration: '10m', time: '10:00 AM' },
      { id: 2, type: 'Outgoing', contact: 'Jane Smith', date: '2024-10-17', duration: '8m', time: '3:00 PM' },
      { id: 3, type: 'Incoming', contact: 'Mike Lee', date: '2024-10-16', duration: '15m', time: '1:00 PM' },
      { id: 4, type: 'Incoming', contact: 'Mike Lee', date: '2024-10-16', duration: '15m', time: '12:00 PM' },
      { id: 5, type: 'Incoming', contact: 'Mike Lee', date: '2024-10-16', duration: '15m', time: '7:00 PM' },
      { id: 6, type: 'Incoming', contact: 'Mike Lee', date: '2024-10-16', duration: '15m', time: '8:00 PM' },
      { id: 7, type: 'Incoming', contact: 'Mike Lee', date: '2024-10-16', duration: '15m', time: '2:00 PM' },
      // Add more mock logs
    ]);
  }, []);

  const fetchCallDetails = (callId) => {
    // Mock fetch for call details (replace with actual API call)
    setCallDetails({
      id: callId,
      transcript: 'Hello, how can I assist you today? The customer inquired about product details...',
      summary: 'Customer was inquiring about product details and requested a callback.',
      sentiment: 'Positive',
    });
  };

  const handleCallSelect = (callId) => {
    setSelectedCall(callId);
    fetchCallDetails(callId);
  };

  const callDataGraph = {
    labels: ['2024-10-12', '2024-10-13', '2024-10-14', '2024-10-15', '2024-10-16', '2024-10-17', '2024-10-18'],
    datasets: [
      {
        label: 'Calls Received',
        data: [5, 6, 4, 7, 5, 9, 8],
        borderColor: '#2b6cb0',
        backgroundColor: '#90cdf4',
        tension: 0.3,
      },
      {
        label: 'Calls Dialed',
        data: [4, 5, 3, 6, 4, 8, 7],
        borderColor: '#48bb78',
        backgroundColor: '#9ae6b4',
        tension: 0.3,
      },
    ],
  };

  if (!dashboardData) return <div>Loading...</div>;

  return (
    <div className="dashboard">
      <h2 className="heading">Dashboard</h2>

      {/* Graph Card */}
      <div className="card">
        <h3 className="card-title">Calls Received and Dialed</h3>
        <div className="graph-container">
          <Line data={callDataGraph} />
        </div>
      </div>
      &nbsp;
      {/* Total Calls and Hours */}
      <div className="grid">
        <div className="card">
          <h3 className="card-title">Total Calls</h3>
          <p className="card-value">{dashboardData.totalCalls}</p>
        </div>
        <div className="card">
          <h3 className="card-title">Total Hours</h3>
          <p className="card-value">{dashboardData.totalHours}</p>
        </div>
      </div>

      {/* Recent Call Logs */}
      <div className="calls-by-type">
        <h3 className="calls-by-type-title text-lg font-bold mb-3">Recent Call Logs</h3>
        <ul className="calls-by-type-list divide-y divide-gray-200">
          {recentCallLogs.map((log) => (
            <li
              key={log.id}
              className="calls-by-type-item p-4 bg-white rounded-lg shadow hover:bg-gray-100 cursor-pointer transition-all duration-300"
              onClick={() => handleCallSelect(log.id)}
            >
              <div className="flex justify-between">
                <div className="font-medium text-gray-700">{log.contact} ({log.type})</div>

              </div>
              <div className="flex justify-between mt-3">
                <span className="text-sm text-gray-600">Duration: {log.duration}</span>
                <br />
                <span className="text-sm text-gray-600">Time: {log.time}</span>
                <div className="text-sm text-gray-500">Date: {log.date}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>


      {/* Call Details Section */}
      {selectedCall && callDetails && (
        <div className="call-details">
          <h3 className="call-details-title">Call Details for Call #{selectedCall}</h3>
          <p className="call-transcript"><strong>Transcript:</strong> {callDetails.transcript}</p>
          <p className="call-summary"><strong>Summary:</strong> {callDetails.summary}</p>
          <p className="call-sentiment"><strong>Sentiment:</strong> {callDetails.sentiment}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
