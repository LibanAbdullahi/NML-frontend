// components/layout/Footer.tsx
import React from 'react';
import styles from '../../styles/Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footerContainer}>
            {/* Footer content */}
            <p>© 2024 NomadMediLink</p>
        </footer>
    );
};

export default Footer;
