import React from 'react';
import logo from '@/assets/images/logo.svg';
import { Counter } from '@/app/components/Counter';
import styles from '@/app/pages/Home/Home.module.scss';

export const Home: React.FC = () => {

  return (
    <div className={styles.Home}>
      <header className={styles.Home_header}>
        <img src={logo} className={styles.Home_logo} alt='logo' />
        <Counter />
        <p>
          Edit <code>src/pages/Home/index.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className={styles.Home_link}
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            React
          </a>
          <span>, </span>
          <a
            className={styles.Home_link}
            href='https://redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Redux
          </a>
          <span>, </span>
          <a
            className={styles.Home_link}
            href='https://redux-toolkit.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className={styles.Home_link}
            href='https://react-redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );

};
