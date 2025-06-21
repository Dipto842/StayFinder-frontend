
   import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../firebase/Authentication";
const Add = () => {
   
       
     const {user}=useContext(AuthContext);


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit =async (data) => {
    console.log("Listing Data:", data);
   
    // fetch('https://stayfinder-sarvar.onrender.com/listings', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // }).then(res => res.json())
    // .then(result => console.log(result));
await axios.post('https://stayfinder-sarvar.onrender.com/listings', data)
      .then(response => {   
        console.log("Listing added successfully:", response.data);
        // Show success message or redirect
        if (response.data.insertedId) {
             Swal.fire({
              title: "Add Successfully",
              icon: "success",
              draggable: true
            
            });
        }
      })

    reset() // Clear form
  };

  return (
    <div className="max-w-xl mx-auto mt-10  bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-slate-600">Add New Listing</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 h-">
        
        <input {...register("title", { required: true })}
          type="text" placeholder="Title"
          className="input input-bordered w-full" />
        {errors.title && <p className="text-red-500">Title is required</p>}

        <input {...register("location", { required: true })}
          type="text" placeholder="Location"
          className="input input-bordered w-full" />
        {errors.location && <p className="text-red-500">Location is required</p>}

        <input {...register("price", { required: true })}
          type="number" placeholder="Price per night"
          className="input input-bordered w-full" />
        {errors.price && <p className="text-red-500">Price is required</p>}

        <textarea {...register("description", { required: true })}
          placeholder="Description"
          className="textarea textarea-bordered w-full" />
        {errors.description && <p className="text-red-500">Description is required</p>}

        <input {...register("imageUrl", { required: true })}
          type="url" placeholder="Image URL"
          className="input input-bordered w-full" />
        {errors.image && <p className="text-red-500">Image URL is required</p>}

        <div className="grid grid-cols-3 gap-2">
          <input {...register("bedrooms", { required: true })} type="number" placeholder="Bedrooms" className="input input-bordered" />
          <input {...register("bathrooms", { required: true })} type="number" placeholder="Bathrooms" className="input input-bordered" />
          <input {...register("guests", { required: true })} type="number" placeholder="Guests" className="input input-bordered" />
        </div>

        <select {...register("propertyType", { required: true })} className="select select-bordered w-full">
          <option value="">Select Property Type</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Cabin">Cabin</option>
        </select>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm">Available From</label>
            <input {...register("availableFrom")} type="date" className="input input-bordered w-full" />
          </div>
          <div>
            <label className="block text-sm">Available To</label>
            <input {...register("availableTo")} type="date" className="input input-bordered w-full" />
          </div>
        </div>

        <div className="text-slate-500">
          <label className="block text-xl font-semibold text-slate-700 mb-1">Amenities</label>
          <div className="flex gap-4 flex-wrap">
            <label><input type="checkbox" value="WiFi" {...register("amenities")} /> WiFi</label>
            <label><input type="checkbox" value="AC" {...register("amenities")} /> AC</label>
            <label><input type="checkbox" value="Kitchen" {...register("amenities")} /> Kitchen</label>
            <label><input type="checkbox" value="Parking" {...register("amenities")} /> Parking</label>
          </div>
        </div>

        {/* Hidden hostEmail if user is logged in */}
        <input type="hidden" value={user?.email} {...register("hostEmail")} />

        <button type="submit" className="btn btn-primary w-full">Submit Listing</button>
      </form>
    </div>
  



    );
};

export default Add;