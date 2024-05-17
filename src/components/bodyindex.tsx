import React from 'react';
import emeraldKing1 from '../img/habhotel4.jpg';
import emeraldKing2 from '../img/habhotel2.jpg';
import emeraldKing3 from '../img/habhotel3.jpg';
import img360 from '../img/img360.jpg'; 

const BodyIndex: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div
        className="w-full h-[50vh] flex flex-col justify-center items-center text-center text-black bg-cover bg-center"
        style={{ backgroundImage: `url(${img360})` }} // Usa la imagen de fondo aquí
      >
        <h1 className="text-4xl mb-2">Tenemos la habitación de tus sueños</h1>
      </div>
      <div className="flex flex-wrap justify-center w-[90%] max-w-[1200px] my-8 mx-auto">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 box-border text-center bg-gray-100 shadow">
          <img src={emeraldKing1} alt="Emerald King 1" className="w-full h-[200px] object-cover mb-4" />
          <h2 className="text-2xl mt-0 mb-4">Emerald King</h2>
          <p className="text-lg mb-4">
            This spacious 44m² apartment features one bedroom with two beds, one bathroom, luxury linens with 400-thread-count sheets,
            Loccitane amenities, a living room, a full kitchen and a 4K television with DirecTV.
          </p>
          <button className="text-lg py-2 px-8 bg-green-500 text-white rounded hover:bg-green-600">Ver habitaciones</button>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 box-border text-center bg-gray-100 shadow">
          <img src={emeraldKing2} alt="Emerald King 2" className="w-full h-[200px] object-cover mb-4" />
          <h2 className="text-2xl mt-0 mb-4">Emerald King</h2>
          <p className="text-lg mb-4">
            This spacious 44m² apartment features one bedroom with two beds, one bathroom, luxury linens with 400-thread-count sheets,
            Loccitane amenities, a living room, a full kitchen and a 4K television with DirecTV.
          </p>
          <button className="text-lg py-2 px-8 bg-green-500 text-white rounded hover:bg-green-600">Ver habitaciones</button>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 box-border text-center bg-gray-100 shadow">
          <img src={emeraldKing3} alt="Emerald King 3" className="w-full h-[200px] object-cover mb-4" />
          <h2 className="text-2xl mt-0 mb-4">Emerald King</h2>
          <p className="text-lg mb-4">
            This spacious 44m² apartment features one bedroom with two beds, one bathroom, luxury linens with 400-thread-count sheets,
            Loccitane amenities, a living room, a full kitchen and a 4K television with DirecTV.
          </p>
          <button className="text-lg py-2 px-8 bg-green-500 text-white rounded hover:bg-green-600">Ver habitaciones</button>
        </div>
      </div>
    </div>
  );
}

export default BodyIndex;
