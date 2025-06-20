import { Link, Outlet } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Dashboard = () => {
    return (
        <div className="h-screen-full grid lg:grid-cols-4">
            <div className="lg:col-span-1 col-span-1 ">
<div className="drawer h-screen">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className=" text-black cursor-pointer text-3xl  drawer-button"><FiMenu /></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li><Link to={'add'} >Add Listing</Link></li>
      <li><Link to={'Manage'}>Manage Listings</Link></li>
    </ul>
  </div>
</div>
            </div>

            <div className="col-span-3 ">
         <h1></h1>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;