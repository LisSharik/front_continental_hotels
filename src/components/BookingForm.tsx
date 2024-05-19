import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from "@nextui-org/react";
import { Calendar } from "@nextui-org/calendar";
import "tailwindcss/tailwind.css";

const ReservationForm: React.FC = () => {
	const [hotel, setHotel] = useState<string>("Select Hotel");
	const [checkInDate, setCheckInDate] = useState<Date | null>(null);
	const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
	const [rooms, setRooms] = useState<string>("1");
	const [adults, setAdults] = useState<string>("1");
	const [children, setChildren] = useState<string>("0");

	const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
	const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);

	const handleSubmit = async () => {
		const reservation = {
			hotel,
			checkInDate,
			checkOutDate,
			rooms: Number(rooms),
			adults: Number(adults),
			children: Number(children),
		};

		const response = await fetch("http://your-backend-api/reservations", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(reservation),
		});

		if (response.ok) {
			alert("Reservation successful!");
		} else {
			alert("Reservation failed!");
		}
	};

	return (
		<div className="bg-FFFFFF px-40 py-12 text-white rounded-lg">
			<h2 className="font-Lato text-2xl mb-4">Make Your Reservation</h2>

			<div className="flex flex-col lg:flex-row lg:space-x-4">
				<div className="mb-4 lg:mb-0">
					<label className="block mb-2 min-w-[150px]">Select the Hotel</label>
					<Dropdown>
						<DropdownTrigger>
							<Button>{hotel}</Button>
						</DropdownTrigger>
						<DropdownMenu aria-label="Static Actions">
							<DropdownItem
								key="1"
								onClick={() => setHotel("Hotel Continental Bogota")}
							>
								Hotel Continental Bogota
							</DropdownItem>
							{/* Add more hotel options here */}
						</DropdownMenu>
					</Dropdown>
				</div>

				<div className="mb-4 lg:mb-0">
					<label className="block mb-2 min-w-[150px]">Check-in Date</label>
					<Button onClick={() => setShowCheckInCalendar(!showCheckInCalendar)}>
						{checkInDate ? checkInDate.toDateString() : "Select Date"}
					</Button>
					{showCheckInCalendar && (
						<Calendar
							selectedDate={checkInDate}
							onDateChange={(date: Date | null) => {
								setCheckInDate(date);
								setShowCheckInCalendar(false);
							}}
						/>
					)}
				</div>

				<div className="mb-4 lg:mb-0">
					<label className="block mb-2 min-w-[150px]">Check-out Date</label>
					<Button
						onClick={() => setShowCheckOutCalendar(!showCheckOutCalendar)}
					>
						{checkOutDate ? checkOutDate.toDateString() : "Select Date"}
					</Button>
					{showCheckOutCalendar && (
						<Calendar
							selectedDate={checkOutDate}
							onDateChange={(date: Date | null) => {
								setCheckOutDate(date);
								setShowCheckOutCalendar(false);
							}}
						/>
					)}
				</div>

				<div className="mb-4 lg:mb-0 max-w-[60px]">
					<label className="block mb-2">Rooms</label>
					<Input
						type="number"
						min={1}
						value={rooms}
						onChange={(e) => setRooms(e.target.value)}
					/>
				</div>

				<div className="mb-4 lg:mb-0 max-w-[60px]">
					<label className="block mb-2">Adults</label>
					<Input
						type="number"
						min={1}
						value={adults}
						onChange={(e) => setAdults(e.target.value)}
					/>
				</div>

				<div className="mb-4 lg:mb-0 max-w-[60px]">
					<label className="block mb-2">Children</label>
					<Input
						type="number"
						min={0}
						value={children}
						onChange={(e) => setChildren(e.target.value)}
					/>
				</div>

				<div className="mt-8">
					<Button onClick={handleSubmit}>View Rooms</Button>
				</div>
			</div>
		</div>
	);
};

export default ReservationForm;
