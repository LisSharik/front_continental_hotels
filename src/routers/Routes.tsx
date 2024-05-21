import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import RoomsPage from "../pages/RoomsPage";
import RoomDetailPage from "../pages/RoomDetailsPage";
import Profile from "../components/Profile";
import React from "react";

const RoutesContinental: React.FC = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<HomePage/>}/>
                <Route path="/admin-page" element={<AdminPage/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/rooms" element ={<RoomsPage/>}/>
                <Route path="/room/:roomName" element={<RoomDetailPage />} />
            </Routes>
        </BrowserRouter>

    );
}


export default RoutesContinental



