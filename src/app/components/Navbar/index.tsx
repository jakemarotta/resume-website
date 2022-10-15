import cx from 'classnames';
import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { Menu, GitHub, Instagram } from 'react-feather';

import styles from './Navbar.module.scss';

export interface NavbarProps {
  isMobile: boolean;
  handleToggleMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { isMobile, handleToggleMobileMenu } = props;
  
  const isHomepage: NavLinkProps['isActive'] = (_, location): boolean => {
    if (!location) return false;
    return location.pathname === '/';
  };

  return (
    <div className={styles.Navbar}>
      {isMobile ? (
        <>
          <div></div>
          <div></div>
          <div className={styles.Navbar__menuWrapper} onClick={handleToggleMobileMenu}>
            <Menu />
          </div>
        </>
      ) : (
        <>
          <div className={styles.Navbar__left}>
            <NavLink to="/" isActive={isHomepage} className={cx(styles.Navbar__item, styles.Navbar__link)}>Home</NavLink>
            <div className={styles.Navbar__divider} />
            <NavLink to="/about" className={cx(styles.Navbar__item, styles.Navbar__link)}>About</NavLink>
            <div className={styles.Navbar__divider} />
            <NavLink to="/resume" className={cx(styles.Navbar__item, styles.Navbar__link)}>Resumé</NavLink>
            <div className={styles.Navbar__divider} />
            <NavLink to="/projects" className={cx(styles.Navbar__item, styles.Navbar__link)}>Projects</NavLink>
          </div>
          <div className={styles.Navbar__right}>
            <a className={cx(styles.Navbar__link, styles.rowCenter)} href="https://github.com" target="_blank" rel="noreferrer">
              <GitHub />
            </a>
            <div className={cx(styles.Navbar__divider, styles.clear)}></div>
            <a className={cx(styles.Navbar__link, styles.rowCenter)} href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram />
            </a>
          </div>
        </>
      )}
    </div>
  );
};
