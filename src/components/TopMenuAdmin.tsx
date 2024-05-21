import 'boxicons/css/boxicons.css';
import imgLogoTextoBlanco from "../assets/img/logos/logo_blanco_solo_texto.png";
import { Link } from 'react-router-dom';

export default function TopMenuAdmin(){
    return (
        <section className="bg-CBlack w-screen h-[15vh] flex justify-center items-center px-[3vw] text-CWhite gap-[25%] max-md:gap-[10%]">
            <div className='flex justify-center items-center gap-2'>
                <i className='bx bxs-user-circle icons-admin'></i> 
                <div>
                    <h2 className='font-Lato font-[500] text-[18px]'>Username</h2>
                    <p className='font-[300] max-md:hidden'>User rol</p>
                </div>
            </div>
            <div className='mr-[14%] max-md:hidden'>
                <img src={imgLogoTextoBlanco} width={"180px"} alt="" />
            </div>
            <div>
                <Link to={"/"} className='hover:scale-110 transition-[.2s]'>
 
                    <i className='bx bx-log-out icons-admin'></i>
                </Link>
            </div>
        </section>
    )
}
