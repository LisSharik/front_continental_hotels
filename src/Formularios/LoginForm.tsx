import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/App.css';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const email = formData.get('email');
    const password = formData.get('password');

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
        localStorage.setItem('authToken', data.access_token);
        navigate('/');
      } else {
        console.error('Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div className='register-form'>
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
