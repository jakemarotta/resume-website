import React from 'react';

import styles from '@/app/pages/Home/Home.module.scss';

export const Home: React.FC = () => {

  return (
    <div className={styles.Home}>
      <div className={styles.Home__overlay} />
      <div className={styles.Home__firstName}>Eddison</div>
      <div className={styles.Home__lastName}>Kirby</div>
      <div className={styles.Home__tagline}>Lorem Ipsum Dolor sit Amet</div>
    </div>
  );

};
