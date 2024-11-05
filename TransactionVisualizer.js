// src/components/TransactionVisualizer.js
import React from 'react';
import PianoKey from './PianoKey';

const transactionTypes = [
  { note: 'C4', color: 'red', label: 'C - Cider' },
  { note: 'G4', color: 'blue', label: 'G - PoP' },
  { note: 'A4', color: 'green', label: 'Am - ETH' },
  { note: 'F4', color: 'orange', label: 'F - New Block' },
  { note: 'E4', color: 'purple', label: 'E - Bridge' },
  { note: 'F#4', color: 'yellow', label: 'F# - Deposit' },
];

function TransactionVisualizer() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {transactionTypes.map(({ note, color, label }, index) => (
        <PianoKey key={index} note={note} color={color} label={label} />
      ))}
    </div>
  );
}

export default TransactionVisualizer;
