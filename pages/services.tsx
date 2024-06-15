import React from "react";
import MainLayout from "../components/layout/MainLayout";
import Services from "../components/services/Services"; // Assuming your path is correct
import Head from "next/head"; // For setting the page title

const ServicesPage: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>Our Services - NomadMediLink</title> {/* Set the page title */}
      </Head>
      <Services />
    </MainLayout>
  );
};

export default ServicesPage;
