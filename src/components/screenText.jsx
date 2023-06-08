import PropTypes from 'prop-types';

export default function ScreenText({ text }) {
  return (
    <div className="screen">
      <h2 className="output">{text}</h2>
    </div>
  );
}

ScreenText.propTypes = {
  text: PropTypes.string.isRequired,
};
