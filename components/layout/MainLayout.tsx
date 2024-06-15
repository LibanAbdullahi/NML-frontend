// components/layout/MainLayout.tsx
import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../../styles/MainLayout.module.css"; // CSS Module for MainLayout

type Props = {
  children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <div className={styles.bannerContainer}>
        <p className={styles.bannerText}>
          Access Health Information Anytime, Anywhere
        </p>
        <p className={styles.bannerText}>
          Connect with Healthcare Professionals Remotely
        </p>
        <p className={styles.bannerText}>
          Track and Manage Your Health Data Securely
        </p>
      </div>
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
