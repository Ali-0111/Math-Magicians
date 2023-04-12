import React from 'react';
import '../styles/header.css';

function Header() {
  return (
    <header className="main-head">
      <h1 className="title">Math Magicians</h1>
      <ul className="navs">
        <li><a href="www.facebook.com">Home</a></li>
        <li><a href="www.face">Calculator</a></li>
        <li><a href="www">Quote</a></li>
      </ul>
    </header>
  );
}

export default Header;
