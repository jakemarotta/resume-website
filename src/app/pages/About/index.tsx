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
            {t('aboutBody')}
          </section>
          <section className={styles.About__grid}>
            <div className={styles.About__grid__row}>
              <div className={styles.About__grid__textBlock}>
                <div className={styles.About__grid__textBlock__wrapper}>
                  I have been writing for as long as I can remember, and it is something that I love to do. Outside of work, I enjoy writing creative pieces and working on my latest story.
                </div>
              </div>
              <div className={styles.About__grid__imageBlock}>
                <img src={writing} alt="Writing stock image" />
              </div>
            </div>
            <div className={styles.About__grid__row}>
              <div className={styles.About__grid__imageBlock}>
                <img src={mma} alt="MMA Fighting stock image" />
              </div>
              <div className={styles.About__grid__textBlock}>
                <div className={styles.About__grid__textBlock__wrapper}>
                  I'm a skilled MMA fighter who is competitive and enthusiastic about the sport. I have years of experience both fighting and training, and I'm always looking for new challenges.
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
