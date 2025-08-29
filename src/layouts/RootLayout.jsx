import React from 'react';
import styles from './RootLayout.module.scss';
import MainNav from '../components/MainNav.jsx';
import {Outlet} from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.container}>
          <MainNav />
        </div>
      </header>
      <main className={styles.main}>
        {/* 실제로 바뀌는 동적인 부분 */}
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© 2025 개발자 블로그. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;