import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './MainNav.module.scss';

const MainNav = () => {

  const {nav, navLink, active} = styles;

  // 현재 링크이동한 링크에 active표시하기
  const activate = ({ isActive }) => {
    return `${navLink} ${isActive ? active : ''}`;
  };

  return (
    <nav className={nav}>
      <NavLink to="/" className={activate}>홈</NavLink>
      <NavLink to="/blog" className={activate}>블로그</NavLink>
      <NavLink to="/about" className={activate}>어바웃</NavLink>
    </nav>
  );
};

export default MainNav;