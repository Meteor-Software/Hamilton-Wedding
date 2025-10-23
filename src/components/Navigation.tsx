"use client";

import React, { useState } from 'react';
import styles from './Navigation.module.scss';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '/home', label: 'Home' },
    { href: '/ceremony', label: 'Ceremony' },
    { href: '/people', label: 'People' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/rsvp', label: 'RSVP' },
  ];

  return (
    <nav className={`${styles.navigation} ${className || ''}`}>
      <div className="container">
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <a href="/home">Hamilton Wedding</a>
          </div>
          
          <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.href} className={styles.navItem}>
                  <a 
                    href={item.href} 
                    className={styles.navLink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <button 
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

