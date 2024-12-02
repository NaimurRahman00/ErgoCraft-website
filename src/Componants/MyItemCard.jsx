import { useContext, useEffect, useMemo, useState } from "react";
import  { ContextData } from "../Providers/AuthProvider";

const MyItemCard = ({ cardData, myItem, setMyItem }) => {
  const {success} = useContext(ContextData)
  const { _id, name, myEmail} = cardData;

  // Delete modal
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  // delete card
  const handleDelete = (id) => {
    // console.log(id);
    fetch(`https://ergocraft.vercel.app/craft/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          success("Item deleted succesfully!")
          const remaining = myItem.filter(card => card._id !== _id);
          setMyItem(remaining)
        }
      });
  };

  // update
  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const subName = form.sub_name.value;
    const image = form.image.value;
    const price = form.price.value;
    const time = form.processing_time.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const stock = form.stock.value;
    const customizable = form.customizable.value;

    const updatedData = {
      name,
      subName,
      image,
      price,
      time,
      rating,
      description,
      stock,
      customizable,
    };
    // console.log(updatedData);

    fetch(`https://ergocraft.vercel.app/craft/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          success("Card updated succesfully!");
          setOpenModal(false);
          form.reset();
        }
      });
  };

  // Modal
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [openModal]);

  // Color and size array
  const color = [
    { label: "Black", value: "Black" },
    { label: "White", value: "White" },
    { label: "Brown", value: "Brown" },
  ];
  const size = [
    { label: "Small", value: "s" },
    { label: "Medium", value: "m" },
    { label: "Large", value: "l" },
    { label: "Extra Large", value: "xl" },
  ];
  // State for handeling radio button
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("m");
  return (
    <div>
      <div className="bg-card mx-auto w-full max-w-md rounded-lg bg-white shadow-lg shadow-black/30">
        {/* Product Title */}
        <div className="flex flex-col space-y-1.5 px-6 pt-6">
          <h3 className="text-2xl font-semibold ">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-black/60">
            {myEmail}
          </p>
        </div>
        {/* Category and price */}
        <div className="flex flex-col gap-4 p-6">
          <div className="flex items-end justify-between">
            <h2 className="text-center text-2xl font-medium">$199.99</h2>
            <p className="rounded-lg bg-gray-700 p-2 text-center text-sm text-white">
              Category: Clothing
            </p>
          </div>
          <div className="">
            <img
              width={350}
              height={350}
              className="h-[300px] w-full rounded-lg bg-gray-600 object-cover"
              src="https://source.unsplash.com/350x350/?wood-craft"
              alt="card navigate ui"
            />
          </div>
          {/* Color chossing option */}
          <div>
            <label className="text-base font-medium" htmlFor="color">
              Color
            </label>
            <div className="mt-2 flex items-center gap-3" id="color">
              {color?.map((item, i) => (
                <label
                  key={item.value}
                  className="flex items-center gap-1 text-sm font-medium"
                >
                  <input
                    type="radio"
                    value={item.value}
                    name="le"
                    defaultChecked={i === 0}
                    checked={selectedColor === item?.value}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="h-4 w-4 cursor-pointer rounded-full border-2"
                  />
                  {item?.label}
                </label>
              ))}
            </div>
          </div>
          {/* Size chossing option */}
          <div>
            <label
              className="text-base font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="size"
            >
              Size
            </label>
            <div className="mt-2 flex items-center gap-3" id="size">
              {size?.map((item) => (
                <label
                  key={item.value}
                  className="flex items-center gap-1 text-sm font-medium"
                >
                  <input
                    type="radio"
                    value={item.value}
                    name="el"
                    checked={selectedSize === item?.value}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="h-4 w-4 cursor-pointer rounded-full border-2"
                  />
                  {item?.label}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center p-6 gap-4">
          <button
            onClick={() => setOpenModal(true)}
            className="w-full rounded-lg bg-emerald-600 px-6 py-2 text-[12px] font-semibold text-white hover:bg-emerald-700 sm:text-sm md:text-base"
          >
            Update
          </button>
          <button
            onClick={() => setOpenDeleteModal(true)}
            className="w-full rounded-lg bg-red-600 px-6 py-2 text-[12px] font-semibold text-white hover:bg-red-700 sm:text-sm md:text-base"
          >
            Delete
          </button>
        </div>
      </div>
      {/* update Modal */}
      <div className="mx-auto flex items-center justify-center">
        <div
          className={`fixed flex justify-center items-center z-[100] ${
            openModal ? "visible opacity-1" : "invisible opacity-0"
          } duration-300 inset-0 w-full bg-white/20 backdrop-blur-sm drop-shadow-2xl`}
        >
          <div
            onClick={(e_) => e_.stopPropagation()}
            className={`absolute overflow-x-hidden overflow-y-hidden w-full h-full flex justify-center bg-black/30 drop-shadow-2xl rounded-lg ${
              openModal
                ? "translate-y-0 opacity-1 duration-300"
                : "translate-y-32 opacity-0 duration-100"
            }`}
          >
            <form
              onSubmit={handleUpdate}
              className="shadow-md h-fit shadow-black/30 border-2 w-2/5 rounded-xl p-10 mx-auto bg-white my-14"
            >
              <h3 className="text-xl font-semibold mb-4">Basic Info</h3>
              {/* 1st line */}
              <div className="flex justify-between gap-4">
                <div className="relative w-max rounded-lg flex-1">
                  <input
                    className="peer w-full rounded-full border bg-slate-100 border-slate-300/50 shadow-lg shadow-slate-500/20 px-4 py-2 text-black/80 focus:outline-none"
                    type="text"
                    placeholder="Item Name"
                    id="name"
                    required
                  />
                </div>
                {/* Sub category name */}
                <div className="relative w-max rounded-lg flex-1">
                  <input
                    className="peer w-full rounded-full border bg-slate-100 border-slate-300/50 shadow-lg shadow-slate-500/20 px-4 py-2 text-black/80 focus:outline-none"
                    type="text"
                    placeholder="Sub Category Name"
                    id="sub_name"
                    required
                  />
                </div>
              </div>
              {/* 2nd line - image */}
              <div className="relative rounded-lg w-full mt-8">
                <input
                  className="peer w-full rounded-full border bg-slate-100 border-slate-300/50 shadow-lg shadow-slate-500/20 px-4 py-2 text-black/80 focus:outline-none"
                  type="text"
                  placeholder="Image URL"
                  id="image"
                  required
                />
              </div>
              <h3 className="text-xl font-semibold my-4 mt-10">
                Product details
              </h3>
              {/* 3rd line */}
              {/* product price */}
              <div className="flex justify-between gap-4 mb-8 flex-wrap">
                <div className="relative w-max rounded-lg flex-1">
                  <input
                    className="peer w-full rounded-full border bg-yellow-500/10 border-yellow-300/50 shadow-lg shadow-slate-500/20 px-4 py-2 text-black/80 focus:outline-none"
                    type="text"
                    placeholder="Product price"
                    id="price"
                    required
                  />
                </div>
                {/* Processing time */}
                <div className="relative w-max rounded-lg flex-1">
                  <input
                    className="peer w-full rounded-full border bg-yellow-500/10 border-yellow-300/50 shadow-lg shadow-slate-500/20 px-4 py-2 text-black/80 focus:outline-none"
                    type="text"
                    placeholder="Processing time"
                    id="processing_time"
                    required
                  />
                </div>
                {/* rating */}
                <div className="relative w-max rounded-lg flex-1">
                  <input
                    className="peer w-full rounded-full border bg-yellow-500/10 border-yellow-300/50 shadow-lg shadow-slate-500/20 px-4 py-2 text-black/80 focus:outline-none"
                    type="text"
                    placeholder="Rating"
                    id="rating"
                    required
                  />
                </div>
              </div>
              {/* description, customization, status  */}
              <div className="flex justify-between gap-4 mb-8 flex-wrap">
                <div className="relative w-max rounded-lg flex-1">
                  <textarea
                    rows="5"
                    className="peer w-full rounded-xl resize-none border bg-yellow-500/10 border-yellow-300/50 shadow-lg shadow-slate-500/20 px-4 py-2 text-black/80 focus:outline-none"
                    type="text"
                    placeholder="Product description"
                    id="description"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <div className="relative w-full rounded-lg flex-1">
                    <input
                      className="peer w-full rounded-full border bg-slate-100 border-slate-300/50 shadow-lg shadow-slate-500/20 bg-transparent px-4 py-2 text-black/80 focus:outline-none"
                      type="text"
                      placeholder="Stock"
                      id="stock"
                      required
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="relative w-max rounded-lg flex-1">
                      <input
                        className="peer w-full rounded-full border bg-slate-100 border-slate-300/50 shadow-lg shadow-slate-500/20 bg-transparent px-4 py-2 text-black/80 focus:outline-none"
                        type="text"
                        placeholder="Is this customizable?"
                        id="customizable"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* submit button */}
              <div className="relative rounded-lg w-full mt-8">
                <input
                  className="btn w-full rounded-full border bg-yellow-500 border-yellow-500 bg-transparent px-4 py-2 text-black/80 focus:outline-none hover:bg-yellow-600 text-xl font-bold"
                  type="submit"
                  value="Update"
                />
              </div>
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
                className="absolute top-10 right-10 mx-auto flex bg-slate-950 text-white px-3 py-2 rounded-lg mb-6"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* delete modal */}
      <div
        onClick={() => setOpenDeleteModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openDeleteModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-80 rounded-lg bg-white p-6 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
            openDeleteModal
              ? "opacity-1 translate-y-0 duration-300"
              : "translate-y-20 opacity-0 duration-150"
          }`}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <svg
              className="w-16 stroke-rose-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path
                  opacity="0.4"
                  d="M12 7.75V13"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M21.0802 8.58003V15.42C21.0802 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C3.51016 17.59 2.91016 16.55 2.91016 15.42V8.58003C2.91016 7.46003 3.51016 6.41999 4.48016 5.84999L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.84999C20.4802 6.41999 21.0802 7.45003 21.0802 8.58003Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  opacity="0.4"
                  d="M12 16.2002V16.3002"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            <h6 className="text-center text-sm font-medium opacity-70">
              Are you sure that you want to delete this item?
            </h6>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setOpenDeleteModal(false);
                  handleDelete(_id);
                }}
                className="rounded-md bg-indigo-600 px-6 py-2 text-sm text-white"
              >
                Delete
              </button>
              <button
                onClick={() => setOpenDeleteModal(false)}
                className="rounded-md border border-rose-600 px-6 py-2 text-sm text-rose-600 hover:bg-rose-600 hover:text-white"
              >
                Not Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyItemCard;
