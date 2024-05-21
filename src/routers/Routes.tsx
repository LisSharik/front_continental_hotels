import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import RoomsPage from "../pages/RoomsPage";
import RoomDetailPage from "../pages/RoomDetailsPage";
import ProfilePage from "../pages/ProfilePage";
import React from "react";
import RegisterForm from "../Formularios/RegisterForm";
import LoginForm from "../Formularios/LoginForm";
import Logout from "../Formularios/logout";

const RoutesContinental: React.FC = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<HomePage/>}/>
                <Route path="/admin-page" element={<AdminPage/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/rooms" element ={<RoomsPage/>}/>
                <Route path="/room/:roomName" element={<RoomDetailPage />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </BrowserRouter>

    );
}


export default RoutesContinental



