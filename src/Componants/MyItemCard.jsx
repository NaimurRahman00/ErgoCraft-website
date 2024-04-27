import { useEffect, useState } from "react";

const MyItemCard = () => {
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

  // modal form
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Stock status");
  // array of options
  const options = ["In stock", "Made to Order"];

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
          <h3 className="text-2xl font-semibold ">Classic Leather Jacket</h3>
          <p className="text-sm text-gray-500 dark:text-black/60">
            Made with genuine leather, our Classic Leather Jacket is the perfect
            addition to every wardrobe.
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
          <button className="w-full rounded-lg bg-red-600 px-6 py-2 text-[12px] font-semibold text-white hover:bg-red-700 sm:text-sm md:text-base">
            Delete
          </button>
        </div>
      </div>
      {/* Modal */}
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
            <form className="shadow-md h-fit shadow-black/30 border-2 w-2/5 rounded-xl p-10 mx-auto bg-white my-14">
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
                    id="price"
                    required
                  />
                 </div>
                <div className="flex flex-col gap-3 flex-1 flex-wrap">
                  <div className="h-[3rem]">
                    {/* dropdown - btn */}
                    <div
                      onClick={() => setIsOpen(!isOpen)}
                      className="mx-auto flex w-full items-center justify-between rounded-xl px-6 py-2 border bg-yellow-500/10 border-yellow-300/50 shadow-lg shadow-yellow-500/20"
                    >
                      <h1 className="font-medium text-gray-600">
                        {selectedValue}
                      </h1>
                      <svg
                        className={`${
                          isOpen ? "-rotate-180" : "rotate-0"
                        } duration-300`}
                        width={25}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M7 10L12 15L17 10"
                            stroke="#4B5563"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                    {/* dropdown - options  */}
                    <div
                      className={`${
                        isOpen
                          ? "visible top-0 opacity-100 z-20 bg-slate-100 shadow-lg"
                          : "invisible -top-4 opacity-0"
                      } relative mx-auto my-4 rounded-xl py-4 border duration-300 w-full`}
                    >
                      {options?.map((option, idx) => (
                        <div
                          key={idx}
                          onClick={(e) => {
                            setSelectedValue(e.target.textContent);
                            setIsOpen(false);
                          }}
                          className="px-6 py-2 text-black hover:bg-gray-100"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 px-2 my-1 items-center flex-wrap">
                    <h3 className="text-lg font-semibold">
                      Is this customizable?
                    </h3>
                    <div className="flex gap-2 items-end">
                      <div className="form-control flex items-center">
                        <label className="label cursor-pointer justify-start items-center p-0 gap-4 mt-0 pt-0">
                          <input
                            type="radio"
                            name="radio-10"
                            className="radio checked:bg-blue-500"
                            checked
                          />
                          <span className="label-text">Yes</span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer justify-start p-0 gap-4 pt-0">
                          <input
                            type="radio"
                            name="radio-10"
                            className="radio checked:bg-red-500"
                            checked
                          />
                          <span className="label-text">No</span>
                        </label>
                      </div>
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
                  required
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
    </div>
  );
};

export default MyItemCard;
