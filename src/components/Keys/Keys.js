import React from 'react';
import RowOfButtons from './RowOfButtons';
import '../../styles/keys.css';

function Keys() {
  return (
    <div className="keys-container">
      <RowOfButtons info={['row row-1', 'AC', '+/-', '%', '÷']} />
      <RowOfButtons info={['row row-2', '7', '8', '9', 'x']} />
      <RowOfButtons info={['row row-3', '4', '5', '6', '-']} />
      <RowOfButtons info={['row row-4', '1', '2', '3', '+']} />
      <RowOfButtons info={['row row-5', '0', '.', '=']} />
    </div>
  );
}

export default Keys;
