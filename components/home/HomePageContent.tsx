// components/home/HomePageContent.tsx
import React from "react";
import styles from "./HomePageContent.module.css";
import Link from "next/link"; // Add this import

const HomePageContent: React.FC = () => {
  return (
    <div className={styles.homeContent}>
      <h1>Welcome to NomadMediLink</h1>
      <p>Your trusted source for accessible and affordable healthcare.</p>
      <Link
        href='/appointments'
        className={`btn btn-primary ${styles.ctaButton}`}
      >
        Schedule an Appointment
      </Link>
      {/* Add more content sections as needed */}
    </div>
  );
};

export default HomePageContent;
