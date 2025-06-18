import { Outlet } from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer";


const Maine = () => {
    return (
        <div>
            <NavBar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Maine;