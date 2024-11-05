// src/components/PianoKey.js
import React, { useState } from 'react';
import * as Tone from 'tone';

function PianoKey({ note, color, label }) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Initialize Tone.js Synth
  const synth = new Tone.Synth().toDestination();

  const playNote = async () => {
    setIsPlaying(true);
    synth.triggerAttackRelease(note, '8n');
    await new Promise(resolve => setTimeout(resolve, 200)); // Animation duration
    setIsPlaying(false);
  };

  return (
    <div
      onClick={playNote}
      style={{
        backgroundColor: isPlaying ? 'lightgray' : color,
        padding: '20px',
        margin: '5px',
        width: '40px',
        height: '100px',
        borderRadius: '5px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
    >
      {label}
    </div>
  );
}

export default PianoKey;
