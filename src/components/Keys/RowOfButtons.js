import React from 'react';
import '../../styles/btn.css';
import PropTypes from 'prop-types';

function RowOfButtons({ info }) {
  return (
    <ul className={info[0]}>
      {
        info.slice(1).map((buttonContent) => (
          <li key={buttonContent}>
            <button type="button">
              {buttonContent}
            </button>
          </li>
        ))
      }
    </ul>
  );
}

RowOfButtons.propTypes = {
  info: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RowOfButtons;
