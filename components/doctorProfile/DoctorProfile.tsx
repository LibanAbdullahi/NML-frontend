import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './DoctorProfile.module.css';

interface ProfessionalInfo {
  fullName: string;
  specialization: string;
  licenseNumber: string;
  experienceYears: number;
  bio: string;
}

interface ContactInfo {
  phone: string;
  email: string;
  officeAddress: string;
}

interface WorkplaceInfo {
  hospitalName: string;
  department: string;
  position: string;
}

interface Availability {
  officeHours: string;
  consultationTimings: string;
}

interface Location {
  city: string;
  state: string;
  country: string;
}

interface DoctorProfileData {
  professionalInfo: ProfessionalInfo;
  contactInfo: ContactInfo;
  workplaceInfo: WorkplaceInfo;
  availability: Availability;
  location: Location;
  qualifications: string[];
  _id: string;
  userId: string;
}

interface DoctorProfileProps {
  token: string;
  userId: string;
}

const DoctorProfile: React.FC<DoctorProfileProps> = ({ token, userId }) => {
  const [profileData, setProfileData] = useState<DoctorProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/api/doctor-profiles/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response.data);
        setProfileData(response.data); // Directly set the response data if it's not an array
        setError(null); // Clear any previous errors
      } catch (err) {
        console.error(err); // Log the actual error for debugging purposes
        setError('Failed to load profile'); // Set error message only if there's an exception
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchProfile();
  }, [userId, token]);
  
  
  

  const handleEdit = () => setEditMode(true);
  const handleCancel = () => setEditMode(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await axios.delete(`http://localhost:5000/api/doctor-profiles/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfileData(null);
    } catch (err) {
      setError('Failed to delete profile');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section: keyof DoctorProfileData
  ) => {
    const { name, value } = e.target;
  
    // Ensure profileData is not null and the section is valid
    if (profileData) {
      // Specifically handle updates for nested sections to ensure type safety
      switch (section) {
        case 'professionalInfo':
        case 'contactInfo':
        case 'workplaceInfo':
        case 'availability':
        case 'location':
          // Safely update nested objects with type assertion
          setProfileData({
            ...profileData,
            [section]: {
              ...profileData[section] as any, // Using 'as any' for simplicity; ideally, assert a more specific type
              [name]: value,
            },
          });
          break;
        default:
          // Handle other types of updates or log an error/warning
          console.warn('Unhandled section in profile data update', section);
      }
    }
  };
  

  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!profileData) return;
    setIsLoading(true);
    try {
      const response = await axios.put(`http://localhost:5000/api/doctor-profiles/me`, profileData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfileData(response.data);
      setEditMode(false);
    } catch (err) {
      setError('Failed to update profile');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!profileData) return <p>No profile data available.</p>;
// This way, if any part of the chain is undefined, it will not throw an error but return undefined instead.

return (
    <div className={styles.profileContainer}>
      {editMode ? (
        // Form for editing profile data
        <form onSubmit={handleSave}>
          {/* Form inputs and buttons */}
        </form>
      ) : (
        // Safely access nested properties using optional chaining
        <div className={styles.profileContent}>
    <h2>{profileData.professionalInfo.fullName}</h2>
    <p>Specialization: {profileData.professionalInfo.specialization}</p>
    <p>License Number: {profileData.professionalInfo.licenseNumber}</p>
    <p>Experience: {profileData.professionalInfo.experienceYears} years</p>
    <p>Bio: {profileData.professionalInfo.bio}</p>
    <p>Phone: {profileData.contactInfo.phone}</p>
    <p>Email: {profileData.contactInfo.email}</p>
    <p>Office Address: {profileData.contactInfo.officeAddress}</p>
    <p>Hospital: {profileData.workplaceInfo.hospitalName}</p>
    <p>Department: {profileData.workplaceInfo.department}</p>
    <p>Position: {profileData.workplaceInfo.position}</p>
    <p>Office Hours: {profileData.availability.officeHours}</p>
    <p>Consultation Timings: {profileData.availability.consultationTimings}</p>
    <p>Location: {profileData.location.city}, {profileData.location.state}, {profileData.location.country}</p>
    <p>Qualifications: {profileData.qualifications.join(', ')}</p>
    {/* ...and so on for the rest of the profile information */}
        {/* ... and so on for the rest of the properties */}
        <button onClick={handleEdit}>Edit Profile</button>
        <button onClick={handleDelete}>Delete Profile</button>
        </div>
      )}
    </div>
  );
  
};

export default DoctorProfile;
