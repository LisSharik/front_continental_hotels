import { useEffect, useState } from 'react';
import imgLogoWhite from "../assets/img/logos/logo_blanco.png"
import { Button } from "@nextui-org/react";
import "../index.css";
import { Link } from 'react-router-dom';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
  });

  const handleScroll = () => {
    setScroll(window.scrollY > 0);
}

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className={`w-screen fixed top-0 h-20 flex justify-around items-center px-4 md:px-0 z-50 ${scroll ? 'bg-CBlack transition-all duration-300' : 'bg-transparent transition-all duration-300'}`}>

      <Link to={"/"}>
        <img src={imgLogoWhite} width="40px" alt="Logo Continental Hotels" className='hover:scale-105 transition-[.2s]' />
      </Link>

      <div className="hidden md:flex items-center space-x-8 text-CWhite font-Playfair font-medium text-base h-1/2">
        <Link to={"/"} className='hover:text-CGold transition-all hover:scale-[1.06]'>Home</Link>
        <Link to= {"/rooms"} className='hover:text-CGold transition-all hover:scale-[1.06]'>Rooms</Link>
        
        <Link to={"#"} className='hover:text-CGold transition-all hover:scale-[1.06]'>Login</Link>
        <div className="bg-CWhite h-full w-0.5 "></div> 
        <Link to={"#"} className="btn-white font-[800]">Register</Link>
      </div>

      <div className="md:hidden ml-32">
        <button onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-CBlack w-screen h-screen fixed top-0 space-y-10 py-9 flex flex-col items-center justify-center text-white font-Playfair font-medium text-base -z-10">
          <Link to={"/"} className='hover:text-CGold transition-all active::scale-[1.06]'>Home</Link>
          <Link to= {"/rooms"} className='hover:text-CGold transition-all active::scale-[1.06]'>Rooms</Link>
          <Link to={"#"} className='hover:text-CGold transition-all active::scale-[1.06]'>Login</Link>
          
          <Link to={"#"} className="btn btn-white">Register</Link>
        </div>
      )}
    </header>
  );
}
