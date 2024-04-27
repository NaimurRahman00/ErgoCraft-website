import MyItemCard from "../Componants/MyItemCard";

const MyList = () => {
  // item
  const items = [1, 2, 3];

  const bgImg = {
    backgroundImage: 'url("/public/register-bg.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={bgImg} className="relative">
      <h2 className="text-center text-5xl font-unbounded font-semibold pt-5">
        My added items
      </h2>
      <div className="w-10/12 mx-auto max-w-[1440px] grid grid-cols-12 gap-10 py-10">
        {/* Col 1 */}
        <div className="col-span-4 mt-40 space-y-10">
          {items.map((item, idx) => (
            <MyItemCard key={idx}></MyItemCard>
          ))}
        </div>
        {/* Col 2 */}
        <div className="col-span-4 space-y-10">
          {items.map((item, idx) => (
            <MyItemCard key={idx}></MyItemCard>
          ))}
        </div>
        {/* Col 3 */}
        <div className="col-span-4 mt-40 space-y-10">
          {items.map((item, idx) => (
            <MyItemCard key={idx}></MyItemCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyList;
