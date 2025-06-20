import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Maine from "./Maine";
import Home from "./Components/Pages/Home";
import CaridDitels from "./Components/Carid/CaridDitels";
import Login from "./Components/Login & Register/Login";
import Register from "./Components/Login & Register/Register";
import Dashboard from "./Components/HostDashboard/Dashboard";
import Add from "./Components/HostDashboard/Add";
import ManageListings from "./Components/HostDashboard/ManageListings";
import Edit from "./Components/HostDashboard/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Maine></Maine>,
    children: [
   {
        path: "/",
        element:<Home></Home>
    
  },
   {
        path: "/CaridDitels/:id",
        element:<CaridDitels></CaridDitels>
    
  },
  {
    path:'/edit',
    element:<Edit></Edit>
  }
    ]

  },
  {
    path:"/login",
    element:<Login></Login>
  },
  {
path:"/Register",
element:<Register></Register>
  },
  {
    path:"Dashboard",
    element:<Dashboard></Dashboard>,
    children:[
{
  path:"add",
  element:<Add></Add>,

},
{
path:'Manage',
element:<ManageListings></ManageListings>
}
    ]
  }



]);

export default router;