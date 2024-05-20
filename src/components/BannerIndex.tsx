import React from "react";

const BannerIndex: React.FC = () => {
	return (
		<div
			className="relative bg-cover bg-center h-64"
			style={{
				backgroundImage: `url('https://img.freepik.com/free-photo/room-interior-hotel-bedroom_23-2150683423.jpg?t=st=1716130974~exp=1716134574~hmac=607852f4552ef0d07d870fb1b628c5309ac5817a61433d983bfa9ba07cff7a64&w=826')`,
			}}
		>
			<div className="absolute inset-0 bg-black opacity-50"></div>
			<div className="relative flex justify-center items-center h-full">
				<h1 className="text-white text-2xl font-Playfair font-semibold">
					Dream Suites: Elegance and Comfort Await You.
				</h1>
			</div>
		</div>
	);
};

export default BannerIndex;
