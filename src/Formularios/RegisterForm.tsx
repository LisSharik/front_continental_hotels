import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import '../Styles/App.css';
import '../Styles/index.css';


interface FormData {
  name: string;
  document: number;
  phone: string;
  email: string;
  password: string;
}

interface TokenPayload {
  role: string;
}

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    document: 0,
    phone: '',
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.access_token;
        localStorage.setItem('authToken', token);

        // Decodifica el token para obtener el rol
        const decodedToken = jwtDecode<TokenPayload>(token);
        const userRole = decodedToken.role;

        // Redirige según el rol
        if (userRole === 'admin') {
          navigate('/admin-page');
        } else {
          navigate('/rooms');
        }
      } else {
        const errorData = await response.json();
        console.error('Error en el registro', errorData);
      }
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

  return (
    <div className='containers'>
      <h1>Register</h1>
      <br />
      <div className="register-form">
        <form onSubmit={handleSubmit} className='register'>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>C.C - T.I</label>
          <input
            type="number"
            name="document"
            value={formData.document}
            onChange={handleChange}
            required
          />

          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <br />

          <button type="submit">Sign up</button>
        </form>
        <div className="image-container">
          <img className='imgs' src="../../public/2ac5001792794643bb384ab3944ace81.jpg" alt="Imagen de perfil" />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
