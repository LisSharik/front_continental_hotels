import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import RoomDetail from "../components/RoomDetail";
import BannerBasic from "../components/BannerBasic";

const RoomDetailPage: React.FC = () => {
    return (
        <div className="w-screen h-auto">
            <Menu/>
            <div className="w-screen h-screen">
                <BannerBasic imgUrl={["https://img.freepik.com/foto-gratis/interior-habitacion-dormitorio-hotel_23-2150683421.jpg"]} messageBanner="Room Details" isVideo={false}/>

            </div>

            <RoomDetail/>
            <BookingForm/>
            <div className="w-full h-[50vh]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.33781794504!2d-75.58619519004502!3d6.21910632660103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44293f0e114eef%3A0x99610cdd44c7c081!2sRiwi%20-%20Be%20a%20Coder!5e0!3m2!1ses-419!2sco!4v1716275517861!5m2!1ses-419!2sco" 
                width="100%" 
                height="100%" 
                allowFullScreen={true} 
                loading="lazy"
                ></iframe>
            </div>
            <Footer/>

        </div>
    )
}

export default RoomDetailPage;




