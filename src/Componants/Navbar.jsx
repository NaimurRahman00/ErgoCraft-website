import { useContext, useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../Providers/AuthProvider";
import { LuShoppingCart } from "react-icons/lu";
import { ContextData } from "../Providers/AuthProvider";

const Navbar = () => {
  const { currentUser, userPhoto, userName, loading, logOut } =
    useContext(ContextData);
  // const [isDarkTheme, setIsDarkTheme] = useState(false);
  // const toggleTheme = () => {
  //   setIsDarkTheme((prevTheme) => !prevTheme);
  // };

  // Profile
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);
  const items = ["Profile", "Dashboard", "Settings", "Log Out"];

  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, []);

  // Logout
  const handleLogOut = () => {
    logOut().then().catch();
  };

  return (
    <div className="">
      <nav className="flex items-center justify-between px-4 py-5 w-11/12 mx-auto max-w-[1440px]">
        <div className="flex items-center justify-between w-full">
          <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold transition-all duration-200 hover:scale-110">
            <h2 className="font-montserrat text-3xl flex gap-3 items-center">
              <img src="/bag.png" className="size-10" alt="" />{" "}
              <span>ErgoCraft</span>
            </h2>
          </div>
          <div className="flex items-center justify-between gap-8">
            {/* navlink 1 */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "group flex font-semibold cursor-pointer flex-col"
                  : "group flex font-semibold cursor-pointer flex-col"
              }
            >
              Home{" "}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "mt-[2px] h-[3px] rounded-full bg-yellow-500 transition-all duration-300 w-full"
                    : "mt-[2px] h-[3px] w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"
                }
              ></NavLink>
            </NavLink>
            {/* navlink 2 */}
            <NavLink
              to="/allItems"
              className={({ isActive }) =>
                isActive
                  ? "group flex font-semibold cursor-pointer flex-col"
                  : "group flex font-semibold cursor-pointer flex-col"
              }
            >
              All Items{" "}
              <NavLink
                to="/allItems"
                className={({ isActive }) =>
                  isActive
                    ? "mt-[2px] h-[3px] rounded-full bg-yellow-500 transition-all duration-300 w-full"
                    : "mt-[2px] h-[3px] w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"
                }
              ></NavLink>
            </NavLink>
            {/* navlink 3 */}
            <NavLink
              to="/addItem"
              className={({ isActive }) =>
                isActive
                  ? "group flex font-semibold cursor-pointer flex-col"
                  : "group flex font-semibold cursor-pointer flex-col"
              }
            >
              Add Item{" "}
              <NavLink
                to="/addItem"
                className={({ isActive }) =>
                  isActive
                    ? "mt-[2px] h-[3px] rounded-full bg-yellow-500 transition-all duration-300 w-full"
                    : "mt-[2px] h-[3px] w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"
                }
              ></NavLink>
            </NavLink>
            {/* navlink 4 */}
            <NavLink
              to="/myList"
              className={({ isActive }) =>
                isActive
                  ? "group flex font-semibold cursor-pointer flex-col"
                  : "group flex font-semibold cursor-pointer flex-col"
              }
            >
              My Items{" "}
              <NavLink
                to="/myList"
                className={({ isActive }) =>
                  isActive
                    ? "mt-[2px] h-[3px] rounded-full bg-yellow-500 transition-all duration-300 w-full"
                    : "mt-[2px] h-[3px] w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"
                }
              ></NavLink>
            </NavLink>
          </div>
          <div className="flex items-center justify-between gap-5">
            <div className="relative">
              <IoSearch className="absolute top-1/2 -translate-y-[45%] left-6" />
              <input
                type="text"
                className="bg-gray-100 w-[18rem] py-4 px-11 border rounded-full text-black/80 text-xs"
                placeholder="Search for products"
              />
              <button className="absolute right-2 top-1/2 -translate-y-[50%] rounded-full bg-yellow-500 px-6 py-2.5 text-xs font-bold text-black duration-300 active:scale-95 uppercase font-poppins">
                Search
              </button>
            </div>
            {loading ? (
              <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-sky-900 border-sky-400"></div>
            ) : (
              <div>
                {currentUser ? (
                  <div className="flex gap-3 items-center justify-center">
                    <button className="rounded-full bg-slate-100 px-2 py-2 flex justify-center items-center text-xl text-black font-bold transition-all duration-300 hover:scale-90">
                      <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input
                          type="checkbox"
                          className="theme-controller"
                          value="synthwave"
                        />

                        {/* sun icon */}
                        <svg
                          className="swap-off fill-current w-10 h-10"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                          className="swap-on fill-current w-10 h-10"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                      </label>
                    </button>
                    <div
                      ref={dropDownRef}
                      className="relative mx-auto w-fit rounded-full bg-slate-100 text-xl text-black font-bold"
                    >
                      <button onClick={() => setOpen((prev) => !prev)}>
                        <div className="pointer group relative h-10">
                          {/* Hover button */}
                          <button className="inline">
                            <img
                              width={60}
                              height={60}
                              className="w-[52px] rounded-full bg-slate-500 object-cover duration-500 hover:scale-x-[98%] hover:opacity-80"
                              src={currentUser?.photoURL}
                              alt={currentUser?.displayName.charAt(0)}
                            />
                          </button>
                          {/* Hover Text */}
                          <div className="absolute -left-[200px] top-0 flex cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-left-[220px] group-hover:opacity-100">
                            <p className="h-fit rounded-md bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]">
                              {currentUser?.displayName || "My Name"}
                            </p>
                            <span className="absolute -right-2 top-[50%] h-0 w-0 -translate-y-1/2 rotate-45 border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
                          </div>
                        </div>
                      </button>
                      <ul
                        className={`${
                          open ? "visible duration-300" : "invisible"
                        } absolute -right-8 top-14 z-50 w-fit text-base rounded-sm bg-slate-200 shadow-md`}
                      >
                        <li
                          onClick={handleLogOut}
                          className={`rounded-sm px-6 w-40 py-2 text-red-500 hover:bg-red-600 hover:text-white ${
                            open ? "opacity-100 duration-300" : "opacity-0"
                          }`}
                        >
                          Log Out
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-4">
                    <Link to="/login">
                      <button className="rounded-full bg-transparent border-2 border-yellow-500 px-6 py-2 text-yellow-500 font-bold transition-all duration-300 hover:scale-90">
                        Log In
                      </button>
                    </Link>
                    <Link to="/register">
                      <button className="rounded-full bg-transparent border-2 border-yellow-500 px-6 py-2 text-yellow-500 font-bold transition-all duration-300 hover:scale-90">
                        Register
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
