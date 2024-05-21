import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import {  API_URLS } from "../data/ApiUrls";
import { fetchData } from "../data/DataApi"

const images = [
  "https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg",
  "https://img.freepik.com/free-photo/3d-rendering-luxury-bedroom-suite-resort-hotel-with-twin-bed-living_105762-2018.jpg",
  "https://img.freepik.com/free-photo/room-interior-hotel-bedroom_23-2150683481.jpg"
];

const LuxuryRooms: React.FC = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await fetchData(API_URLS.ROOMSTYPES, 1, 3); // Obtener solo 3 tipos de habitación
        const roomsWithImages = data.content.map((room, index) => ({
          ...room,
          image: images[index % images.length] // Asignar una imagen de la lista
        }));
        setRooms(roomsWithImages);
      } catch (error) {
        console.error("Error fetching room types:", error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="bg-CWhite w-full h-auto py-16 flex justify-center items-center flex-col gap-14 max-md:flex-col">
      <h2 className="text-3xl font-bold text-center">Luxury rooms</h2>
      <div className="flex justify-center items-start gap-8 w-[80%] max-md:flex-col max-md:w-screen">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="w-[40vw] h-auto overflow-hidden flex flex-col justify-center items-start  gap-4 max-md:w-[90vw]"
          >
            <img className="w-full h-44" src={room.image} alt={room.name} />
            <div className="flex flex-col justify-start items-center gap-4">
              <div className="font-bold text-xl  font-Playfair">
                {room.name}
              </div>
              <p className="text-gray-700 text-base text-center">
                {room.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <a href="#" className="btn-black">View More Rooms</a>
    </div>
  );
};

export default LuxuryRooms;
