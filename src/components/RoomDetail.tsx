import React from "react";

type Room = {
	name: string;
	description: string;
	price: string;
};

const room: Room = {
	name: "Habitacion luxury",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus aliquam velit, et laoreet neque malesuada vitae. Vivamus a elit vel dui lobortis aliquam. Ut vestibulum consequat metus sit amet suscipit. Aenean et luctus eros. In leo arcu, facilisis at turpis ac, convallis blandit sapien. Vestibulum ac magna a quam ultricies sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc euismod blandit metus mollis ultricies. Quisque at vulputate dolor. Phasellus nec arcu nec nunc malesuada condimentum. Nulla sed ligula eu odio pharetra vulputate.",
	price: "$1,000.000",
};

const RoomDetail: React.FC = () => {
	return (
		<div className="w-screen h-auto flex flex-col justify-between  items-center py-10">
			<div className="w-[80%] flex justify-center items-center flex-col gap-8">
				<h2 className="font-Playfair text-subtitulos text-center">
					{room.name}
				</h2>
				<p
					className="
        text-base  text-justify"
				>
					{room.description}
				</p>

				<p className="font-Playfair text-subtitulos text-CGold">{room.price}</p>
			</div>
		</div>
	);
};

export default RoomDetail;
