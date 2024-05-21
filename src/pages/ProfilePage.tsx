import React from "react"
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Profile from "../components/Profile";


const ProfilePage: React.FC = () => {
    return (
        <div>
            <div className="w-auto h-20 bg-black">
                <Menu/>
            </div>
            <div className="w-screen h-screen flex pt-20 justify-center ">
                <Profile/>
            </div>
            <Footer/>

        </div>
    );
}

export default ProfilePage


