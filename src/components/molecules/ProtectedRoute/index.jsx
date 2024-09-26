import { Navigate } from 'react-router-dom';

export default function ProtectedRoute() {
        const token = localStorage.getItem('token');
      if (!token) {
        return <Navigate to="/login" />;
      }
      return null;
}
