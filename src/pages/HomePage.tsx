import Menu from "../components/Menu";
import BannerBasic from "../components/BannerBasic";
import BookingForm from "../components/BookingForm";
import video from "../assets/video/video_banner.mp4";
import LuxuryRooms from "../components/LuxuryRooms";
import imgHomeRoom from "../assets/img/roomImg/img_room_index.jpg";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
    return (
        <div className="w-full h-auto">
            <Menu/>
            <div className="w-full h-screen">

            <BannerBasic imgUrl={[video]} messageBanner = "CONTINENTAL HOTELS" isVideo = {true} />
            </div>
            <BookingForm/>
            <div className="h-[50vh]">
                <BannerBasic imgUrl={[imgHomeRoom]} messageBanner="We have the room of your dreams" isVideo = {false} />

            </div>
            <LuxuryRooms/>
            <Contact/>
            <Footer/>

        </div>
    );
}


export default HomePage