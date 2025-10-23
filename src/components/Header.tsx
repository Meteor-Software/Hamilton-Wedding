import React from 'react';
import styles from './Header.module.scss';

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  title = "Hamilton Wedding", 
  subtitle = "Celebrating Love & Unity" 
}) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;

