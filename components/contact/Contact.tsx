import React from "react";
import styles from "../../styles/Contact.module.css";

const Contact: React.FC = () => {
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.contactTitle}>Contact Us</h2>
      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' name='name' required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' name='email' required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='message'>Your Message</label>
          <textarea id='message' name='message' rows={5} required />
        </div>
        <button type='submit' className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
