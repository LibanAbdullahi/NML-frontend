// pages/signup.tsx
import React from 'react';
import SignupForm from '../components/auth/SignupForm';
import MainLayout from '../components/layout/MainLayout';

const Signup: React.FC = () => {
    return (
        <MainLayout>
            <div style={{ padding: '20px' }}>
                <h1 style={{ textAlign: 'center', color: 'black' }}>Sign Up</h1>
                <SignupForm />
            </div>
        </MainLayout>
    );
};

export default Signup;
