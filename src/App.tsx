// src/App.tsx
import React from "react";
import AdminPage from "./pages/AdminPage";
import Contact from "./components/Contact";

const App: React.FC = () => {
    return (
      <div className="w-screen h-screen flex items-center justify-start flex-col ">
        <AdminPage/>
        
      </div>
    );
}

export default App;