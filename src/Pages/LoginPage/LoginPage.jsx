import { Login } from 'components/Login/Login';
import { NavBar } from 'components/NavBar/NavBar';
import React from 'react';
import styles from '../HomePage/Home.module.css';

export const LoginPage = () => {
  return (
    <div className={styles.homepage}>
      <NavBar />
      <Login />
    </div>
  );
};
