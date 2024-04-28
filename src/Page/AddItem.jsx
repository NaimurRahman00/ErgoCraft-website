import { useContext } from "react";
import { ContextData } from "../Providers/AuthProvider";

const AddItem = () => {
  const { success } = useContext(ContextData);


  const bgImg = {
    backgroundImage: 'url("/public/register-bg.jpg")',
    backgroundSize: "cover", 
    backgroundRepeat: "no-repeat",
  };


  // update data
  const handleAddNewItem = (e) => {
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
    const userName = form.user_name.value;
    const email = form.email.value;

    const newData = {name, subName, image, price, time, rating, description, stock, customizable, userName, email}

    console.log(newData)

    // send data to the server 
    fetch("http://localhost:5000/craft", {
      method: "POST",
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify(newData)
    })
    .then(res => {
      res.json()
      success('Craft item added successfully!')
    })
    .then(data => {
      console.log(data)
    })
  }
  return (
    <div style={bgImg}>
      <div className="w-11/12 mx-auto max-w-[1440px] pt-6 pb-28">
        <h2 className="text-center text-5xl font-unbounded font-semibold py-2">
          Add a new item
        </h2>
        {/* Form */}
        <form onSubmit={handleAddNewItem} className="shadow-md shadow-black/30 border-2 w-8/12 rounded-xl p-20 mx-auto bg-white my-14">
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
                id="description"
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
            <div className="relative w-full rounded-lg flex-1">
              <input
                className="peer w-full rounded-full border bg-slate-100 border-slate-300/50 shadow-lg shadow-slate-500/20 bg-transparent px-4 py-2 text-black/80 focus:outline-none"
                type="text"
                placeholder=""
                id="stock"
                required
              />
              <label
                className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-black duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-black font-semibold dark:peer-focus:bg-yellow-500"
                htmlFor="name"
              >
                Stock status
              </label>
            </div>
              <div className="flex justify-between gap-4 my-4 items-center flex-wrap">
                <div className="relative w-max rounded-lg flex-1">
              <input
                className="peer w-full rounded-full border bg-slate-100 border-slate-300/50 shadow-lg shadow-slate-500/20 bg-transparent px-4 py-2 text-black/80 focus:outline-none"
                type="text"
                placeholder=""
                id="customizable"
                required
              />
              <label
                className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-black duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-black font-semibold dark:peer-focus:bg-yellow-500"
                htmlFor="customizable"
              >
                Is this Customizable?
              </label>
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
