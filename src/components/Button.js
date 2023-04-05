import React from 'react';
import '../styles/btn.css';
import PropTypes from 'prop-types';

function Button({ info }) {
  return (
    <ul className={info[0]}>
      <li><button type="button">{info[1]}</button></li>
      <li><button type="button">{info[2]}</button></li>
      <li><button type="button">{info[3]}</button></li>
      {/*  if condition short hand in JSX */}
      {
        info.length > 4
        && <li><button type="button">{info[4]}</button></li>
      }

    </ul>
  );
}

Button.propTypes = {
  info: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Button;
