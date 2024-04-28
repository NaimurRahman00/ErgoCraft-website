import { Link, useLoaderData } from "react-router-dom";

const AllItem = () => {
  const allData = useLoaderData();
  console.log(allData);

  return (
    <div>
      <div className="overflow-x-auto py-10 w-11/12 mx-auto max-w-[1440px] border-t-2">
        <h2 className="text-center text-5xl font-unbounded font-semibold py-2">
          All items list
        </h2>
        <table className="min-w-[90%] rounded-b-xl overflow-hidden shadow-md border mx-auto border-slate-500 my-10 bg-slate-500/10">
          <thead className="">
            <tr className="bg-slate-500/20 text-black">
              <th className="py-4 px-6 text-lg text-left border-b">
                Product Image
              </th>
              <th className="py-4 px-4 text-lg text-left border-b">
                Product Name
              </th>
              <th className="py-4 px-4 text-lg text-left border-b">Price</th>
              <th className="py-4 px-6 text-lg text-left border-b">
                Available
              </th>
              <th className="py-4 px-6 text-lg border-b text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {allData.map((item, idx) => (
              <tr
                key={idx}
                className="hover:bg-slate-500/20 border-b transition duration-300"
              >
                <td className="py-4 px-4 flex justify-start">
                  <img
                    src={item.image}
                    alt="table navigate ui"
                    className="h-16 w-16 object-cover rounded-full bg-gray-300"
                  />
                </td>
                <td className="py-4 px-4 border-b text-xl font-medium">
                  {item.subName}
                </td>
                <td className="py-4 px-4 border-b text-lg font-medium">
                  ${item.price}
                </td>
                <td className="py-4 px-6 border-b text-lg font-medium">
                  <span className="border-4 bg-yellow-50/30 px-2 py-1 border-yellow-500/70 rounded-lg">
                    {item.stock}
                  </span>
                </td>
                <td className="py-4 px-6 border-b text-end">
                  <Link to="/viewDetais">
                    <button className="bg-yellow-500/70 hover:scale-110 scale-100 transition-all duration-100 text-black font-semibold py-2 px-4 rounded-md">
                      View details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllItem;
