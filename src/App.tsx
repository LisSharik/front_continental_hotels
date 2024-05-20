import React from "react";
import Contact from "./components/Contact";
import BookingForm from "./components/BookingForm";
import BannerIndex from "./components/BannerIndex";
import LuxuryRooms from "./components/LuxuryRooms";

const App: React.FC = () => {
	return (
		<>
			<div className="bg-CBlack w-full h-auto flex items-center justify-start flex-col">
				<BookingForm />
			</div>
			<BannerIndex />
			<LuxuryRooms />
			<div className="bg-gray-100 w-full h-auto flex items-center justify-start flex-col">
				<Contact />
			</div>
		</>
	);
};

export default App;
