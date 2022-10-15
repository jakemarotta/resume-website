import React from 'react';
import cx from 'classnames';
import { NavLinkProps, NavLink } from 'react-router-dom';
import { GitHub, Instagram } from 'react-feather';

import styles from './MobileMenu.module.scss';

export interface MobileMenuProps {
  handleToggleMobileMenu: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = (props) => {
  const { handleToggleMobileMenu } = props;

  const isHomepage: NavLinkProps['isActive'] = (_, location): boolean => {
    if (!location) return false;
    return location.pathname === '/';
  };

  return (
    <div className={styles.MobileMenu}>
      <div>
        <NavLink to="/" isActive={isHomepage} className={styles.MobileMenu__link} onClick={handleToggleMobileMenu}>Home</NavLink>
        <NavLink to="/about" className={styles.MobileMenu__link} onClick={handleToggleMobileMenu}>About</NavLink>
        <NavLink to="/resume" className={styles.MobileMenu__link} onClick={handleToggleMobileMenu}>Resumé</NavLink>
        <NavLink to="/projects" className={styles.MobileMenu__link} onClick={handleToggleMobileMenu}>Projects</NavLink>
      </div>
      <div className={styles.MobileMenu__socialContainer}>
        <a className={cx(styles.MobileMenu__link, styles.rowCenter)} href="https://github.com" target="_blank" rel="noreferrer">
          <GitHub />
        </a>
        <a className={cx(styles.MobileMenu__link, styles.rowCenter)} href="https://instagram.com" target="_blank" rel="noreferrer">
          <Instagram />
        </a>
      </div>
    </div>
  )
}
