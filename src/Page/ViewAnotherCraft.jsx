import { useLoaderData } from "react-router-dom";
import AnotherCard from "../Componants/AnotherCard";

const ViewAnotherCraft = () => {
    const cards = useLoaderData()
    console.log(cards)

  return (
    <div className="w-11/12 mx-auto max-w-[1440px] ">
        <div className="py-10 text-center font-unbounded text-4xl font-bold">
            <h1>{cards.map(card => card.subcategory_Name)}</h1>
        </div>
      <div className="flex justify-center gap-10 items-start pb-20">
        {cards.map((card, idx) => (
          <AnotherCard key={idx} card={card}></AnotherCard>
        ))}
      </div>
    </div>
  );
};

export default ViewAnotherCraft;
