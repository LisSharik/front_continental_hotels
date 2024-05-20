import React from "react";

const rooms = [
	{
		title: "Emerald King",
		description:
			"This spacious 46m² apartment features one bedroom with... television with DirecTV.",
		image:
			"https://www.freepik.com/free-photo/luxury-bedroom-hotel_4692014.htm#fromView=search&page=1&position=18&uuid=26a8f974-e2b2-4734-8ee3-fa12aefe9108",
	},
	{
		title: "Emerald King",
		description:
			"This spacious 46m² apartment features one bedroom with... television with DirecTV.",
		image:
			"https://www.freepik.com/free-photo/3d-rendering-luxury-bedroom-suite-resort-hotel-with-twin-bed-living_18320830.htm#fromView=search&page=1&position=39&uuid=f2ef3f99-d9a8-4ed8-a097-d0286e8b56c2",
	},
	{
		title: "Emerald King",
		description:
			"This spacious 46m² apartment features one bedroom with... television with DirecTV.",
		image:
			"https://www.freepik.com/free-ai-image/room-interior-hotel-bedroom_58557009.htm#fromView=search&page=1&position=46&uuid=26a8f974-e2b2-4734-8ee3-fa12aefe9108",
	},
];

const LuxuryRooms: React.FC = () => {
	return (
		<div className="bg-white py-16">
			<h2 className="text-3xl font-Playfair font-bold text-center mb-8">
				Luxury rooms
			</h2>
			<div className="flex justify-center space-x-8">
				{rooms.map((room, index) => (
					<div
						key={index}
						className="max-w-sm rounded overflow-hidden shadow-lg"
					>
						<img className="w-full" src={room.image} alt={room.title} />
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2 font-Playfair">
								{room.title}
							</div>
							<p className="text-gray-700 text-base font-Lato">
								{room.description}
							</p>
						</div>
						<div className="px-6 pt-4 pb-2">
							<button className="btn-black font-Lato py-2 px-4 rounded">
								more details
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default LuxuryRooms;
