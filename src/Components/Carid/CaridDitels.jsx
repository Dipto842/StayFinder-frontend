import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./card.css";

import axios from "axios";
import BookingForm from "./BookingForm";
import { AuthContext } from "../firebase/Authentication";
const CaridDitels = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
const {user}=useContext(AuthContext); 
  useEffect(() => {
    axios.get(`https://stayfinder-sarvar.onrender.com/listings/${id}`)
     
      .then((data) => {
       
        setData(data.data);
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
    <BookingForm listingId={data._id} userEmail={user?.email} ></BookingForm>
    </div>
  );
};

export default CaridDitels;
