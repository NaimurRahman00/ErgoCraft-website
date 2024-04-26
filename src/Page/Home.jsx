import { Outlet } from "react-router-dom";
import Navbar from "../Componants/Navbar";
import Footer from "../Componants/Footer";

const Home = () => {
    return (
        <div className="">
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Home;