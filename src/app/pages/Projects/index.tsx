import { ProjectCard } from '@/app/components/ProjectCard';
import React, { useState } from 'react';
import cx from 'classnames';

import styles from './Projects.module.scss';
import chingAsianBistro from '@/assets/images/ching-asian-bistro.png';
import { VolumeKnob } from '@/app/components/VolumeKnob';
import { useTranslation } from 'react-i18next';
import { MiniForceGraph } from '@/app/components/MiniForceGraph';

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [forceNodeCount, setForceNodeCount] = useState<number>(4);

  const addForceNode = () => {
    setForceNodeCount(forceNodeCount + 1);
  }

  const removeForceNode = () => {
    if (forceNodeCount > 0) setForceNodeCount(forceNodeCount - 1);
  }

  return (
    <div className={styles.Projects}>
      <ProjectCard 
        title={t('projectVolumeKnobTitle')}
        previewElement={(
          <div className={cx(styles.fullCenter, styles.Projects__previewContainer)}>
            <VolumeKnob sensitivity={10} />
          </div>
        )}
        showFooter={false}
      >
        {t('projectVolumeKnobBody')}
      </ProjectCard>

      <ProjectCard
        title={t('projectChingAsianBistroTitle')}
        previewImageSrc={chingAsianBistro}
        previewImageAlt={t('projectChingAsianBistroAlt')}
        projectLink="http://chingasianbistro.com/"
      >
        {t('projectChingAsianBistroBody')}
      </ProjectCard>

      <ProjectCard
        title={t('projectForceGraphTitle')}
        previewElement={(
          <div>
            <div className="p-2">
              <button onClick={addForceNode}>Add Node</button>
              <button className="ml-2" onClick={removeForceNode} disabled={!forceNodeCount}>Remove Node</button>
            </div>
            <MiniForceGraph nodeCount={forceNodeCount} />
          </div>
        )}
        projectLink="https://observablehq.com/@d3/force-directed-graph"
      >{t('projectForceGraphBody')}</ProjectCard>
    </div>
  );
};
