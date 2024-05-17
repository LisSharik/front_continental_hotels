import React, { useState, ChangeEvent } from "react";
import BodyIndex from './bodyindex';
import Footer from "./Footer";
import Menu from "./Menu";



const Contact: React.FC = () => {
  const [nombre, setNombre] = useState<string>("Ingrese su nombre completo");
  const [correo, setCorreo] = useState<string>("ingrese su correo electronico");
  const [descripcion, setDescripcion] = useState<string>("");

  const cambiarNombre = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNombre(value);
  };

  const cambiarCorreo = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCorreo(value);
  };

  const cambiarDescripcion = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setDescripcion(value);
  };

  const enviarFormulario = () => {
    console.log("Formulario enviado: ", { nombre, correo, descripcion });
  };

  return (
    <>
    <Menu />
    <BodyIndex />
      <div className="bg-gray-800 min-h-[20vh] flex flex-col items-center justify-center text-white text-2xl">
        <h1 className="text-4xl">contactanos</h1>
      </div>
      <div className="flex flex-col items-center m-5 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center m-5 lg:w-[45%]">
          <form
            action="https://formspree.io/f/mvoeqlkn"
            method="POST"
            className="flex flex-col items-center m-5 w-full"
          >
            <label htmlFor="nombre" className="my-2 text-lg">
              Nombre:
            </label>
            <input
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={cambiarNombre}
              className="w-4/5 p-2 mb-4 text-lg border border-gray-300 rounded-lg lg:w-full"
            />
            <label htmlFor="correo" className="my-2 text-lg">
              Correo:
            </label>
            <input
              id="correo"
              name="correo"
              type="email"
              value={correo}
              onChange={cambiarCorreo}
              className="w-4/5 p-2 mb-4 text-lg border border-gray-300 rounded-lg lg:w-full"
            />
            <label htmlFor="descripcion" className="my-2 text-lg">
              Descripción:
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={descripcion}
              onChange={cambiarDescripcion}
              className="w-4/5 p-2 mb-4 h-24 text-lg border border-gray-300 rounded-lg lg:w-full"
            />
            <button
              type="submit"
              onClick={enviarFormulario}
              className="w-1/2 p-2 text-lg text-white bg-blue-400 rounded-lg hover:bg-blue-500 transition-colors duration-300 mb-2"
            >
              Enviar
            </button>
          </form>
        </div>
        <div className="flex items-center justify-center m-5 lg:w-[45%]">
          <iframe
            title="Mapa de Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1986.4880294789813!2d-75.59857695792913!3d6.244636873141845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428b9e64f7955%3A0x5095d1a8b5b5b3d2!2sCentro%20Comercial%20de%20Moda%20Outlet%20Medellin!5e0!3m2!1ses-419!2sco!4v1620155277368!5m2!1ses-419!2sco"
            width="450"
            height="350"
            className="border-0 rounded-lg"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
