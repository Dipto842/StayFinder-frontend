import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../firebase/Authentication';

const Dopdoun = () => {
  const {user,logout}=useContext(AuthContext); // Assuming AuthContext is imported from the correct path
    // Replace with actual user authentication logic
    const hedelLogout=()=>{
logout()
.then(()=>{
  console.log("Logout successful");
  
})
 .catch((error) => {
        console.error("Logout error:", error);
      });
    }
    return (
        <div>
             <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            
          </a>
        </li>
       {
        user?.email ?    <li onClick={hedelLogout}><Link>Logout</Link></li>:<li><Link to={'/login'}>Login/Register</Link></li>
       }
       
        
      </ul>
    </div>
  
        </div>
    );
};

export default Dopdoun;