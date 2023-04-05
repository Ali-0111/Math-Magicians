import React from 'react';
import Keys from './Keys';

import '../styles/Frame.css';

function Frame() {
  return (
    <div className="calc-frame">
      <div className="screen">
        <h2 className="output">0</h2>
      </div>
      <Keys />
    </div>
  );
}

export default Frame;
