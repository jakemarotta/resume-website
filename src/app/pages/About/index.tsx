import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './About.module.scss';

import avatar from '@/assets/images/avatar.jpg';
import mma from '@/assets/images/mma.jpg';
import writing from '@/assets/images/writing.jpg';
import typing from '@/assets/images/typing.jpg';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.About}>
      <div className={styles.About__contentWrapper}>
        <header className={styles.About__contentHeader}>
          <img className={styles.About__avatar} src={avatar} alt="" />
          <div className={styles.flexGrowRemaining}>
            <div className={styles.About__title}>{t('aboutTitle')}</div>
            <div className={styles.About__subtitle}>{t('aboutSubtitle')}</div>
          </div>
        </header>
        <main className={styles.About__contentBody}>
          <section className={styles.About__bio}>
            {t('aboutBio')}
          </section>
          <section className={styles.About__grid}>
            <div className={styles.About__grid__row}>
              <div className={styles.About__grid__textBlock}>
                <div className={styles.About__grid__textBlock__wrapper}>
                  {t('aboutWriting')}
                </div>
              </div>
              <div className={styles.About__grid__imageBlock}>
                <img src={writing} alt={t('aboutWritingAlt')} />
              </div>
            </div>
            <div className={styles.About__grid__row}>
              <div className={styles.About__grid__imageBlock}>
                <img src={mma} alt={t('aboutMMAAlt')} />
              </div>
              <div className={styles.About__grid__textBlock}>
                <div className={styles.About__grid__textBlock__wrapper}>
                  {t('aboutMMA')}
                </div>
              </div>
            </div>
            <div className={styles.About__grid__row}>
              <div className={styles.About__grid__textBlock}>
                <div className={styles.About__grid__textBlock__wrapper}>
                  EXAMPLE TEXT
                </div>
              </div>
              <div className={styles.About__grid__imageBlock}>
                <img src={typing} alt="Typing stock image" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
