// context/AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
    user: User | null;
    token: string;
    updateUser: (userData: User, authToken: string) => void;
    clearUser: () => void;
}

interface User {
    _id: string;
    id: string;
    role: 'user' | 'doctor';
    username: string;
    email: string;
    // Add any other properties that are common across your app
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState('');

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');
        if (storedUser) setUser(JSON.parse(storedUser));
        if (storedToken) setToken(storedToken);
    }, []);

    const updateUser = (userData: User, authToken: string) => {
        setUser(userData);
        setToken(authToken);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', authToken);
    };

    const clearUser = () => {
        setUser(null);
        setToken('');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, token, updateUser, clearUser }}>
            {children}
        </AuthContext.Provider>
    );
};
