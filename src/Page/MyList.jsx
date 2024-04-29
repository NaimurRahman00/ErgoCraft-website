import { useLoaderData } from "react-router-dom";
import MyItemCard from "../Componants/MyItemCard";
import { useState } from "react";

const MyList = () => {
const allCard = useLoaderData();
const [myCard, setMyCard] = useState(allCard)

  // const bgImg = {
  //   backgroundImage: 'url("/public/register-bg.jpg")',
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };

  return (
    <div className="relative">
      <h2 className="text-center text-5xl font-unbounded font-semibold pt-5">
        My added items
      </h2>
      <div className="w-10/12 mx-auto max-w-[1440px] py-10">
        <div className="flex gap-10 items-start justify-center flex-wrap">
          {myCard.map((cardData, idx) => (
            <MyItemCard key={idx} cardData={cardData} myCard={myCard} setMyCard={setMyCard}></MyItemCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyList;
