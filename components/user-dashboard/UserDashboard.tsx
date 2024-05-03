import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HealthRecord} from '../../types/healthRecord'
import { User } from '../../types/user';
import styles from '../../styles/Dashboard.module.css'; // Adjust the import based on your styles location

interface UserDashboardProps {
    userId: string;
    token: string;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ userId, token }) => {
    const [healthRecords, setHealthRecords] = useState<HealthRecord[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchHealthRecords(userId);
    }, [userId]);

    const fetchHealthRecords = async (userId: string) => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/health-records/${userId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setHealthRecords(response.data);
        } catch (err) {
            setError('Error fetching health records');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            
            <h1>{userId} Dashboard</h1>
            {isLoading ? <p>Loading health records...</p> : (
                healthRecords.length > 0 ? (
                    healthRecords.map(record => (
                        <div key={record._id} className={styles.record}>
                            <h2>Health Record</h2>
                            <p>Medical History: {record.medicalHistory}</p>
                            <p>Current Medications: {record.currentMedications}</p>
                            <p>Allergies: {record.allergies}</p>
                            {record.labResults.map((result, index) => (
                                <p key={index}>Lab Result {index + 1}: {result.date} - {result.result}</p>
                            ))}
                            {/* Display other health record details */}
                        </div>
                    ))
                ) : (
                    <p>No health records found.</p>
                )
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default UserDashboard;