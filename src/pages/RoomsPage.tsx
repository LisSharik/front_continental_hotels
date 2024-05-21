import Menu from "../components/Menu";
import BannerBasic from "../components/BannerBasic";
import Footer from "../components/Footer";
import RoomList from "../components/RoomList";


export default function RoomsPage(){
    return(
        <div className="w-screen h-full">
            <Menu/>
            <BannerBasic imgUrl={["https://img.freepik.com/foto-gratis/arreglo-creativo-dormitorio-practica-fengshui_23-2149135754.jpg?t=st=1715863053~exp=1715866653~hmac=cbf7d19cfc17fae6fe045c70bfc4a31f13f9817bd5faa4dc1647c3ab39bb7154&w=826"]} isVideo={false} messageBanner="Make every stay a memorable experience" />
          <RoomList/>

            <Footer/>
        
        </div>
    )
}




