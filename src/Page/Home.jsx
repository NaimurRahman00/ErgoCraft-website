import { Outlet } from "react-router-dom";
import Navbar from "../Componants/Navbar";

const Home = () => {
    return (
        <div className="w-11/12 mx-auto max-w-[1440px]">
          <Navbar></Navbar>  
          <Outlet></Outlet>
        </div>
    );
};

export default Home;