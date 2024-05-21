// import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Styles/App.css';
import Contact from './components/Contact';

const App: React.FC = () => {
  // const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <Router>
      <div className="main w-full h-auto flex items-center justify-start flex-col">
        <Contact />
      </div>
    </Router>
  );
}

;

export default App;
