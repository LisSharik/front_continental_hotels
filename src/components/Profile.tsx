import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl mx-auto flex items-start space-x-8">

      <div className="flex flex-col items-center">
        <div className="w-36 h-36 bg-gray-500 rounded-full flex items-center justify-center text-white text-5xl">
          👤
        </div>
        <div className="mt-4 text-lg font-semibold">Nombre del Usuario </div>
      </div>
      <div className="w-full">
        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label htmlFor="first-name" className="block font-bold mb-1">Nombre:</label>
            <input type="text" id="first-name" placeholder="Ingrese su nombre" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="w-1/2">
            <label htmlFor="last-name" className="block font-bold mb-1">Apellido:</label>
            <input type="text" id="last-name" placeholder="Ingrese su apellido" className="w-full p-2 border border-gray-300 rounded" />
          </div>
        </div>
        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label htmlFor="age" className="block font-bold mb-1">Edad:</label>
            <input type="number" id="age" placeholder="Ingrese su edad" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="w-1/2">
            <label htmlFor="mobile" className="block font-bold mb-1">Celular:</label>
            <input type="tel" id="mobile" placeholder="Ingrese su número de celular" className="w-full p-2 border border-gray-300 rounded" />
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Editar.</button>
      </div>
    </div>
  );
};

export default Profile;
