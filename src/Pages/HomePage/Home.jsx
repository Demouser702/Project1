import React from 'react';
import { NavBar } from 'components/NavBar/NavBar';
import { IntakeCalories } from 'components/IntakeCalories/IntakeCalories';
import styles from './Home.module.css';
export default function Home() {
  return (
    <div className={styles.homepage}>
      <NavBar />
      <IntakeCalories />
    </div>
  );
}
