import React from 'react';
import PropTypes from 'prop-types';
import RowOfButtons from './RowOfButtons';
import './keys.css';

function Keys({ updateState }) {
  const btnsInnerText = [
    ['row row-1', 'AC', '+/-', '%', '÷'],
    ['row row-2', '7', '8', '9', 'x'],
    ['row row-3', '4', '5', '6', '-'],
    ['row row-4', '1', '2', '3', '+'],
    ['row row-5', '0', '.', '='],
  ];
  return (
    <div className="keys-container">
      {
        btnsInnerText.map((info, i) => (
          <RowOfButtons
            key={`row${i + 1}`}
            info={info}
            updateState={updateState}
          />
        ))
      }
    </div>
  );
}

Keys.propTypes = {
  updateState: PropTypes.func.isRequired,
};

export default Keys;
