import React, { useState } from 'react';
import axios from 'axios';
import styles from '../../styles/SignupForm.module.css';

interface FormData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string; // Added role to the FormData interface
}

interface FormErrors {
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    form?: string; // General form error
}

const SignupForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'user' // Set the default role to 'user'
    });
     // ... (formData and errors state initialization)
    const [successMessage, setSuccessMessage] = useState('');
    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = (): boolean => {
        let validationErrors: FormErrors = {};
        let isValid = true;

        if (!formData.username.trim()) {
            validationErrors.username = 'Username is required';
            isValid = false;
        }

        if (!formData.email) {
            validationErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = 'Email address is invalid';
            isValid = false;
        }

        if (!formData.password) {
            validationErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 6) {
            validationErrors.password = 'Password needs to be 6 characters or more';
            isValid = false;
        }

        if (!formData.confirmPassword) {
            validationErrors.confirmPassword = 'Confirming password is required';
            isValid = false;
        } else if (formData.confirmPassword !== formData.password) {
            validationErrors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        setErrors(validationErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!validate()) {
            return;
        }
    
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, formData);
            setSuccessMessage('Signup successful!');
            // Clear the form data
            setFormData({
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                role: ''
            });
            setErrors({}); // Clear any existing errors
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                // Handle Axios errors (e.g., response errors)
                setErrors({ form: error.response.data.message });
            } else {
                // Handle other errors (e.g., network errors)
                setErrors({ form: 'An error occurred. Please try again.' });
            }
            setSuccessMessage(''); // Clear success message in case of error
        }
    };
    
    

    return (
        <form className={styles.signupForm} onSubmit={handleSubmit}>
            {successMessage && <p className={styles.successText}>{successMessage}</p>}
            {errors.form && <p className={styles.errorText}>{errors.form}</p>}
            <div className={styles.formGroup}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={errors.username ? styles.errorInput : ''}
                />
                {errors.username && <p className={styles.errorText}>{errors.username}</p>}
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? styles.errorInput : ''}
                />
                {errors.email && <p className={styles.errorText}>{errors.email}</p>}
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? styles.errorInput : ''}
                />
                {errors.password && <p className={styles.errorText}>{errors.password}</p>}
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={errors.confirmPassword ? styles.errorInput : ''}
                />
                {errors.confirmPassword && <p className={styles.errorText}>{errors.confirmPassword}</p>}
            </div>
                        {/* ... other input fields ... */}
                <div className={styles.formGroup}>
                <label htmlFor="role">Role</label>
                <select 
                    name="role" 
                    id="role" 
                    value={formData.role} 
                    onChange={handleChange} 
                    className={styles.selectInput}
                >
                    <option value="user">User</option>
                    <option value="doctor">Doctor</option>
                </select>
            </div>

            <button type="submit" className={styles.submitButton}>
                Sign Up
            </button>
        </form>
    );
};

export default SignupForm;
