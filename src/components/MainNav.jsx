import React from 'react';
import {Link} from 'react-router-dom';
import styles from './MainNav.module.scss';

const MainNav = () => {

  const {nav, navLink, active} = styles;

  return (
    <nav className={nav}>
      <Link to="/" className={navLink}>Home</Link>
      <Link to="/blog" className={navLink}>Blog</Link>
      <Link to="/about" className={navLink}>About</Link>
    </nav>
  );
};

export default MainNav;