// RoomList.tsx
import React, { useEffect, useState } from "react";
import 'boxicons/css/boxicons.css';
import { useNavigate } from "react-router-dom";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { fetchData } from "../data/DataApi";
import { API_URLS } from "../data/ApiUrls";

type Room = {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  capacity: number;
};

type TypeRoom = {
  name: string;
  description: string;
  rooms: Room[];
};

const images = [
  "https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg",
  "https://img.freepik.com/free-photo/3d-rendering-luxury-bedroom-suite-resort-hotel-with-twin-bed-living_105762-2018.jpg",
  "https://img.freepik.com/free-photo/room-interior-hotel-bedroom_23-2150683481.jpg"
];

const RoomList: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>("Any");
  const [selectedCapacity, setSelectedCapacity] = useState<number | null>(null);
  const [rooms, setRooms] = useState<{ typeRoom: TypeRoom; room: Room }[]>([]);
  const [filteredRooms, setFilteredRooms] = useState<{ typeRoom: TypeRoom; room: Room }[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await fetchData(API_URLS.ROOMSTYPES, 0, 10);
        console.log("Fetched data:", data);

        const roomsWithDetails = data.content.flatMap((typeRoom: TypeRoom) =>
          typeRoom.rooms.map((room) => ({
            typeRoom,
            room: {
              ...room,
              imageUrl: images[Math.floor(Math.random() * images.length)]
            }
          }))
        );

        console.log("Rooms with details:", roomsWithDetails);
        setRooms(roomsWithDetails);
        setFilteredRooms(roomsWithDetails);
      } catch (error) {
        console.error("Error fetching room types:", error);
      }
    };

    fetchRooms();
  }, []);

  useEffect(() => {
    filterRooms();
  }, [selectedType, selectedCapacity]);

  const filterRooms = () => {
    let filtered = rooms;

    if (selectedType && selectedType !== "Any") {
      filtered = filtered.filter(({ typeRoom }) => typeRoom.name === selectedType);
    }

    if (selectedCapacity) {
      filtered = filtered.filter(({ room }) => room.capacity === selectedCapacity);
    }

    setFilteredRooms(filtered);
  };

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  };

  const handleMoreDetails = (typeRoom: TypeRoom, room: Room) => {
    navigate(`/room/${encodeURIComponent(room.name)}`, { state: { typeRoom, room } });
  };

  return (
    <div className="bg-CGray flex flex-col items-center px-4">
      <div className="flex flex-wrap justify-center gap-4 py-4">
        <div className="mb-4">
          <Dropdown>
            <DropdownTrigger>
              <Button className="font-Lato">
                {selectedType || "Select Type"}
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Room Types">
              <DropdownItem
                key="any"
                onClick={() => setSelectedType("Any")}
              >
                Any
              </DropdownItem>
              {rooms.map(({ typeRoom }, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => setSelectedType(typeRoom.name)}
                >
                  {typeRoom.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="mb-4">
          <Dropdown>
            <DropdownTrigger>
              <Button className="font-Lato">
                {selectedCapacity !== null ? `Capacity: ${selectedCapacity}` : "Select Capacity"}
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Room Capacity">
              <DropdownItem
                key="any"
                onClick={() => setSelectedCapacity(null)}
              >
                Any
              </DropdownItem>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((cap) => (
                <DropdownItem
                  key={cap}
                  onClick={() => setSelectedCapacity(cap)}
                >
                  {cap}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        {filteredRooms.map(({ typeRoom, room }, index) => (
          <div key={index} className="mb-6 w-full max-w-4xl bg-[#f3f3f3] flex flex-col md:flex-row gap-4 shadow-lg rounded-lg">
            <img
              src={room.imageUrl}
              alt={room.name}
              className="w-full md:w-1/2 bg-black object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-start items-start gap-3">
              <h2 className="font-Playfair text-subtitulos mb-4">
                {typeRoom.name}
              </h2>
              <p>{typeRoom.description}</p>
              <p>{room.description}</p>
              <p className="font-bold font-Playfair">{formatPrice(room.price)}</p>
              <p className="flex justify-start items-center gap-1">Capacity: <i className='bx bxs-user'></i> {room.capacity}</p>
              <div className="flex justify-end w-full">
                <Button className="font-Playfair mt-4 btn-black" onClick={() => handleMoreDetails(typeRoom, room)}>
                  More details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomList;
