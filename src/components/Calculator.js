import React from 'react';
import Keys from './Keys/Keys';
import '../styles/Frame.css';

function Calculator() {
  return (
    <div className="calc-frame">
      <div className="screen">
        <h2 className="output">0</h2>
      </div>
      <Keys />
    </div>
  );
}

export default Calculator;
