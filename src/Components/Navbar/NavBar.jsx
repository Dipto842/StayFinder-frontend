import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dopdoun from "./Dopdoun";


const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const  navigate = useNavigate()
  const handelSearchChange = (event) => {
      const value = event.target.value;
    setSearchTerm(event.target.value); 
     navigate(`?search=${encodeURIComponent(value)}`);
  }

  
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to={'/'}>Home</Link></li>
        <li><Link>Listings </Link></li>
        <li><Link>About  </Link></li>
        <li><Link>Contact   </Link></li>
      
        
      </ul>
    </div>
    <a className=" ml-9 text-3xl">StayFinde</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   
      <li><Link to={'/'}>Home</Link></li>
        <li><Link>Listings </Link></li>
        <li><Link>About  </Link></li>
        <li><Link>Contact   </Link></li>
    </ul>
        <div className=" absolute right-[18.5rem]   ">
        {/* Search filed */}
    <label className="input border-slate-400 bg-slate-200 text-slate-700">
  <svg className="h-[1em] opacity-50 text-gray-700 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
    
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input 
    value={searchTerm}
      onChange={handelSearchChange}
  type="search" className="bg-slate-200" placeholder="Search" />
 
</label>
    </div>
  </div>
  
  <div className="navbar-end">
<Dopdoun></Dopdoun>
  </div>
</div>
        </div>
    );
};

export default NavBar;