// components/services/Services.tsx
import React from "react";
import styles from "../../styles/Services.module.css";

const servicesData = [
  {
    title: "Virtual Consultations",
    description:
      "Connect with healthcare professionals from the comfort of your home.",
    icon: "./virtual-consultation.svg",
  },
  {
    title: "Prescription Refills",
    description:
      "Request prescription refills online and get them delivered to your doorstep.",
    icon: "./prescription.svg",
  },
  {
    title: "Mental Health Support",
    description: "Access therapy and counseling sessions remotely.",
    icon: "./mental-health.svg",
  },
  // ... add more services
];

const Services: React.FC = () => {
  return (
    <div className={styles.servicesContainer}>
      <h2 className={styles.servicesTitle}>Our Services</h2>
      <div className={styles.servicesGrid}>
        {servicesData.map((service) => (
          <div key={service.title} className={styles.serviceCard}>
            <img
              src={service.icon}
              alt={service.title}
              className={styles.serviceIcon}
            />
            <h3 className={styles.serviceCardTitle}>{service.title}</h3>
            <p className={styles.serviceCardDescription}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
