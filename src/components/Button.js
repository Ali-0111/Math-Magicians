import React from 'react';
import PropTypes from 'prop-types';

import '../styles/btn.css';

function Button({ info, setScreenText }) {
  const clickHandler = (input) => {
    setScreenText(`${input}`);
  };

  return (
    <ul className={info[0]}>
      <li>
        <button onClick={() => { clickHandler(info[1]); }} type="button">
          {info[1]}
        </button>
      </li>

      <li>
        <button onClick={() => { clickHandler(info[2]); }} type="button">
          {info[2]}
        </button>
      </li>

      <li>
        <button onClick={() => { clickHandler(info[3]); }} type="button">
          {info[3]}
        </button>
      </li>

      {/*  if condition short hand in JSX */}
      {
        info.length > 4 && (
          <li>
            <button onClick={() => { clickHandler(info[4]); }} type="button">
              {info[4]}
            </button>
          </li>
        )
      }

    </ul>
  );
}

Button.propTypes = {
  info: PropTypes.arrayOf(PropTypes.string).isRequired,
  setScreenText: PropTypes.func.isRequired,
  // screenText: PropTypes.string.isRequired,
};

export default Button;
