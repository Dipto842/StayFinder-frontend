
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";


const Location = () => {
  const nebigation = useNavigate();
  const [searchParams] = useSearchParams();
  const price = searchParams.get('price') || ""; // Get the location from search params or default to "All Locations"
const [Data, setData] = useState([]);
    const handleLocation = (e) => {
    const location = e.target.value;
 
    
    nebigation(`/?location=${encodeURIComponent(location)}&price=${encodeURIComponent(price)}`); // Navigate to the home page with the selected location and price as state
  
   
  };

    useEffect(() => {
  
      axios.get("Data.json")
      .then((response) => {
        const data = response.data;
        setData(data);
      })
      .catch((error) => { 
        console.error("Error fetching data:", error);
      });
  
  
    }, []);




    return (
        <div>
                <div>
        <fieldset className="fieldset">
  <legend className="fieldset-legend text-lg text-slate-600 font-bold">location</legend>
  <select  onChange={handleLocation} className="select bg-slate-500">
    <option >All Locations</option>
 { Data.map((item, idx) => (
    <option key={idx} value={item.location}>{item.location}</option> 
  
  ))}
  </select>
  <span className="label">Optional</span>
</fieldset>
    </div>
        </div>
    );
};

export default Location;