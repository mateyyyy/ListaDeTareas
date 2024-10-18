import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute() {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // Estado para la autenticación
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            const header = {
                'Content-Type': 'application/json',
                'auth': token,
            };

            fetch('http://localhost:3000/users', {
                method: 'GET',
                headers: header,
            })
            .then((response) => response.json())
            .then((data) => {
                if (data.status == 'fail') {
                    console.log(data);
                    setIsAuthenticated(false); // No autenticado
                } else {
                    setIsAuthenticated(true); // Autenticado
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setIsAuthenticated(false); // Error, no autenticado
            });
        } else {
            setIsAuthenticated(false); // No hay token, no autenticado
        }
    }, [token]);

    if (isAuthenticated === null) {
        return null;
    }

    return isAuthenticated ? null : <Navigate to="/login" />;
}
