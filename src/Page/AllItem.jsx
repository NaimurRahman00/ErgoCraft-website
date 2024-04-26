const AllItem = () => {
  const items = [1, 2, 3, 4, 5, 6];

  const bgImg = {
    backgroundImage: 'url("/public/register-bg.jpg")',
    backgroundSize: "cover", 
    backgroundRepeat: "no-repeat",
  };
  return (
    <div  style={bgImg} className="">
      <div className="overflow-x-auto py-20 w-11/12 mx-auto max-w-[1440px]">
        <table className="min-w-[90%] rounded-xl overflow-hidden shadow-md border mx-auto border-gray-100 my-6 bg-white">
          <thead className="">
            <tr className="bg-yellow-500/20 text-black">
              <th className="py-4 px-6 text-lg text-left border-b">
                Product Image
              </th>
              <th className="py-4 px-6 text-lg text-left border-b">
                Product Name
              </th>
              <th className="py-4 px-6 text-lg text-left border-b">Price</th>
              <th className="py-4 px-6 text-lg text-left border-b">Category</th>
              <th className="py-4 px-6 text-lg border-b text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-50 border-b transition duration-300"
              >
                <td className="py-4 px-4 flex justify-start">
                  <img
                    src="https://source.unsplash.com/64x64/?microphone"
                    alt="table navigate ui"
                    className="h-16 w-16 object-cover bg-gray-300"
                  />
                </td>
                <td className="py-4 px-6 border-b text-xl font-medium">
                  Dual Speaker
                </td>
                <td className="py-4 px-6 border-b text-lg font-medium">
                  $99.99
                </td>
                <td className="py-4 px-6 border-b text-lg font-medium">
                  Wood
                </td>
                <td className="py-4 px-6 border-b text-end">
                  <button className="bg-yellow-500 hover:scale-110 scale-100 transition-all duration-100 text-black font-semibold py-2 px-4 rounded-md">
                    Details
                  </button>
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
