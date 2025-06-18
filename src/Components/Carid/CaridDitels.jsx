import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./card.css";
import { IoLocationOutline } from "react-icons/io5"; // Assuming you have a CSS file for styling
const CaridDitels = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then((data) => {
        const item = data.find((item) => item.id === parseInt(id));
        setData(item);
      });
  }, [id]);

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 font">
      {/* Left: data Image & Info */}
      <div>
        <img
          src={data.imageUrl}
          alt={data.title}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
        <h2 className="text-2xl text-gray-600 font-bold mt-4">{data.title}</h2>
        <p className="text-gray-600">{data.location}</p>
        <p className="text-lg text-gray-600 font-semibold mt-2">${data.pricePerNight} / night</p>
        <p className="mt-1 text-sm  text-yellow-600">⭐ {data.rating} ({data.reviewsCount} reviews)</p>
      </div>

      {/* Right: Booking Card with Calendar */}
      <div className="border rounded-lg p-6 bg-gray-50 shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Book This Stay</h3>
        <label className="block mb-1">Check-in:</label>
        <input
          type="date"
          className="input input-bordered w-full mb-3"
        />
        <label className="block mb-1">Check-out:</label>
        <input
          type="date"
          className="input input-bordered w-full mb-3"
        />
        <button className="btn btn-primary w-full mt-2">Book Now</button>
      </div>
    </div>
  );
};

export default CaridDitels;
