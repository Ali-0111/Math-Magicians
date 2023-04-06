import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/keys.css';

function Keys({ object }) {
  return (
    <div className="keys-container">
      <Button
        info={['row row-1', 'AC', '+/-', '%', '÷']}
        object={object}
      />

      <Button
        info={['row row-2', '7', '8', '9', 'x']}
        object={object}
      />

      <Button
        info={['row row-3', '4', '5', '6', '-']}
        object={object}
      />

      <Button
        info={['row row-4', '1', '2', '3', '+']}
        object={object}
      />

      <Button
        info={['row row-5', '0', '.', '=']}
        object={object}
      />

    </div>
  );
}

Keys.propTypes = {
  object: PropTypes.func.isRequired,
};

export default Keys;
