// pages/index.tsx
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import HomePageContent from '../components/home/HomePageContent';

const Home: React.FC = () => {
    return (
        <MainLayout>
            <HomePageContent />
        </MainLayout>
    );
};

export default Home;
