import React, { useState } from 'react';

const Export = () => {
  const [exportType, setExportType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleExport = () => {
    // TODO: Implement export functionality
    // This should call your backend API to generate and download the export
    console.log('Exporting:', { exportType, startDate, endDate });
    alert('Export functionality not implemented yet.');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Export Data</h2>
      <div className="space-y-4">
        <select 
          value={exportType} 
          onChange={(e) => setExportType(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select export type</option>
          <option value="callLogs">Call Logs</option>
          <option value="recordings">Recordings</option>
          <option value="statistics">Statistics</option>
        </select>
        <div className="flex space-x-4">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="block w-1/2 p-2 border border-gray-300 rounded-md"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="block w-1/2 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button 
          onClick={handleExport} 
          disabled={!exportType || !startDate || !endDate}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
        >
          Export
        </button>
      </div>
    </div>
  );
};

export default Export;