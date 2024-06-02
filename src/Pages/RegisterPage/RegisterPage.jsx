import { NavBar } from 'components/NavBar/NavBar';
import Registration from 'components/Registration/Registration';
import React from 'react';
import styles from '../HomePage/Home.module.css';

export const RegisterPage = () => {
  return (
    <div className={styles.homepage}>
      <NavBar />
      <Registration />
    </div>
  );
};
