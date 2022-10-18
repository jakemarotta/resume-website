import { ProjectCard } from '@/app/components/ProjectCard';
import React from 'react';
import cx from 'classnames';

import styles from './Projects.module.scss';
import chingAsianBistro from '@/assets/images/ching-asian-bistro.png';
import { VolumeKnob } from '@/app/components/VolumeKnob';
import { useTranslation } from 'react-i18next';

export const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.Projects}>
      <ProjectCard 
        title="Rotating Knob"
        previewElement={(
          <div className={cx(styles.fullCenter, styles.Projects__previewContainer)}>
            <VolumeKnob sensitivity={10} />
          </div>
        )}
        showFooter={false}
      >
        {t('projectVolumeKnob')}
      </ProjectCard>

      <ProjectCard
        title="chingasianbistro.com"
        previewImageSrc={chingAsianBistro}
        previewImageAlt="Ching Asian Bistro website"
        projectLink="http://chingasianbistro.com/"
      >
        {t('projectChingAsianBistro')}
      </ProjectCard>
    </div>
  );
};
