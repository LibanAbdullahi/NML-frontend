import React, { useState, useEffect } from "react";
import axios from "axios";
import { HealthRecord } from "../../types/healthRecord";
import { User } from "../../types/user";
import UserDashboard from "../user-dashboard/UserDashboard";
import styles from "../../styles/DoctorDashboard.module.css"; // Adjust the import based on your stylesheet
import DoctorProfile from "../doctorProfile/DoctorProfile"; // Import DoctorProfile component

interface DoctorDashboardProps {
  token: string;
}

const DoctorDashboard: React.FC<DoctorDashboardProps> = ({ token }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const [recordData, setRecordData] = useState<Partial<HealthRecord>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/users/patients`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUsers(response.data);
      } catch (err) {
        setError("Error fetching users");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, [token]);

  const handleUserSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUserId(event.target.value);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setRecordData({ ...recordData, [name]: value });
  };

  const handleSaveRecord = async () => {
    setIsLoading(true);
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/health-records`;
      await axios.post(
        url,
        { ...recordData, userId: selectedUserId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setRecordData({});
      setError(null);
    } catch (err) {
      setError("Error saving health record");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Doctor Dashboard</h1>
      {/* Doctor Profile Section */}
      <DoctorProfile userId={selectedUserId} token={token} />
      <div className={styles.formGroup}>
        <label htmlFor='userSelect'>Select Patient:</label>
        <select
          id='userSelect'
          onChange={handleUserSelect}
          value={selectedUserId}
        >
          <option value=''>-- Select a User --</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.username}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.recordForm}>
        <h2 className={styles.recordFormTitle}>Create Health Record</h2>
        <div className={styles.formGroup}>
          <label>Medical History:</label>
          <textarea
            name='medicalHistory'
            value={recordData.medicalHistory || ""}
            onChange={handleInputChange}
          />
          <label>Current Medications:</label>
          <textarea
            name='currentMedications'
            value={recordData.currentMedications || ""}
            onChange={handleInputChange}
          />
          <label>Allergies:</label>
          <textarea
            name='allergies'
            value={recordData.allergies || ""}
            onChange={handleInputChange}
          />
          <label>Lab Results:</label>
          <textarea
            name='labResults'
            value={
              typeof recordData.labResults === "string"
                ? recordData.labResults
                : ""
            }
            onChange={handleInputChange}
          />
        </div>
        {/* Add more fields for currentMedications, allergies, labResults */}
        <button
          className={styles.saveButton}
          onClick={handleSaveRecord}
          disabled={!selectedUserId}
        >
          Create Record
        </button>
      </div>

      {error && <p className={styles.error}>{error}</p>}
      {isLoading && <p>Loading...</p>}

      {/* Displaying UserDashboard for the selected user */}
      {selectedUserId && (
        <UserDashboard userId={selectedUserId} token={token} />
      )}
    </div>
  );
};

export default DoctorDashboard;
