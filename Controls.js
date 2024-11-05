// src/components/Controls.js
import React, { useState } from 'react';

function Controls({ toggleMode, isBatchMode, muteAudio, isMuted }) {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <button onClick={toggleMode}>
        Toggle Mode: {isBatchMode ? 'Batch' : 'Sequential'}
      </button>
      <button onClick={muteAudio} style={{ marginLeft: '10px' }}>
        {isMuted ? 'Unmute' : 'Mute'}
      </button>
    </div>
  );
}

export default Controls;
