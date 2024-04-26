import { IoSearch } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
              My List{" "}
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
