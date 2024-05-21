import { Button } from "@nextui-org/button";
import React from "react";

type Hotel = {
	name: string;
	ubication: string;
	contact: string;
	imageUrl: string;
	qualification: number;
};

const hotels: Hotel[] = [
	{
		name: "Luxury",
		ubication: "Medellin",
		contact: "hotel@exemplo.com",
		imageUrl: "path-to-image.jpg",
		qualification: 5.0,
	},
	{
		name: "Luxury",
		ubication: "Medellin",
		contact: "hotel@exemplo.com",
		imageUrl: "path-to-image.jpg",
		qualification: 5.0,
	},
	{
		name: "Luxury",
		ubication: "Medellin",
		contact: "hotel@exemplo.com",
		imageUrl: "path-to-image.jpg",
		qualification: 5.0,
	},
];

const HotelList: React.FC = () => {
	return (
		<div className="bg-gray-50 flex items-center justify-center">
			<div className="w-[80vw] flex flex-col">
				{hotels.map((hotel, index) => (
					<div key={index} className="mb-6 w-full bg-white flex gap-4">
						<img
							src={hotel.imageUrl}
							alt={hotel.name}
							className="w-[40%] bg-black"
						/>
						<div className=" w-[60%] ">
							<h2 className="font-Playfair text-subtitulos mb-4">
								{hotel.name}
							</h2>
							<p className="mt-8 font-Lato">{hotel.ubication}</p>
							<p className="mt-5 font-bold font-Playfair">{hotel.ubication}</p>
							<div className="flex justify-end mr-20">
								<Button className="font-Playfair btn-black">
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

export default HotelList;
