import React from 'react';

import styles from './Resume.module.scss';

export const Resume: React.FC = () => {
  return (
    <div className={styles.Resume}>
      <div className={styles.Resume__contentWrapper}>
        <header className={styles.Resume__header}>
          <div className={styles.Resume__title}>
            Resumé
          </div>
          <div className={styles.Resume__about}>
            Lorem ipsum dolor sit amet
          </div>
        </header>
        <section className={styles.Resume__section}>
          <div className={styles.Resume__sectionTitle}>Experience</div>

        </section>
        <section className={styles.Resume__section}>
          <div className={styles.Resume__sectionTitle}>Skills</div>

        </section>
        <section className={styles.Resume__section}>
          <div className={styles.Resume__sectionTitle}>Certifications</div>

        </section>
      </div>
    </div>
  );
};
