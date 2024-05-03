// pages/login.tsx
import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import MainLayout from '../components/layout/MainLayout';

const Login: React.FC = () => {
    return (
        <MainLayout>
            <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center', color: 'black' }}>Login</h1>
                <LoginForm />
            </div>
        </MainLayout>
    );
};

export default Login;
