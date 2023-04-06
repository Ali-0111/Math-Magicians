import React, { useState } from 'react';
import Keys from './Keys';
import '../styles/Frame.css';

function Calculator() {
  const [screenText, setScreenText] = useState('0.');

  return (
    <div className="calc-frame">

      <div className="screen">
        <h2 className="output">{screenText}</h2>
      </div>

      <Keys
        setScreenText={setScreenText}
        screenText={screenText}
      />

    </div>
  );
}

export default Calculator;
