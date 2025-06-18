import * as ReactDOM from "react-dom/client";
import './index.css'
import router from "./route.jsx";
import React from "react";

import {
 
  RouterProvider,
} from "react-router-dom";
import AuthProvider from "./Components/firebase/Authentication.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
     <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>
);
