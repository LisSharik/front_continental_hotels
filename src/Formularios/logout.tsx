import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const token = localStorage.getItem('authToken');

    if (token) {
      try {
        await fetch('http://localhost:3000/api/auth/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ token }),  // Enviar el token en el cuerpo de la solicitud
        });
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
      }
    }

    localStorage.removeItem('authToken');  // Elimina el token del almacenamiento local
    navigate('/login');  // Redirige al usuario a la página de inicio de sesión
  };

  return (
    <div className="">

        <h1>Welcome to continental hotels</h1>
        <br />
        <button onClick={handleLogout}>
        Logout
        </button>
    </div>
  );
};

export default Logout;
