import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'; // Adjust the import based on your project structure
import UserDashboard from '../user-dashboard/UserDashboard'; // Adjust the import based on your project structure
import DoctorDashboard from '../doctor-dashboard/DoctorDashboard'; // Adjust the import based on your project structure


const Dashboard: React.FC = () => {
    const authContext = useContext(AuthContext);

    if (!authContext || !authContext.user) {
        return <div>Loading...</div>; // or any other fallback UI
    }

    return (
        <div>
            {authContext.user.role === 'user' ? (
                <UserDashboard userId={authContext.user._id} token={authContext.token} />
            ) : (
                <DoctorDashboard token={authContext.token} />
            )}
        </div>
    );
}

export default Dashboard;
