import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './About.module.scss';

import avatar from '@/assets/images/avatar.jpg';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.About}>
      <div className={styles.About__pageTitle}>About Me</div>
      <div className={styles.About__contentWrapper}>
        <header className={styles.About__contentHeader}>
          <img className={styles.About__avatar} src={avatar} alt="" />
          <div>
            <div className={styles.About__title}>{t('aboutTitle')}</div>
            <div className={styles.About__subtitle}>{t('aboutSubtitle')}</div>
          </div>
        </header>
        <main className={styles.About__contentBody}>{t('aboutBody')}</main>
      </div>
    </div>
  );
};
