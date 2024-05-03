// components/home/HomePageContent.tsx
import React from 'react';
import styles from './HomePageContent.module.css'; // Assuming you have corresponding CSS

const HomePageContent: React.FC = () => {
    return (
        <div className={styles.homeContent}>
            <h1>Welcome to NomadMediLink</h1>
            {/* Additional content can be added here */}
        </div>
    );
};

export default HomePageContent;
