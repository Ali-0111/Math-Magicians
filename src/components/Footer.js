import React from 'react';
import '../styles/footer.css';
import githubIcon from '../icons/ic_github.svg';
import linkedIn from '../icons/ic_linkedin.svg';
import twitter from '../icons/ic_twitter.svg';

function Footer() {
  return (
    <footer className="footer">
      <h2>
        Ali-Safari
        <span className="copy">&copy;</span>
      </h2>
      <ul className="social-media">
        <li>
          <a href="https://twitter.com/qurban_safari" title="Twitter">
            <img src={twitter} alt="twitter_logo" />
          </a>
        </li>

        <li>
          <a href="https://github.com/Ali-0111" title="Open GitHub">
            <img src={githubIcon} alt="twitter_logo" />
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/ali-safari-695214202/" title="LinkedIn">
            <img src={linkedIn} alt="LinkedIn" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
