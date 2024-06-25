import React, { useState, useEffect } from "react";
import axios from "axios";
import { HealthRecord } from "../../types/healthRecord";
import { User } from "../../types/user";
import styles from "../../styles/Dashboard.module.css";

interface UserDashboardProps {
  userId: string;
  token: string;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ userId, token }) => {
  const [healthRecords, setHealthRecords] = useState<HealthRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState<string>("");
  useEffect(() => {
    fetchUser();
    fetchHealthRecords(userId);
  }, [userId]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUsername(response.data.username);
    } catch (err) {
      setError("Error fetching user");
    }
  };
  const fetchHealthRecords = async (userId: string) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/health-records/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setHealthRecords(response.data);
    } catch (err) {
      setError("Error fetching health records");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.dashboardTitle}>
        {" "}
        <h1 className={styles.title}>{username} User information</h1>
      </div>
      {isLoading ? (
        <p>Loading health records...</p>
      ) : (
        <div className={styles.recordList}>
          {" "}
          {/* Added recordList class */}
          {healthRecords.length > 0 ? (
            healthRecords.map((record) => (
              <div key={record._id} className={styles.record}>
                <h2>health record</h2>
                <p>Medical History: {record.medicalHistory}</p>
                <p>Current Medications: {record.currentMedications}</p>
                <p>Allergies: {record.allergies}</p>
                {record.labResults.map((result, index) => (
                  <p key={index}>
                    Lab Result {index + 1}: {result.date} - {result.result}
                  </p>
                ))}
              </div>
            ))
          ) : (
            <p>No health records found.</p>
          )}
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default UserDashboard;
