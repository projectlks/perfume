import dior from "../assets/imgs/nightie.png";

export default function LimitedOffer() {
  return (
    <section className="w-full relative h-screen  bg-cover overflow-b-hidden bg-center">
      <div className="bg-primary w-full h-[20%]"></div>

      <div
        className="w-[90%] absolute top-0 left-0 right-0 mx-auto bg-contain overflow-hidden  flex items-center justify-between md:px-[30px] 
      xl:px-[100px] bg-gradient-to-br from-gray-300  to-bg aspect-[5/2]"
      >
        <span className="text-start">
          <p className=" sm:text-base md:text-lg  text-secondary">
            End of Year Sales
          </p>
          <h1 className="ttext-lg md:text-xl xl:text-3xl  font-bold text-third">
            All Items 40% Off
          </h1>
        </span>

        <span className="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2  w-1/3 aspect-square h-auto flex justify-center items-center">
          <img src={dior} alt="dior" className="w-auto  h-full  reflect-bottom" />
        </span>

        <span className=" text-end">
          <p className=" sm:text-base md:text-lg  text-secondary">Buy Now</p>
          <h1 className="text-lg md:text-xl xl:text-3xl  font-bold text-third">
            Limited Offer Ends Tonight
          </h1>
        </span>
      </div>
    </section>
  );
}
