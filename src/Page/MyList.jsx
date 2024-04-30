import { useLoaderData } from "react-router-dom";
import MyItemCard from "../Componants/MyItemCard";
import { useContext, useEffect, useState } from "react";
import { ContextData } from "../Providers/AuthProvider";

const MyList = () => {
const allCard = useLoaderData();
const { currentUser } = useContext(ContextData)
const [myItem, setMyItem] = useState();

console.log(currentUser.email);


  // const bgImg = {
  //   backgroundImage: 'url("/public/register-bg.jpg")',
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };

  useEffect(()=>{
    fetch(`http://localhost:5000/craft/${currentUser?.myEmail}`)
    .then(res => res.json())
    .then(data => {
      const filterMydata = data.filter(my => my.myEmail === currentUser.email);
      setMyItem(filterMydata);
    })
  }, [currentUser]);


  return (
    <div className="relative">
      <h2 className="text-center text-5xl font-unbounded font-semibold pt-5">
        My added items
      </h2>
      <div className="w-10/12 mx-auto max-w-[1440px] py-10">
        <div className="flex gap-10 items-start justify-center flex-wrap">
          {myItem?.map((cardData, idx) => (
            <MyItemCard key={idx} cardData={cardData} myItem={myItem} setMyItem={setMyItem}></MyItemCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyList;
