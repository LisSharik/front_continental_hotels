import 'boxicons/css/boxicons.css';
import imgLogoTextoBlanco from "../assets/img/logos/logo_blanco_solo_texto.png";

export default function TopMenuAdmin(){
    return (
        <section className="bg-CBlack w-screen h-[15vh] flex justify-center items-center px-[3vw] text-CWhite gap-[25%]">
            <div className='flex justify-center items-center gap-2'>
                <i className='bx bxs-user-circle icons-admin'></i> 
                 <div>
                    <h2 className='font-Lato font-[500] text-[18px]'>Nombre de usuario</h2>
                    <p className='font-[300]'>Rol Usuario</p>
                </div>
            </div>
            <div className='mr-[14%]'>
                <img src={imgLogoTextoBlanco} width={"180px"} alt="" />
            </div>
            <div>
                <button>
                    <i className='bx bxs-cog icons-admin'></i>
                </button>
            </div>

        </section>
    )
}