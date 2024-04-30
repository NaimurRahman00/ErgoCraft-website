import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AnotherCard = ({ card }) => {
  return (
    <div>
      <div className="mx-auto space-y-4 rounded-lg p-6 w-full border-2 flex justify-center gap-10">
        <div className="relative w-[280px]">
          <img
            width={200}
            height={200}
            className="size-[280px] rounded-2xl object-cover"
            src={card.image}
            alt="card navigate ui"
          />
          <h3 className="absolute top-2 text-sm right-2 bg-black text-white px-3 py-1 rounded-full">
            New
          </h3>
          <div className="absolute bottom-0 z-20 right-0 w-full opacity-0 transition hover:opacity-100 h-full">
            <button className="btn absolute bottom-2 right-3 w-[90%] rounded-full py-2 bg-[#1d202f] text-white flex justify-center items-center text-xl gap-2 hover:bg-[#1d202f] border-transparent hover:border-transparent font-normal">
              <IoCartOutline /> Add to card
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className=" flex-grow">
            <h1 className="text-xl pb-4 font-bold ">{card.item_name}</h1>
            <p className="text-sm text-black/50 font-medium">
              {card.short_description}
            </p>
          </div>
          <div className="flex justify-start gap-5">
            <h1 className="bg-black text-white rounded-full mt-5 px-4 py-1">
              {card.rating}
            </h1>
            <h2 className="bg-black text-white  rounded-full mt-5 px-4 py-1">
              {card.processing_time}
            </h2>
            <h2 className="bg-black text-white  rounded-full mt-5 px-4 py-1">$ {card.price}</h2>
          </div>
          <div className="pt-4 text-end">
            <Link to="/viewDetais">
              <button className="btn rounded-full w-full border-2 bg-yellow-500 text-white  font-bold px-4 hover:text-slate-800 dark:hover:bg-white  py-2 duration-300 hover:bg-gray-200">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnotherCard;
