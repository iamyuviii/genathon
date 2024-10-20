import React, { useState, useEffect } from 'react';

const CallLog = () => {
  const [calls, setCalls] = useState([]);
  const [filteredCalls, setFilteredCalls] = useState([]);
  const [selectedCall, setSelectedCall] = useState(null); // Store selected call details
  const [dateFilter, setDateFilter] = useState('');
  const [employeeFilter, setEmployeeFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  useEffect(() => {
    // Fetch call logs from an API
    fetch('/api/call-logs') // Replace with your actual endpoint
      .then((response) => response.json())
      .then((data) => setCalls(data))
      .catch((error) => console.error('Error fetching call logs:', error));
  }, []);

  useEffect(() => {
    setFilteredCalls(
      calls.filter((call) =>
        call.date.includes(dateFilter) &&
        call.employee.toLowerCase().includes(employeeFilter.toLowerCase()) &&
        call.type.toLowerCase().includes(typeFilter.toLowerCase())
      )
    );
  }, [calls, dateFilter, employeeFilter, typeFilter]);

  const handleCallClick = (callId) => {
    // Fetch the selected call's details (transcript, summary, sentiment)
    fetch(`/api/call-logs/${callId}`) // Replace with actual endpoint
      .then((response) => response.json())
      .then((data) => setSelectedCall(data))
      .catch((error) => console.error('Error fetching call details:', error));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Call Log</h2>
      <div className="mb-4 flex space-x-4">
        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="border rounded p-2"
        />
        <input
          type="text"
          placeholder="Filter by employee"
          value={employeeFilter}
          onChange={(e) => setEmployeeFilter(e.target.value)}
          className="border rounded p-2"
        />
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">All Types</option>
          <option value="incoming">Incoming</option>
          <option value="outgoing">Outgoing</option>
        </select>
      </div>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Date</th>
            <th className="border p-2">Employee</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Duration</th>
          </tr>
        </thead>
        <tbody>
          {filteredCalls.map((call) => (
            <tr key={call.id} onClick={() => handleCallClick(call.id)} className="cursor-pointer">
              <td className="border p-2">{call.date}</td>
              <td className="border p-2">{call.employee}</td>
              <td className="border p-2">{call.type}</td>
              <td className="border p-2">{call.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedCall && (
        <div className="mt-5 p-4 border rounded">
          <h3 className="text-xl font-semibold">Call Details</h3>
          <p><strong>Transcript:</strong> {selectedCall.transcript}</p>
          <p><strong>Summary:</strong> {selectedCall.summary}</p>
          <p><strong>Sentiment:</strong> {selectedCall.sentiment}</p>
        </div>
      )}
    </div>
  );
};

export default CallLog;
