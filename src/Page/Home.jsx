import { Outlet } from "react-router-dom";
import Navbar from "../Componants/Navbar";
import Footer from "../Componants/Footer";
import { ToastContainer } from "react-toastify";

const Home = () => {
    return (
        <div className="">
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
          <ToastContainer className="z-20"></ToastContainer>
        </div>
    );
};

export default Home;