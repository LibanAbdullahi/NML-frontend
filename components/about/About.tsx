import React from "react";
import styles from "../../styles/About.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.aboutTitle}>About NomadMediLink</h2>

      <section className={styles.aboutSection}>
        <h3 className={styles.sectionTitle}>Our Mission</h3>
        <p>
          To provide convenient, accessible, and high-quality healthcare to
          everyone, regardless of location. We believe in empowering patients
          with the tools and information they need to make informed decisions
          about their health.
        </p>
      </section>

      <section className={styles.aboutSection}>
        <h3 className={styles.sectionTitle}>Our Team</h3>
        <p>
          Our dedicated team of healthcare professionals is committed to
          delivering exceptional care. We have experienced doctors, nurses,
          therapists, and support staff who are passionate about your
          well-being.
        </p>
      </section>

      {/* Add more sections as needed (e.g., history, values, contact) */}
    </div>
  );
};

export default About;
