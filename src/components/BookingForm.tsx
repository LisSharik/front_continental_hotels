import React, { useState, useEffect, useRef } from "react";
import { RangeCalendar } from "@nextui-org/react";
import { today, getLocalTimeZone, parseDate, toCalendarDate } from "@internationalized/date";
import 'boxicons/css/boxicons.css';
import { fetchData } from "../data/DataApi";
import { API_URLS } from "../data/ApiUrls";

const BookingForm: React.FC = () => {
  const [dateRange, setDateRange] = useState<{ start: string; end: string }>({
    start: localStorage.getItem('admissionDate') || "",
    end: localStorage.getItem('departureDate') || ""
  });
  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(localStorage.getItem('hotelId') || "");
  const [numRooms, setNumRooms] = useState(localStorage.getItem('numRooms') || "1");
  const [adults, setAdults] = useState(localStorage.getItem('adults') || "1");
  const [children, setChildren] = useState(localStorage.getItem('children') || "0");
  const calendarRef = useRef(null);

  useEffect(() => {
    const loadHotels = async () => {
      try {
        const data = await fetchData(API_URLS.HOTELS, 1, 100); 
        setHotels(data.content || []); 
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    loadHotels();
  }, []);

  const handleDateChange = (range) => {
    if (range) {
      const startDate = range.start ? range.start.toString() : "";
      const endDate = range.end ? range.end.toString() : "";
      setDateRange({ start: startDate, end: endDate });
      setShowCheckInCalendar(false);
      setShowCheckOutCalendar(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Select date";
    const date = toCalendarDate(parseDate(dateString));
    const options = { day: 'numeric', month: 'short' };
    return new Intl.DateTimeFormat('es-ES', options).format(new Date(date.year, date.month - 1, date.day));
  };

  const handleClickOutside = (event) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      setShowCheckInCalendar(false);
      setShowCheckOutCalendar(false);
    }
  };

  useEffect(() => {
    if (showCheckInCalendar || showCheckOutCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCheckInCalendar, showCheckOutCalendar]);

  const handleViewRooms = () => {
    localStorage.setItem('admissionDate', dateRange.start);
    localStorage.setItem('departureDate', dateRange.end);
    localStorage.setItem('hotelId', selectedHotel);
    localStorage.setItem('numRooms', numRooms);
    localStorage.setItem('adults', adults);
    localStorage.setItem('children', children);
    // Aquí puedes redirigir a otra página si es necesario
  };

  return (
    <div className="bg-CBlack text-white w-screen h-auto p-6 gap-6 flex justify-center flex-col max-md:flex-col">
      <h2 className="text-2xl font-bold ml-[1%] font-Lato max-md:w-full">Make your reservation</h2>
      <div className="flex items-center justify-center gap-[3%] max-md:flex-col max-md:items-start max-md:justify-start max-md:gap-6">
        {/* Hotel Selection */}
        <div className="flex flex-col gap-2">
          <label  className="font-[600]">Select a hotel</label>
          <select
            id="hotel"
            className="bg-transparent border-none text-white p-2 rounded-md font-[100] cursor-pointer hover:bg-[#272727]"
            value={selectedHotel}
            onChange={(e) => setSelectedHotel(e.target.value)}
          >
            {hotels.map((hotel) => (
              <option key={hotel.id} value={hotel.id}>{hotel.name}</option>
            ))}
          </select>
        </div>
        {/* Check-in Date */}
        <div className="flex flex-col gap-2 relative">
          <label  className="mb-1 font-[600]">Date of entry</label>
          <button
            onClick={() => {
              setShowCheckInCalendar(!showCheckInCalendar);
              setShowCheckOutCalendar(false);
            }}
            className="bg-transparent border border-CWhite text-white p-2 rounded-md font-[100] cursor-pointer hover:bg-[#272727] text-start"
          >
            {formatDate(dateRange.start)}
          </button>
          {showCheckInCalendar && (
            <div ref={calendarRef} className="absolute top-full mt-2 z-10 bg-CBlack">
              <RangeCalendar
                aria-label="Select date range"
                minValue={today(getLocalTimeZone())}
                onChange={handleDateChange}
                className="custom-calendar"
              />
            </div>
          )}
        </div>
        {/* Check-out Date */}
        <div className="flex flex-col gap-2 relative">
          <label className="mb-1 font-[600]">Exit date</label>
          <button
            onClick={() => {
              setShowCheckOutCalendar(!showCheckOutCalendar);
              setShowCheckInCalendar(false);
            }}
            className="bg-transparent border border-CWhite text-white p-2 font-[100] cursor-pointer text-start rounded-md hover:bg-[#272727]"
          >
            {formatDate(dateRange.end)}
          </button>
          {showCheckOutCalendar && (
            <div ref={calendarRef} className="absolute top-full mt-2 z-10 bg-CBlack">
              <RangeCalendar
                aria-label="Select date range"
                minValue={today(getLocalTimeZone())}
                onChange={handleDateChange}
                className="custom-calendar"
              />
            </div>
          )}
        </div>
        {/* Rooms */}
        <div className="flex flex-col gap-2 ">
          <label  className=" font-[600]">Room</label>
          <div className="flex items-center gap-2 max-md:flex-wrap ">
            <label  className="font-thin">Rooms</label>
            <input
              id="num-rooms"
              type="number"
              className="w-[4.5vw] bg-transparent border border-CWhite text-white p-2 rounded-md font-[100] cursor-text hover:bg-[#272727] max-md:w-[15vw]"
              min="1"
              max="10"
              value={numRooms}
              onChange={(e) => setNumRooms(e.target.value)}
              placeholder="1"
            />

            <label className="font-thin">Adults</label>
            <input
              id="adults"
              type="number"
              className="w-[4.5vw] bg-transparent border border-CWhite text-white p-2 rounded-md font-[100] cursor-text hover:bg-[#272727] max-md:w-[15vw]"
              min="1"
              max="10"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              placeholder="1"
            />

            <label className="font-thin">Children</label>
            <input
              id="children"
              type="number"
              className="w-[4.5vw] bg-transparent border border-CWhite text-white p-2 rounded-md font-[100] cursor-text hover:bg-[#272727] max-md:w-[15vw]"
              min="0"
              max="10"
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              placeholder="0"
            />
          </div>
        </div>
        <button className="btn-white" onClick={handleViewRooms}>View rooms</button>
      </div>
    </div>
  );
};

export default BookingForm;
