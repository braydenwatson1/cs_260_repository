import { Navigate } from 'react-router-dom';

// ProtectedRoute component to check authentication
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');  // Get the JWT token from localStorage

  if (!token) {
    // Redirect to the login page if the user is not authenticated
    return <Navigate to="/login" />;
  }

  // Render the children (protected route) if the user is authenticated
  return children;
};

export default ProtectedRoute;