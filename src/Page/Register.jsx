import Navbar from "../Componants/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Footer from "../Componants/Footer";
import { ContextData } from "../Providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { register, notify } = useContext(ContextData);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Dynamic title
  // useEffect(() => {
  //   document.title = "Berao | Register";
  // }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photoUrl = form.get("photoUrl");

    if (!/^.{6,}$/.test(password)) {
      return notify("Password length must minimum 6 letter!");
    }
    if (!/^(?=.*[A-Z]).+$/.test(password)) {
      return notify("Password must have an Uppercase letter!");
    }
    if (!/^(?=.*[a-z]).+$/.test(password)) {
      return notify("Password must have a Lowercase letter!");
    }

    register(email, password, name, photoUrl);

    // navigate after login
    navigate(location?.state ? location.state : "/");
  };

  // style
  const bgImg = {
    backgroundImage: 'url("https://i.ibb.co/pwgzst1/register-bg.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={bgImg} className="relative">
      <div className="relative h-fit max-w-[2160px] pb-[35rem] z-10 mx-auto flex justify-center items-center">
        <div className="absolute top-0 left-0 right-0">
          <Navbar></Navbar>
        </div>
        <div className="w-11/12 mx-auto max-w-[1440px] flex justify-center items-end mt-[8%]">
          {/* Form side */}
          <div className="w-full max-w-md p-10 space-y-3 rounded-[2.4rem] bg-white shadow-2xl shadow-black/15 font-sans mx-10 border">
            <h1 className="text-3xl font-bold text-center text-black/75">
              Registration
            </h1>
            <p className="text-black/85 text-center font-semibold pt-2 pb-5 w-4/5 mx-auto">
              Welcome to ErgoCraft, Enter your details to get register
            </p>
            {/* Input fields and the form started */}
            <form onSubmit={handleRegister} className="space-y-3 mt-8">
              <div className="space-y-2 text-sm">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-md border border-yellow-800/30 focus:outline-none focus:ring"
                  required
                />
              </div>
              <div className="space-y-2 text-sm">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-md border border-yellow-800/30 focus:outline-none focus:ring"
                  required
                />
              </div>
              <div className="space-y-2 text-sm">
                <input
                  type="text"
                  name="photoUrl"
                  id="photo"
                  placeholder="Photo URL"
                  className="w-full px-4 py-3 rounded-md border border-yellow-800/30 focus:outline-none focus:ring"
                />
              </div>
              <div className="space-y-2 text-sm relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md border border-yellow-800/30 focus:outline-none focus:ring"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute font-semibold right-5 top-1.5 cursor-pointer"
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
              <div className="flex justify-end text-xs ">
                <a href="#" className="hover:underline">
                  Having trouble in register?
                </a>
              </div>
              {/* Sign in Button */}
              <button className="text-lg rounded-xl relative p-[10px] block w-full bg-yellow-500 font-bold text-black/85 border-y-4 duration-500 overflow-hidden focus:border-yellow-500 z-50 group">
                Register
                <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                  Let&apos;s go
                </span>
                <span className="bg-yellow-500 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-yellow-500 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-yellow-500 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                <span className="bg-yellow-500 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
              </button>
            </form>
            <div className="divider font-semibold py-5">Or Log in</div>
            <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
              Already have an account?
              <Link
                to="/login"
                href="#"
                className="font-bold hover:text-black text-yellow-600"
              >
                Log in
              </Link>
            </p>
          </div>
          <img className="size-[32rem]" src="https://i.ibb.co/1R3dP82/girl.png" alt="" />
        </div>
      </div>
      <div className="bg-neutral-100 absolute bottom-0 z-10 right-0 left-0">
        <Footer></Footer>
      </div>
      <div className="bg-white/50 absolute top-0 right-0 left-0 bottom-0"></div>
      <ToastContainer className="z-20"></ToastContainer>
    </div>
  );
};

export default Register;
