// components/layout/Header.tsx
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Header.module.css'; // Ensure you have this CSS module

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                NomadMediLink
                </Link>
            </div>
            <nav className={styles.navLinks}>
                <Link href="/">
                    <p>Home </p></Link>
                <Link href="/about"><p>About Us</p></Link>
                <Link href="/services"><p>Services</p></Link>
                <Link href="/contact"><p>Contact</p></Link>
                {/* Authentication Links */}
                <Link href="/login"><p>Login</p></Link>
                <Link href="/signup"><p>Signup</p></Link>
            </nav>
        </header>
    );
};

export default Header;
