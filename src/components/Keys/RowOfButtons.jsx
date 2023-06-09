import React from 'react';
import PropTypes from 'prop-types';
import './btn.css';

function RowOfButtons({ info, updateState }) {
  function handleClick(btnText) {
    updateState(btnText);
  }

  return (
    <ul className={info[0]}>
      {
        info.slice(1).map((buttonText) => (
          <li key={buttonText}>
            <button
              type="button"
              onClick={() => handleClick(buttonText)}
            >
              {buttonText}
            </button>
          </li>
        ))
      }
    </ul>
  );
}

RowOfButtons.propTypes = {
  info: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateState: PropTypes.func.isRequired,
};

export default RowOfButtons;
