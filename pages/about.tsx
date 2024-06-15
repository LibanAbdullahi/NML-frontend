import React from "react";
import MainLayout from "../components/layout/MainLayout";
import About from "../components/about/About";
import Head from "next/head"; // For setting the page title

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>About Us - NomadMediLink</title>
      </Head>
      <About />
    </MainLayout>
  );
};

export default AboutPage;
