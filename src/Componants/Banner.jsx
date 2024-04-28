import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const sliders = [
    "https://i.ibb.co/svwWHhs/jute-bag.jpg",
    "https://i.ibb.co/3mFhyQD/wood-plate.jpg",
    "https://i.ibb.co/phVf6Vx/2151003070.jpg",
  ];
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  return (
    <div>
      <div className="w-full mx-auto h-[240px] md:h-[540px] flex flex-col lg:flex-row items-center overflow-hidden gap-5 lg:gap-10 mt-10 relative ">
        <div className="absolute z-50 bg-gradient-to-tr flex flex-col items-start from-black/95 via-black/40 top-0 left-0 right-0 bottom-0 p-20 py-24 rounded-b-2xl">
          <h2 className="text-white text-lg mb-2">Jute & Wood craft</h2>
          <h1 className="font-unbounded text-[4.7rem] leading-[5.5rem] text-white font-bold">
            Raining offers <br />for hot {" "}
            <Typewriter
              words={["summer", "Season"]}
              loop={500}
              typeSpeed={100}
              deleteSpeed={100}
            />
          </h1>
          <p className="text-white text-2xl mt-4">25% off on all products</p>
          <button className="btn rounded-full px-10 font-bold text-base mt-5 border-yellow-500 hover:bg-transparent hover:text-white hover:border-yellow-500 border-2 bg-yellow-500 ">
            Shop Now
          </button>
        </div>
        <div className="relative overflow-hidden rounded-b-2xl w-full">
          {/* dots */}
          <div className="flex rounded-full z-50 absolute right-0 bottom-1/2 w-fit gap-1 rotate-90">
            {sliders.map((_, inx) => (
              <button
                key={inx}
                onClick={() => setCurrentSlider(inx)}
                className={`rounded-full duration-300 bg-white ${
                  currentSlider === inx ? "w-10" : "w-2"
                } h-2`}
              ></button>
            ))}
          </div>
          {/* slider container */}
          <div
            className="ease-linear duration-300 flex flex-col h-60 sm:h-96 md:h-[540px] transform-gpu relative"
            style={{ transform: `translateY(-${currentSlider * 100}%)` }}
          >
            {/* sliders */}
            {sliders.map((_, inx) => (
              <div
                key={inx}
                className="min-w-full duration-200 before:content-['Image'] before:bg-black/20 before:-z-10 before:absolute before:text-3xl before:flex before:justify-center before:items-center before:text-black/40 before:inset-0 relative"
              >
                <img
                  src={_}
                  className="w-full h-60 sm:h-96 md:h-[540px] object-cover"
                  alt={`Slider - ${inx + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
