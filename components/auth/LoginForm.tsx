import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext'; 
import styles from '../../styles/LoginForm.module.css';

const LoginForm: React.FC = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const router = useRouter();
   
    // ...
    const authContext = useContext(AuthContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        if (!formData.username.trim()) {
            setError('Username or Email is required');
            return false;
        }

        if (!formData.password.trim()) {
            setError('Password is required');
            return false;
        }

        setError('');
        return true;
    };
 // Fetch the user data
const fetchUserData = async (token: string, role: string) => {
    try {
        let endpoint = `${process.env.NEXT_PUBLIC_API_URL}/api/users/me`; // Default endpoint for regular users
        if (role === 'doctor') {
            endpoint = `${process.env.NEXT_PUBLIC_API_URL}/api/users/doctors`; // Different endpoint for doctors
        }

        const response = await axios.get(endpoint, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw new Error('Error fetching user data'); // Propagate error
    }
};

const handleLoginSuccess = async (token: string, role: string) => {
    try {
        const userData = await fetchUserData(token, role);
        if (userData && authContext) {
            authContext.updateUser(userData, token);
            router.push('/dashboard');
        } else {
            console.error("Could not fetch user data");
        }
    } catch (error) {
        console.error("Error in handleLoginSuccess:", error);
        // Handle error (e.g., show error message to user)
    }
};

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!validate()) return;
    
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, formData);
            
            if (response.status === 200) {
                const { token, role } = response.data; // Assuming your API response includes the role
                setSuccess('Login successful!');
                setError('');
                handleLoginSuccess(token, role);
            } else {
                setError('Login failed. Please try again.');
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                setError(error.response.data.message);
            } else {
                setError('An error occurred. Please try again.');
            }
            setSuccess('');
        }
    };
    

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            {error && <p className={styles.errorText}>{error}</p>}
            {success && <p className={styles.successText}>{success}</p>}
            <div className={styles.formGroup}>
                <label htmlFor="username">Username or Email</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className={styles.submitButton}>Log In</button>
        </form>
    );
};

export default LoginForm;
