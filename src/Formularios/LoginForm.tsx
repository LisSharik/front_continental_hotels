import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import '../Styles/App.css';
import '../Styles/index.css';

interface DecodedToken {
  role: string;
  exp: number;
  iat: number;
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.access_token;
        localStorage.setItem('authToken', token);

        // Decodifica el token para obtener el rol
        const decodedToken = jwtDecode<DecodedToken>(token);
        const userRole = decodedToken.role;

        // Redirige según el rol
        if (userRole === 'admin') {
          navigate('/admin-page');
        } else {
          navigate('/rooms');
        }
      } else {
        console.error('Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div className='containers'>
      <h1>Login</h1>
      <div className='login-form'>
        <div className="image-container">
          <img className='imgs' src="https://i0.wp.com/www.oinkoink.com.mx/wp-content/uploads/2019/09/cuarto-lujo-hotel-1.jpg?fit=1200%2C732&ssl=1" alt="Imagen de perfil" />
        </div>
        <form onSubmit={handleSubmit} className='login'>
          <label>Email</label>
          <input type="email" name="email" required />

          <label>Password</label>
          <input type="password" name="password" required />

          <br />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
