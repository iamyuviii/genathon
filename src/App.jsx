import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CallLog from './components/CallLog';
import CallPlayback from './components/CallPlayback';
import Export from './components/Export';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <header className="bg-gray-800 text-white p-4">
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-gray-300">Dashboard</Link></li>
              <li><Link to="/call-log" className="hover:text-gray-300">Call Log</Link></li>
              <li><Link to="/call-playback" className="hover:text-gray-300">Call Playback</Link></li>
              <li><Link to="/export" className="hover:text-gray-300">Export</Link></li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/call-log" element={<CallLog />} />
            <Route path="/call-playback" element={<CallPlayback />} />
            <Route path="/export" element={<Export />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;