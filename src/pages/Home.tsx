import img from "../assets/imgs/perfume.png";

export default function Home() {
  return (
    <section className="w-full overflow-x-hidden  xl:px-20 border-red-700 bg-primary items-center flex flex-col xl:flex-row justify-evenly xl:pt-0 pt-10 min-h-screen relative">
      <div className="w-full xl:w-[60%] px-4 md:px-10">
        <p className="text-xl xl:text-3xl text-secondary ">
          Women Fragrance & Perfume
        </p>

        <span className="xl:text-[8rem] text-[3rem] md:text-[4rem]  flex flex-col animate-zoom-in space-y-1 mb-5 leading-none font-semibold">
          <h1>Much More</h1>
          <h1>Than Perfume</h1>
        </span>

        <p className="w-full block xl:text-xl text-balance mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          possimus soluta culpa vero, exercitationem voluptates? Sapiente nisi
          exercitationem voluptates? Sapiente nisi
        </p>

        <div className="flex text-base xl:text-xl text-secondary space-x-7 md:space-x-10  items-center mb-5">
          <span className="px-4 py-2 md:px-8 md:py-4 border border-secondary cursor-pointer">
            Shop Now - 40% OFF
          </span>
          <h1 className="cursor-pointer">Read More</h1>
        </div>
      </div>

      <div className="w-full md:w-[70%] xl:w-[40%] overflow-visible h-auto md:aspect-square bg-gradient-to-b flex justify-center xl:justify-center relative">
        <img
          src={img}
          alt="perfume"
          className="w-full h-full rotate-[20deg] transform animate-perfume custom  aspect-square"
        />
      </div>
    </section>
  );
}
