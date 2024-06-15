// components/layout/Header.tsx
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../styles/Header.module.css";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <img src='/logo.png' alt='NomadMediLink Logo' />
        </Link>
      </div>

      <button
        className={styles.menuToggle}
        onClick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen}
        aria-label='Toggle navigation menu'
      >
        ☰
      </button>

      <nav
        className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ""}`}
      >
        <Link href='/' className={router.pathname === "/" ? styles.active : ""}>
          <p>Home</p>
        </Link>
        <Link
          href='/about'
          className={router.pathname === "/about" ? styles.active : ""}
        >
          <p>About Us</p>
        </Link>
        <Link
          href='/services'
          className={router.pathname === "/services" ? styles.active : ""}
        >
          <p>Services</p>
        </Link>
        <Link
          href='/contact'
          className={router.pathname === "/contact" ? styles.active : ""}
        >
          <p>Contact</p>
        </Link>
        <Link
          href='/login'
          className={router.pathname === "/login" ? styles.active : ""}
        >
          <p>Login</p>
        </Link>
        <Link
          href='/signup'
          className={router.pathname === "/signup" ? styles.active : ""}
        >
          <p>Signup</p>
        </Link>
      </nav>

      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
      >
        <Link href='/' className={router.pathname === "/" ? styles.active : ""}>
          <p>Home</p>
        </Link>
        <Link
          href='/about'
          className={router.pathname === "/about" ? styles.active : ""}
        >
          <p>About Us</p>
        </Link>
        <Link
          href='/services'
          className={router.pathname === "/services" ? styles.active : ""}
        >
          <p>Services</p>
        </Link>
        <Link
          href='/contact'
          className={router.pathname === "/contact" ? styles.active : ""}
        >
          <p>Contact</p>
        </Link>
        <Link
          href='/login'
          className={router.pathname === "/login" ? styles.active : ""}
        >
          <p>Login</p>
        </Link>
        <Link
          href='/signup'
          className={router.pathname === "/signup" ? styles.active : ""}
        >
          <p>Signup</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
