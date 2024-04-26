import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

const Discover = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto max-w-[1440px] pb-6">
        <h2 className="text-[4.5rem] font-medium font-unbounded text-center uppercase">
          Discover
        </h2>
        <div className="bg-neutral-300/80 px-24 rounded-xl my-20 py-28 relative">
          <h2 className="text-[2.5rem] font-bold text-black mb-1">
            Get Connected with Us
          </h2>
          <p className="">
            Follow and find super attractive price quotes <br /> from us, Find
            your need
          </p>
          <div className="flex items-center gap-4">
            <button className="rounded-full px-10 py-3.5 text-white font-semibold text-base mt-5 border-black hover:bg-transparent hover:text-black hover:border-black border-2 bg-black/90 ">
              Follow Now
            </button>
            <button className="rounded-full text-white font-semibold mt-5 text-3xl py-3 px-3 bg-black/90 ">
              <FaInstagram />
            </button>
            <button className="rounded-full text-white font-semibold mt-5 text-3xl py-3 px-3 bg-black/90 ">
              <FaFacebookF />
            </button>
            <button className="rounded-full text-white font-semibold mt-5 text-3xl py-3 px-3 bg-black/90 ">
              <FaPinterestP />
            </button>
          </div>
          <div className="max-w-lg absolute right-20 top-10">
            <img src="/public/girl.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
