import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Maine from "./Maine";
import Home from "./Components/Pages/Home";
import CaridDitels from "./Components/Carid/CaridDitels";
import Login from "./Components/Login & Register/Login";
import Register from "./Components/Login & Register/Register";

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
    ]

  },
  {
    path:"/login",
    element:<Login></Login>
  },
  {
path:"/Register",
element:<Register></Register>
  }



]);

export default router;