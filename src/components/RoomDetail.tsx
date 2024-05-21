// RoomDetail.tsx
import React from "react";
import { useLocation } from "react-router-dom";

type Room = {
  name: string;
  description: string;
  price: number;
  capacity: number;
};

type TypeRoom = {
  name: string;
  description: string;
};

const RoomDetail: React.FC = () => {
  const location = useLocation();
  const { typeRoom, room } = location.state as { typeRoom: TypeRoom; room: Room };

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  };

  return (
    <div className="w-screen h-auto flex flex-col justify-between items-center py-10 bg-[#f2f2f2]">
      <div className="w-[80%] flex justify-center items-center flex-col gap-8">
        <h2 className="font-Playfair text-subtitulos text-center">
          {typeRoom.name}
        </h2>
        <p className="text-base text-justify">
          {typeRoom.description}
        </p>
        <p className="text-base text-justify">
          {room.description}
        </p>
        <p className="font-Playfair text-subtitulos text-CGold">
          {formatPrice(room.price)}
        </p>
        <p className="text-base text-justify">
          Capacity: {room.capacity} persons
        </p>
      </div>
    </div>
  );
};

export default RoomDetail;
