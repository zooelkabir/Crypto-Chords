// src/App.js
import React, { useState } from 'react';
import TransactionVisualizer from './components/TransactionVisualizer';
import Controls from './components/Controls';

function App() {
  const [isBatchMode, setIsBatchMode] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMode = () => setIsBatchMode(!isBatchMode);
  const muteAudio = () => {
    setIsMuted(!isMuted);
    Tone.Destination.mute = !Tone.Destination.mute;
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Crypto Chords Transaction Visualizer</h1>
      <Controls toggleMode={toggleMode} isBatchMode={isBatchMode} muteAudio={muteAudio} isMuted={isMuted} />
      <TransactionVisualizer isBatchMode={isBatchMode} />
    </div>
  );
}

export default App;
