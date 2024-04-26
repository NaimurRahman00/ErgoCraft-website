import { useState } from "react";

const AddItem = () => {
  const bgImg = {
    backgroundImage: 'url("/public/register-bg.jpg")',
    backgroundSize: "cover", 
    backgroundRepeat: "no-repeat",
  };

  //   dropdown
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Stock status");
  // array of options
  const options = ["In stock", "Made to Order"];
  return (
    <div style={bgImg}>
      <div className="w-11/12 mx-auto max-w-[1440px] pt-6 pb-28">
        <h2 className="text-center text-5xl font-unbounded font-semibold py-2">
          Add a new item
        </h2>
        {/* Form */}
        <form className="shadow-md shadow-black/30 border-2 w-8/12 rounded-xl p-20 mx-auto bg-white my-14">
          <h3 className="text-xl font-semibold mb-4">Basic Info</h3>
          {/* 1st line */}
          <div className="flex justify-between gap-12">
            <div className="relative w-max rounded-lg flex-1">
              <input
                className="peer w-full rounded-full border bg-slate-100 border-slate-300/50 shadow-lg shadow-slate-500/20 bg-transparent px-4 py-2 text-black/80 focus:outline-none"
                type="text"
                placeholder=""
                id="name"
                required
              />
              <label
                className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-black duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-black font-semibold dark:peer-focus:bg-yellow-500"
                htmlFor="name"
              >
                Item Name
              </label>
            </div>
            {/* Sub category name */}
            <div className="relative w-max rounded-lg flex-1">
              <input
                className="peer w-full rounded-full border bg-slate-100 border-slate-300/50 shadow-lg shadow-slate-500/20 px-4 py-2 text-black/80 focus:outline-none"
                type="text"
                placeholder=""
                id="sub_name"
                required
              />
              <label
                className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-black duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-black font-semibold dark:peer-focus:bg-yellow-500"
                htmlFor="sub_name"
              >
                Sub Category Name
              </label>
            </div>
          </div>
          {/* 2nd line - image */}
          <div className="relative rounded-lg w-full mt-8">
            <input
              className="peer w-full rounded-full border bg-slate-100 border-slate-300/50 shadow-lg shadow-slate-500/20 bg-transparent px-4 py-2 text-black/80 focus:outline-none"
              type="text"
              placeholder=""
              id="image"
              required
            />
            <label
              className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-black duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-white font-semibold dark:peer-focus:bg-slate-600"
              htmlFor="image"
            >
              Image URL
            </label>
          </div>
          <h3 className="text-xl font-semibold my-4 mt-10">Product details</h3>
          {/* 3rd line */}
          {/* Name input */}
          <div className="flex justify-between gap-12 mb-8 flex-wrap">
            <div className="relative w-max rounded-lg flex-1">
              <input
                className="peer w-full rounded-full border border-yellow-500/50 shadow-lg shadow-yellow-500/20 bg-transparent px-4 py-2 text-black/80 focus:outline-none"
                type="text"
                placeholder=""
                id="price"
                required
              />
              <label
                className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-black duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-black font-semibold dark:peer-focus:bg-yellow-500"
                htmlFor="price"
              >
                Product price
              </label>
            </div>
            {/* Sub category name */}
            <div className="relative w-max rounded-lg flex-1">
              <input
                className="peer w-full rounded-full border border-yellow-500/50 shadow-lg shadow-yellow-500/20 bg-transparent px-4 py-2 text-black/80 focus:outline-none"
                type="text"
                placeholder=""
                id="processing_time"
                required
              />
              <label
                className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-black duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-black font-semibold dark:peer-focus:bg-yellow-500"
                htmlFor="processing_time"
              >
                Processing time
              </label>
            </div>
            {/* Sub category name */}
            <div className="relative w-max rounded-lg flex-1">
              <input
                className="peer w-full rounded-full border border-yellow-500/50 shadow-lg shadow-yellow-500/20 bg-transparent px-4 py-2 text-black/80 focus:outline-none"
                type="text"
                placeholder=""
                id="rating"
                required
              />
              <label
                className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-black duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-black font-semibold dark:peer-focus:bg-yellow-500"
                htmlFor="rating"
              >
                Rating
              </label>
            </div>
          </div>
          {/* description, customization, status  */}
          <div className="flex justify-between gap-12 mb-8 flex-wrap">
            <div className="relative w-max rounded-lg flex-1">
              <textarea
                rows="4"
                className="peer w-full resize-none rounded-xl border border-yellow-500/50 shadow-lg shadow-yellow-500/20 bg-transparent px-4 py-2 text-black/80 focus:outline-none"
                type="text"
                placeholder=""
                id="price"
                required
              />
              <label
                className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-black duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-white font-semibold dark:peer-focus:bg-slate-600"
                htmlFor="price"
              >
                Product description
              </label>
            </div>
            <div className="flex flex-col gap-3 flex-1 flex-wrap">
              <div className="h-[3rem]">
                {/* dropdown - btn */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="mx-auto flex w-full items-center justify-between rounded-xl px-6 py-2 border border-yellow-500/50 shadow-lg shadow-yellow-500/20"
                >
                  <h1 className="font-medium text-gray-600">{selectedValue}</h1>
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
                      ? "visible top-0 opacity-100 z-20 bg-slate-200 shadow-lg"
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
              <div className="flex justify-between gap-4 my-4 items-center flex-wrap">
                <h3 className="text-xl font-semibold">Is this customizable?</h3>
                <div className="flex gap-4 items-end">
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
          <h3 className="text-xl font-semibold mb-4 mt-10">User Info</h3>
          {/* 4th line */}
          <div className="flex justify-between gap-12">
            <div className="relative w-max rounded-lg flex-1">
              <input
                className="peer w-full rounded-full border bg-slate-100 border-slate-300/50 shadow-lg shadow-slate-500/20 bg-transparent px-4 py-2 text-black/80 focus:outline-none"
                type="text"
                placeholder=""
                id="user_name"
                required
              />
              <label
                className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-black duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-black font-semibold dark:peer-focus:bg-yellow-500"
                htmlFor="user_name"
              >
                User Name
              </label>
            </div>
            {/* Sub category name */}
            <div className="relative w-max rounded-lg flex-1">
              <input
                className="peer w-full rounded-full border bg-slate-100 border-slate-300/50 shadow-lg shadow-slate-500/20 bg-transparent px-4 py-2 text-black/80 focus:outline-none"
                type="text"
                placeholder=""
                id="email"
                required
              />
              <label
                className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-black duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-black font-semibold dark:peer-focus:bg-yellow-500"
                htmlFor="email"
              >
                Email
              </label>
            </div>
          </div>
          {/* submit button */}
          <div className="relative rounded-lg w-full mt-8">
            <input
              className="btn w-full rounded-full border bg-yellow-500 border-yellow-500 bg-transparent px-4 py-2 text-black/80 focus:outline-none hover:bg-yellow-600 text-xl font-bold"
              type="submit"
              value="Add Item"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
