import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Componants/Navbar";
import Footer from "../Componants/Footer";
import { useContext, useState } from "react";
import { ContextData } from "../Providers/AuthProvider";
// import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/cordova";
// import { signInWithPopup } from "firebase/auth";
// import auth from "../Firebase/firebase.init";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, signInWithGoogle, signInWithGithub } = useContext(ContextData);
  const location = useLocation();
  const navigate = useNavigate();

  // style
  const bgImg = {
    backgroundImage: 'url("https://i.ibb.co/pwgzst1/register-bg.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  // Google auth
  // const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result)
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  //  Github auth
  // const githubProvider = new GithubAuthProvider();

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then(() => {
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  // Dynamic title
  // useEffect(() => {
  //   document.title = "Berao | Log In";
  // }, []);

  // login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password)

    login(email, password, e)
    navigate(location?.state ? location.state : "/");
      // .then((result) => {
      //   console.log(result);
      //   success("Login successful!");
      //   navigate(location?.state ? location.state : "/");
      // })
      // .catch((error) => {
      //   console.log(error)
      //     notify("Invalid email or password!");
      // });
  };

  return (
    <div style={bgImg} className="relative">
      <div className="max-w-[2160px] mx-auto relative pb-[35rem] flex justify-center items-center">
        <div className="absolute top-0 left-0 right-0 z-10">
          <Navbar></Navbar>
        </div>
        <div className="flex justify-center items-end mt-[5%] z-10">
          <img className="size-[40em]" src="https://i.ibb.co/48djN5g/login-bg.png" alt="" />
          {/* Form side */}
          <div className="w-full p-10 space-y-3 rounded-[2.4rem] bg-white shadow-2xl shadow-black/15 font-sans mx-16 border">
            <h1 className="text-3xl font-bold text-center text-black/85">
              Login
            </h1>
            <p className="text-black/85 text-center font-semibold pt-2 pb-5 w-2/3 mx-auto">
              Hey, Enter your details to get sign in to your account
            </p>
            {/* Input fields and the form started */}
            <form onSubmit={handleLogin} className="space-y-3 mt-8">
              <div className="space-y-2 text-sm">
                <input
                  type="email"
                  name="email"
                  id="username"
                  placeholder="Enter Email"
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
                  Forgot Password?
                </a>
              </div>
              {/* Sign in Button */}
              <button className="text-lg rounded-xl relative p-[10px] block w-full bg-yellow-500 font-bold text-black/85 border-y-4 duration-500 overflow-hidden focus:border-yellow-500 z-50 group">
                Sign in
                <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                  Let&apos;s go
                </span>
                <span className="bg-yellow-500 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-yellow-500 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-yellow-500 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                <span className="bg-yellow-500 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
              </button>
            </form>
            <div className="flex items-center py-4 space-x-2">
              <div className="flex-1 h-px bg-gray-300"></div>
              <p className="text-sm text-gray-600 font-bold">Or sign in with</p>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            {/* Social icons */}
            <div className="flex justify-center gap-1">
              <button
                onClick={handleGoogleSignIn}
                aria-label="Log in with Google"
                className="px-3 py-2 rounded-md hover:bg-gray-200 flex justify-center items-center gap-2 border border-yellow-700/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p className="font-bold text-xl">Google</p>
              </button>
              <button
                onClick={handleGithubSignIn}
                aria-label="Log in with GitHub"
                className="px-3 py-2 rounded-md hover:bg-gray-200 flex justify-center items-center gap-2 border border-yellow-700/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                </svg>
                <p className="font-bold text-xl">Github</p>
              </button>
            </div>
            <p className="text-sm text-center gap-2 flex justify-center sm:px-6 pt-3">
              Don't have an account?
              <Link
                to="/register"
                href="#"
                className="font-bold hover:text-black text-yellow-600"
              >
                Register now
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-neutral-100 absolute bottom-0 z-10 right-0 left-0">
        <Footer></Footer>
      </div>
      <div className="bg-white/85 absolute top-0 right-0 left-0 bottom-0"></div>
      <ToastContainer className="z-20"></ToastContainer>
    </div>
  );
};

export default Login;
