import React, { useState } from "react";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
} from "@nextui-org/react";

type Room = {
	name: string;
	description: string;
	price: string;
	imageUrl: string;
};

const rooms: Room[] = [
	{
		name: "Luxury",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus aliquam velit, et laoreet neque malesuada vitae. Vivamus a elit vel dui lobortis aliquam. Ut vestibulum consequat metus sit amet suscipit. Aenean et luctus eros. In leo arcu, facilisis at turpis ac, convallis blandit sapien. Vestibulum ac magna a quam ultricies sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc euismod blandit metus mollis ultricies. Quisque at vulputate dolor. Phasellus nec arcu nec nunc malesuada condimentum. Nulla sed ligula eu odio pharetra vulputate.",
		price: "$1,000.00",
		imageUrl: "path-to-image.jpg",
	},
	{
		name: "Luxury",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
		price: "$1,000.00",
		imageUrl: "path-to-image.jpg",
	},
	{
		name: "Luxury",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
		price: "$1,000.00",
		imageUrl: "path-to-image.jpg",
	},
];

const RoomList: React.FC = () => {
	const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

	return (
		<div className="bg-gray-50 flex">
			<div className="w-[20vw] p-4 m-8">
				<h2 className="font-Lato mb-4">Filter by</h2>
				<div className="mb-4">
					<Dropdown>
						<DropdownTrigger>
							<Button className="font-Lato">
								{selectedFilter || "Filter 1"}
							</Button>
						</DropdownTrigger>
						<DropdownMenu aria-label="Static Actions">
							<DropdownItem
								key="1"
								onClick={() => setSelectedFilter("Option 1")}
							>
								Option 1
							</DropdownItem>
							{/* Más opciones de filtro aquí */}
						</DropdownMenu>
					</Dropdown>
				</div>
				<div className="mb-4">
					<Dropdown>
						<DropdownTrigger>
							<Button className="font-Lato">
								{selectedFilter || "Filter 2"}
							</Button>
						</DropdownTrigger>
						<DropdownMenu aria-label="Static Actions">
							<DropdownItem
								key="1"
								onClick={() => setSelectedFilter("Option 1")}
							>
								Option 1
							</DropdownItem>
							{/* Más opciones de filtro aquí */}
						</DropdownMenu>
					</Dropdown>
				</div>
				<div>
					<Dropdown>
						<DropdownTrigger>
							<Button className="font-Lato">
								{selectedFilter || "Filter 3"}
							</Button>
						</DropdownTrigger>
						<DropdownMenu aria-label="Static Actions">
							<DropdownItem
								key="1"
								onClick={() => setSelectedFilter("Option 1")}
							>
								Option 1
							</DropdownItem>
							{/* Más opciones de filtro aquí */}
						</DropdownMenu>
					</Dropdown>
				</div>
			</div>

			<div className="w-[80vw] p-4 mr-[10%] flex flex-col">
				{rooms.map((room, index) => (
					<div key={index} className="mb-6 w-full bg-white flex">
						<img
							src={room.imageUrl}
							alt={room.name}
							className="w-[40%] bg-black"
						/>
						<div className=" w-[60%] p-4">
							<h2 className="font-Playfair text-subtitulos mb-4">
								{room.name}
							</h2>
							<p className="mt-8 font-Lato">{room.description}</p>
							<p className="mt-5 font-bold font-Playfair">{room.price}</p>
							<div className="flex justify-end">
								<Button className="font-Playfair mt-4 btn-black">
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
