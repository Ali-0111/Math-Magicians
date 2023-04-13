import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  return (
    <header className="main-head">
      <h1 className="title">Math Magicians</h1>
      <ul className="navs">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calc">Calculator</Link></li>
        <li><Link to="/quote">Quote</Link></li>
      </ul>
    </header>
  );
}

export default Header;
