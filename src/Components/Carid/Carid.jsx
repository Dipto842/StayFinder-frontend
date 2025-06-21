import { useEffect, useState } from "react";
import "./card.css";
import axios from "axios";
import { IoLocationOutline } from "react-icons/io5";
import CaridDitels from "./CaridDitels";
import { useNavigate, useSearchParams } from "react-router-dom";
const Carid = () => {

  const [SearchParams]=useSearchParams()
    const locations = SearchParams.get('location') || "All Locations"; 
    const price = SearchParams.get('price')  ||''
    const search = SearchParams.get('search') || ' ';
 


  const [Data, setData] = useState([]);
  const nevegetion = useNavigate();
  useEffect(() => {

    axios.get("https://stayfinder-sarvar.onrender.com/listings")
    .then((response) => {
      const data = response.data;
      setData(data);
    })
    .catch((error) => { 
      console.error("Error fetching data:", error);
    });


  }, []);
  const handleClick = (_id) => {
   
    nevegetion(`/CaridDitels/${_id}`);
    <CaridDitels  />;
    

  };
  
  const locationfiltar =Data.filter(item=>item.location===locations || locations === undefined || locations === "All Locations"   )
  
  const pricefiltar= locationfiltar.filter(item=>item.pricePerNight <=price||price===undefined|| price==="")
 

const searchfiltar = pricefiltar.filter(item => item.title.toLowerCase().includes(search.toLowerCase()) || item.location.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase()));  



  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-x-56 gap-y-6 ">
      {searchfiltar.map((item, idx) => (
        <div onClick={()=>handleClick(item._id)}  key={idx} className="w-52  rounded-b-2xl cursor-pointer shadow-lg">
          <figure>
            <img
              className="w-full rounded-t-3xl mx-auto h-52 object-cover"
              src={item.imageUrl}
              alt="Shoes"
            />
          </figure>
          <div className=" pl-2">
            <h2 className="text-black text-[14px] font front">
              { item.title }
             
            </h2>
            <p className="text-black text-[12px] font front flex gap-2">
              {item.location} <span className="text-lg text-amber-300"><IoLocationOutline /></span>
            </p>
            <p className="text-black text-[12px] font front mb-5">
              
              <span className="text-amber-400"> $</span> {item.pricePerNight} per night
              
            </p>
             <div>
                  <div className="rating text-white flex items-center ">
 
  
  <div className="mask mask-star bg-zinc-500 w-4" aria-label="3 star" aria-current="true"></div> <span className="text-black w-4">{item.rating }</span>
 
</div>
                </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carid;
