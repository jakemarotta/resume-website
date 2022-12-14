import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from '@/app/pages/Home/Home.module.scss';

export const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.Home}>
      <div className={styles.Home__overlay} />
      <div className={styles.Home__firstName}>{t('firstName')}</div>
      <div className={styles.Home__lastName}>{t('lastName')}</div>
      <div className={styles.Home__tagline}>{t('tagline')}</div>
    </div>
  );

};
