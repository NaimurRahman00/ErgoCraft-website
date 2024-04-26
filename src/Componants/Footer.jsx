import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-300/80 text-base-content py-28">
      <div className="w-[88%] mx-auto max-w-[1440px] footer grid grid-cols-12">
        <aside className="col-span-3">
          <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold transition-all duration-200 hover:scale-110">
            <h2 className="font-montserrat text-4xl mb-3 flex gap-3 items-center">
              <img src="/bag.png" className="size-10" alt="" />{" "}
              <span>ErgoCraft</span>
            </h2>
          </div>
          <p className="px-4 text-black leading-relaxed">
            ErgoCraft offers a diverse array of jute and wood crafts, perfect
            for eco-friendly, artistic, and home decor enthusiasts
          </p>
        </aside>
        <nav className="col-span-3 ml-10">
          <h6 className="text-black font-semibold text-lg font-unbounded uppercase">
            About Us
          </h6>
          <div className="flex flex-col gap-4 mt-5 text-black font-medium">
            <a className="link link-hover">How to order</a>
            <a className="link link-hover">Delivery</a>
            <a className="link link-hover">Returns and exchanges</a>
            <a className="link link-hover">Warranty</a>
            <a className="link link-hover">FAQ</a>
          </div>
        </nav>
        <nav className="col-span-2">
          <h6 className="text-black font-semibold text-lg font-unbounded uppercase">
            Information
          </h6>
          <div className="flex flex-col gap-4 mt-5 text-black font-medium">
            <a className="link link-hover">News</a>
            <a className="link link-hover">Articles</a>
            <a className="link link-hover">Brands</a>
            <a className="link link-hover">Supplies</a>
            <a className="link link-hover">Workshop</a>
          </div>
        </nav>
        <nav className="col-span-4 ml-6 mx-8">
          <h6 className="text-black font-semibold text-base font-unbounded uppercase">
            10% discount on new account creation.
          </h6>
          <div className="relative w-full border-b-2 border-gray-500 mt-4">
            <input
              className="peer focus:border-black bg-transparent py-2 text-black focus:outline-none"
              type="text"
              id="navigate_ui_input_44"
              placeholder="Name@gmail.com"
            />
            <button className="absolute right-2 bottom-2 rounded-full bg-gray-400/20 px-6 py-2.5 text-xs font-medium text-black duration-300 active:scale-95 font-poppins">
              Signup
            </button>
          </div>
          <div className="flex gap-4 justify-end w-full mt-3">
          <button className="rounded-full text-white font-semibold mt-5 text-2xl py-2 px-2 bg-black/90 ">
              <FaInstagram />
            </button>
            <button className="rounded-full text-white font-semibold mt-5 text-2xl py-2 px-2 bg-black/90 ">
              <FaFacebookF />
            </button>
            <button className="rounded-full text-white font-semibold mt-5 text-2xl py-2 px-2 bg-black/90 ">
              <FaPinterestP />
            </button>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
