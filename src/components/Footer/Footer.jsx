import React from 'react';
import SocialMediaList from '../../util/helper/Footer/SocialMediList';
import twitter from '../../assests/icons/ic_twitter.svg';
import github from '../../assests/icons/ic_github.svg';
import linkedIn from '../../assests/icons/ic_linkedin.svg';
import './footer.css';

const socialMediaDataSet = [
  {
    title: 'Twitter',
    href: 'https://twitter.com/qurban_safari',
    icon: twitter,
    alt: 'twitter_logo',
  },
  {
    title: 'Open GitHub',
    href: 'https://github.com/Ali-0111',
    icon: github,
    alt: 'github_logo',
  },
  {
    title: 'My LinkedIn',
    href: 'https://www.linkedin.com/in/ali-safari-695214202/',
    icon: linkedIn,
    alt: 'LinkedIn_logo',
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Ali-Safari
        <span className="copy">&copy;</span>
      </p>
      <SocialMediaList dataSet={socialMediaDataSet} />
    </footer>
  );
}
