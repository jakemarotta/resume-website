import React, { useEffect, useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Drawer from 'react-modern-drawer';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Resume } from './pages/Resume';
import { Projects } from './pages/Projects';

import styles from './App.module.scss';
import { MobileMenu } from './components/MobileMenu';

export const App: React.FC = () => {
  const [viewportSize, setViewportSize] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const isMobile = viewportSize < 600;

  const updateViewportSize = (): void => {
    setViewportSize(window.innerWidth);
  };

  useEffect(() => {
    updateViewportSize();
    window.addEventListener('resize', updateViewportSize);
    return () => {
      window.removeEventListener('resize', updateViewportSize);
    };
  }, []);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <HashRouter>
      <Navbar 
        isMobile={isMobile}
        handleToggleMobileMenu={handleToggleMobileMenu}
      />
      <Drawer open={isMobileMenuOpen} direction="right" onClose={handleToggleMobileMenu}>
        <MobileMenu handleToggleMobileMenu={handleToggleMobileMenu} />
      </Drawer>
      <div className={styles.App__body}>
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
      </div>
    </HashRouter>
  );

};
