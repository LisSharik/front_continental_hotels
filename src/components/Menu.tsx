import { useState } from 'react';
import imgLogoWhite from "../assets/img/logos/logo_blanco.png"
import { Button } from "@nextui-org/react";
import "../index.css";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-transparent w-screen h-20 absolute top-0 flex justify-around items-center px-4 md:px-0 ">
      <img src={imgLogoWhite} width="40px" alt="Logo Continental Hotels" />

      <div className="hidden  md:flex items-center space-x-8 text-CWhite font-Playfair font-medium text-base h-1/2">
        <p>Inicio</p>
        <p>Habitaciones</p>
        <p>Contactos</p>

        <p>Iniciar sesión</p>
        <div className="bg-CWhite h-full w-0.5 "></div> 
        <Button className="btn btn-white">Registrarse</Button>
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
        <div className="md:hidden bg-CBlack w-screen h-auto absolute top-20 space-y-10 py-7 flex flex-col items-center justify-center text-white font-Playfair font-medium text-base">
          <p>Inicio</p>
          <p>Habitaciones</p>
          <p>Contactos</p>
          <p>Iniciar sesión</p>
          <Button className="btn btn-white">Registrarse</Button>
        </div>
      )}
    </header>
  );
}
