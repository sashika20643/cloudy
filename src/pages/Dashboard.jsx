// Dashboard.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Get the auth instance
    const auth = getAuth();

    // Check if the user is logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // Redirect to the login page if not logged in
        navigate('/login', { replace: true });
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, [navigate]);

  // Logout function
  const handleLogout = async () => {
    const auth = getAuth();

    try {
      await signOut(auth);
      // Redirect to the login page after logout
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Error during logout:', error.message);
      // Handle logout error if needed
    }
  };

  // Render the Dashboard content
  return (
    <div>
      <h2>Dashboard</h2>
      {/* Your Dashboard content goes here */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
