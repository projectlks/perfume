import { useEffect } from "react";
import dior from "../assets/imgs/nightie.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

export default function LimitedOffer() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="relative w-full h-screen bg-cover bg-center overflow-hidden">
      {/* Background banner */}
      <div className="bg-primary w-full h-[20%]"></div>

      <div className="absolute inset-0 mx-auto w-full flex flex-col items-center px-4">
        <div
          data-aos="zoom-out"
          className="relative w-full md:w-[90%] mx-auto bg-contain bg-gradient-to-br from-gray-300 to-bg 
          flex flex-col xl:flex-row xl:items-center justify-between  py-6 md:py-10 px-4 md:px-6 lg:px-10 xl:px-20 rounded-lg overflow-hidden aspect-square xl:aspect-[5/2]"
        >
          {/* Left text */}
          <div data-aos="slide-down" className="text-start space-y-2 z-10">
            <p className="text-base md:text-lg text-secondary">
              End of Year Sales
            </p>
            <h1 className="text-xl md:text-2xl xl:text-3xl font-bold text-third">
              All Items 40% Off
            </h1>
          </div>

          {/* Image - background on small screens */}
          <div className="absolute left-0 right-0 mx-auto top-1/2 -translate-y-1/2  w-1/2 md:w-2/3 xl:w-1/3 md:aspect-square h-auto flex justify-center items-center">
            <img
              data-aos="customSlideUp"
              src={dior}
              alt="dior"
              className="w-auto  h-full reflect-bottom"
            />
          </div>

          {/* Right text */}
          <div data-aos="slide-down" className="text-end space-y-2 z-10">
            <p className="text-base md:text-lg text-secondary">Buy Now</p>
            <h1 className="text-xl md:text-2xl xl:text-3xl font-bold text-third">
              Limited Offer Ends Tonight
            </h1>
          </div>
        </div>

        {/* Logo section */}
        <div
          className="flex flex-wrap justify-evenly items-center gap-6 md:gap-8 my-[150px]   w-full"
          data-aos="slide-left"
        >
          <h3 className="font-bold uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Dior
          </h3>
          <h3 className="font-semibold italic text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Chanel
          </h3>
          <h3 className="font-medium uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700">
            Yves Saint Laurent
          </h3>
          <h3 className="font-semibold uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl text-black">
            Lancôme
          </h3>
          <h3 className="font-light italic text-lg sm:text-xl md:text-2xl lg:text-3xl text-pink-700">
            Carolina Herrera
          </h3>
          <h3 className="font-bold uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800">
            Viktor & Rolf
          </h3>
          <h3 className="font-medium uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-700">
            Dolce & Gabbana
          </h3>
        </div>
      </div>
    </section>
  );
}
