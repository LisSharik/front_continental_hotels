import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './Formularios/LoginForm';
import RegisterForm from './Formularios/RegisterForm';
import Logout from './Formularios/logout';
import Contact from "./components/Contact";
import './Styles/App.css';

const App: React.FC = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <Router>
      <div className="main w-full h-auto flex items-center justify-start flex-col">
        <Routes>
          <Route
            path="/login"
            element={
              <>
                {isLoginForm ? <LoginForm /> : <RegisterForm />}
                <a onClick={() => setIsLoginForm(!isLoginForm)} className='text'>
                  {isLoginForm ? "Don’t have an account? Sign up" : "Already have an account? Sign in"}
                </a>
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                {isLoginForm ? <LoginForm /> : <RegisterForm />}
                <a onClick={() => setIsLoginForm(!isLoginForm)} className='text'>
                  {isLoginForm ? "Don’t have an account? Sign up" : "Already have an account? Sign in"}
                </a>
              </>
            }
          />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home: React.FC = () => (
  <div>
    <h1>Home continental hotels</h1>
    <Logout />
    <Contact />
  </div>
);

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default App;
