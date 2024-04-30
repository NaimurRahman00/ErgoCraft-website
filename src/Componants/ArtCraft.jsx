
import ArtCraftCard from "./ArtCraftCard";
import { useLoaderData } from "react-router-dom";

const ArtCraft = () => {
  const {anotherCrafts} = useLoaderData();

  const items = anotherCrafts;

  return (
    <div className="w-[90%] mx-auto max-w-[1440px]">
      <h2 className="text-[4.5rem] font-medium font-unbounded text-center uppercase">
        Art & Craft
      </h2>
      <div className="grid grid-rows-2 grid-cols-3 gap-10 my-20">
        {items.map((item, idx) => (
          <ArtCraftCard item={item} key={idx}></ArtCraftCard>
        ))}
      </div>
      <div className="w-fit mx-auto">
        <button className="rounded-full px-14 py-3 font-bold text-2xl mb-20 text-white border-2 bg-[#00172d]">
          View more
        </button>
      </div>
    </div>
  );
};

export default ArtCraft;
