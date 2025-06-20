import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const BookingForm = ({ listingId, userEmail }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const bookingData = {
      ...data,
      userEmail,
      listingId,
    };

    try {
      const res = await axios.post("http://localhost:5000/bookings", bookingData);
      if (res.status === 200 || res.status === 201) {
        alert("Booking successful!");
        reset();
      }
    } catch (error) {
      console.error("Booking failed", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 border rounded space-y-4 shadow">

      <div>
        <label className="text-black">Check-in Date</label>
        <input
          type="date"
          {...register("checkIn", { required: true })}
          className="w-full border p-2 rounded"
        />
        {errors.checkIn && <span className="text-red-500">Check-in date is required</span>}
      </div>

      <div>
        <label className="text-black">Check-out Date</label>
        <input
          type="date"
          {...register("checkOut", { required: true })}
          className="w-full border p-2 rounded"
        />
        {errors.checkOut && <span className="text-red-500">Check-out date is required</span>}
      </div>

      <div>
        <label className="text-black">Number of Guests</label>
        <input
          type="number"
          {...register("guests", { required: true, min: 1 })}
          className="w-full border p-2 rounded"
        />
        {errors.guests && <span className="text-red-500">Guests number is required</span>}
      </div>

      <div>
        <label className="text-black">Special Requests</label>
        <textarea
          {...register("specialRequest")}
          className="w-full border p-2 rounded"
        ></textarea>
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;
