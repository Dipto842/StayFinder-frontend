import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";


const Price = () => {
  const nebigation = useNavigate();
  const [searchParams] = useSearchParams();
  const location = searchParams.get('location') || "All Locations"; // Get the location from search params or default to "All Locations"
     const [price, setPrice] = useState(10000000);
const hendelPriceChange = (e) => {
    const selectedPrice = e.target.value; 
setPrice(selectedPrice);
    // Navigate to the home page with the selected price as state
    nebigation(`/?location=${encodeURIComponent(location)}&price=${encodeURIComponent(selectedPrice)}`);
};
     
    return (
        <div>
                <div className="mb-4 text-slate-500">
  <label className="label ">
    <span className="label-text font-black text-slate-700 ">Max Price: ${price}</span>
  </label>
  <input
    type="range"
    min={0}
    max={10000000}
    value={price}
    onChange={(e) => hendelPriceChange(e)}
    className="range range- text-slate-600 w-full "
  />
</div>
        </div>
    );
};

export default Price;