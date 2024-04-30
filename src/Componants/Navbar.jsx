import { useContext, useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../Providers/AuthProvider";
import { LuShoppingCart } from "react-icons/lu";
import { ContextData } from "../Providers/AuthProvider";

const Navbar = () => {
  const { currentUser, userPhoto, userName, loading, logOut } =
    useContext(ContextData);

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
              <p>haha</p>
            ) : (
              <div>
                {currentUser ? (
                  <div className="flex gap-3 items-center justify-center">
                    <button className="rounded-full bg-slate-100 p-[16px] text-xl text-black font-bold transition-all duration-300 hover:scale-90">
                      <LuShoppingCart />
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
                              alt="avatar drop down navigate ui"
                            />
                          </button>
                          {/* Hover Text */}
                          <div className="absolute -left-[200px] top-0 flex cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-left-[220px] group-hover:opacity-100">
                            <p className="h-fit rounded-md bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]">
                              {userName || 'Your Name'}
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
