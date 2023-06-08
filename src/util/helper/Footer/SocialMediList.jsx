import PropTypes from 'prop-types';

export default function SocialMediaList({ dataSet }) {
  return (
    <ul>
      {
        dataSet.map((item, i) => (
          <li className="social-media" key={`media${i + 1}`}>
            <a href={item.href} title={item.title}>
              <img src={item.icon} alt={item.alt} />
            </a>
          </li>
        ))
      }
    </ul>
  );
}

const dataShape = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

SocialMediaList.propTypes = {
  dataSet: PropTypes.arrayOf(PropTypes.shape(dataShape)).isRequired,
};
