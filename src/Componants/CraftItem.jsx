import { MdArrowForwardIos } from "react-icons/md";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + "</span>";
  },
};

const CraftItem = ({crafts}) => {

  const isSmallScreen = window.innerWidth <= 600;
  const isMedScreen = window.innerWidth <= 900;
  const cardData = crafts;

  // Rating
  const [userRating, setUserRating] = useState(4);
  return (
    <div className="w-11/12 mx-auto max-w-[1440px] my-20 py-10">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <h1 className="font-unbounded text-6xl font-medium leading-[4.5rem]">
            Our <br /> Craft <br /> Items
          </h1>
          \
          <p className="font-semibold w-[90%] text-lg">
            Our products blend the rustic charm of natural fibers with the
            timeless elegance of wood. Jute, derived from the Corchorus plant,
            is spun into durable threads.
          </p>
          <button className="rounded-full bg-transparent border-[3px] border-yellow-500 px-6 py-2 text-yellow-500 font-bold text-xl transition-all duration-300 hover:scale-90 flex items-center gap-2 mt-16">
            View All <MdArrowForwardIos className="text-2xl font-semibold" />
          </button>
        </div>
        <div className="col-span-9">
          <Swiper
            modules={[Pagination]}
            slidesPerView={isSmallScreen ? 1 : isMedScreen ? 2 : 3}
            spaceBetween={10}
            mousewheel={isSmallScreen ? false : true}
            pagination={{ pagination, clickable: true, dynamicBullets: true }}
            className="mySwiper cursor-pointer bg-transparent"
          >
            {cardData.map((slide, inx) => (
              <SwiperSlide
                key={inx}
                className="flex gap-5 justify-center px-2 bg-transparent"
              >
                <div className="mx-auto max-w-[350px] space-y-4 rounded-lg p-6 md:w-[350px]">
                  <div className="relative w-[280px]">
                    <img
                      width={200}
                      height={200}
                      className="size-[280px] rounded-2xl object-cover"
                      src={slide.image}
                      alt="card navigate ui"
                    />
                    <h3 className="absolute top-2 text-sm right-2 bg-black text-white px-3 py-1 rounded-full">
                      New
                    </h3>
                    <div className="absolute bottom-0 z-20 right-0 w-full opacity-0 transition hover:opacity-100 h-full">
                      <button className="btn absolute bottom-2 right-3 w-[90%] rounded-full py-2 bg-[#1d202f] text-white flex justify-center items-center text-xl gap-2 hover:bg-[#1d202f] border-transparent hover:border-transparent font-normal">
                        <IoCartOutline /> Add to card
                      </button>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <h1 className="text-lg font-semibold ">{slide.name}</h1>
                    <p className="text-sm text-black/50 font-medium">
                      {slide.description.slice(0, 100)}...
                    </p>
                    <div className="text-lg font-semibold">
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            onClick={() => setUserRating(star)}
                            className="w-6 mt-5 cursor-pointer"
                            viewBox="0 0 24 24"
                            fill="#94a3b8"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                fill={
                                  star <= userRating ? "#f2b00a" : "#94a3b8"
                                }
                              />{" "}
                            </g>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-between items-center">
                    <div className="text-xl font-bold">$ {slide.price}</div>
                    <Link to={`/viewDetails/${slide._id}`} >
                      <button className="btm rounded-full border-2 border-yellow-500 text-yellow-500 font-bold px-4 hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200 mr-5">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CraftItem;
