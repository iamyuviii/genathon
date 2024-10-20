import React, { useState, useEffect } from 'react';

const CallPlayback = () => {
  const [recordings, setRecordings] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);

  useEffect(() => {
    // TODO: Replace with actual API call
    // fetchRecordings().then(setRecordings);
    
    // Mock data for demonstration
    setRecordings([
      { id: 1, date: '2024-10-19', employee: 'John Doe', duration: '00:05:23', audioUrl: '/api/recordings/1' },
      { id: 2, date: '2024-10-19', employee: 'Jane Smith', duration: '00:12:45', audioUrl: '/api/recordings/2' },
      // Add more mock data as needed
    ]);
  }, []);

  const handlePlay = (audioUrl) => {
    if (currentAudio) {
      currentAudio.pause();
    }
    const audio = new Audio(audioUrl);
    audio.play();
    setCurrentAudio(audio);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Call Playback</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Date</th>
            <th className="border p-2">Employee</th>
            <th className="border p-2">Duration</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {recordings.map((recording) => (
            <tr key={recording.id}>
              <td className="border p-2">{recording.date}</td>
              <td className="border p-2">{recording.employee}</td>
              <td className="border p-2">{recording.duration}</td>
              <td className="border p-2">
                <button 
                  onClick={() => handlePlay(recording.audioUrl)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Play
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CallPlayback;