import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/keys.css';

function Keys({ setScreenText, screenText }) {
  return (
    <div className="keys-container">
      <Button
        info={['row row-1', 'AC', '+/-', '%', '÷']}
        setScreenText={setScreenText}
        screenText={screenText}
      />

      <Button
        info={['row row-2', '7', '8', '9', 'x']}
        setScreenText={setScreenText}
        screenText={screenText}
      />

      <Button
        info={['row row-3', '4', '5', '6', '-']}
        setScreenText={setScreenText}
        screenText={screenText}
      />

      <Button
        info={['row row-4', '1', '2', '3', '+']}
        setScreenText={setScreenText}
        screenText={screenText}
      />

      <Button
        info={['row row-5', '0', '.', '=']}
        setScreenText={setScreenText}
        screenText={screenText}
      />

    </div>
  );
}

Keys.propTypes = {
  setScreenText: PropTypes.func.isRequired,
  screenText: PropTypes.string.isRequired,
};

export default Keys;
