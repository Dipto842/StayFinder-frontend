

import Carid from "../Carid/Carid";
import '../Carid/card.css';
import Price from "../Filters/Price";

import Location from "../Filters/location";

const Home = () => {
    
   
    
    return (
        <div className="lg:grid grid-cols-3 gap-40 p-4 mt-20 mb-44">
            <div className="bg-slate-200 p-4 col-span-1 lg:min-h-screen  rounded-lg">
<div className="flex items-center justify-between  gap-2"> 
    <h1 className="text-3xl text-gray-700 font font-medium tracking-[2px]">filters</h1>
  
</div>

<h1 className="border-b-2 border-slate-400 mt-5 mb-5"></h1>


<div>
<Location></Location>
    {/* price filed  */}
<Price></Price>


</div>

            </div>
          
            <div>
              <Carid 
              
              
              ></Carid>
            </div>
        </div>
    );
};

export default Home;