
import React from "react";
import HomePage from "./pages/HomePage";
import RoutesContinental from "./routers/Routes";

const App: React.FC = () => {
    return (
      <div className="w-screen h-screen flex items-center justify-start flex-col ">
        <RoutesContinental/>
        
      </div>
    );
}

export default App;