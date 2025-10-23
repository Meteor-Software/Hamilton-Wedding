import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Hamilton Wedding. Made with ❤️ for our special day.
          </p>
        </div>
    </footer>
  );
};

export default Footer;

