import React, { PropsWithChildren } from 'react'
import { useHistory } from 'react-router-dom'

import styles from './ProjectCard.module.scss'

export interface ProjectCardProps extends PropsWithChildren {
  title?: string;
  projectLink?: string;
  previewImageSrc?: string;
  previewImageAlt?: string;
  headerElement?: React.ReactElement;
  previewElement?: React.ReactElement;
  footerElement?: React.ReactElement;
  showFooter?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const {
    title,
    projectLink,
    previewImageSrc,
    previewImageAlt,
    headerElement,
    previewElement,
    footerElement,
    showFooter = true,
  } = props;

  return (
    <div className={styles.ProjectCard}>
      <div className={styles.ProjectCard__header}>
        {headerElement || (
          <div className={styles.ProjectCard__header__container}>
            <div className={styles.ProjectCard__header__title}>{title}</div>
          </div>
        )}
      </div>
      <div className={styles.ProjectCard__preview}>
        {previewElement || (previewImageSrc ? (
          <img
            className={styles.ProjectCard__preview__image}
            src={previewImageSrc}
            alt={previewImageAlt}
          />
        ) : (
          <div className={styles.ProjectCard__preview__emptyText}>
            No Preview.
          </div>
        ))}
      </div>
      <div className={styles.ProjectCard__body}>
        {props.children}
      </div>
      <div className={styles.ProjectCard__footer}>
        {showFooter && (footerElement || (
          <div className={styles.ProjectCard__footer__container}>
            <a
              className={styles.ProjectCard__goToButton}
              role='button'
              href={projectLink}
              target='_blank'
            >
              Go →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
