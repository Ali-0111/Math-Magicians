import React from 'react';
import Button from './Button';
import '../styles/keys.css';

function Keys() {
  return (
    <div className="keys-container">
      <Button info={['row row-1', 'AC', '+/-', '%', '÷']} />
      <Button info={['row row-2', '7', '8', '9', 'x']} />
      <Button info={['row row-3', '4', '5', '6', '-']} />
      <Button info={['row row-4', '1', '2', '3', '+']} />
      <Button info={['row row-5', '0', '.', '=']} />
    </div>
  );
}

export default Keys;
