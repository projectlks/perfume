import Menu from "./components/Menu.tsx";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import LimitedOffer from "./pages/LimitedOffer.tsx";
import ShowProducts from "./pages/ShowProducts.tsx";
import Trending from "./pages/Trending.tsx";
import tree from './assets/svg/o.svg';

export default function App() {
  return (
    <>
      <Menu />
      <Home />
      <About />
      <ShowProducts />
      <Trending />
      <LimitedOffer />

      <div className="w-full h-screen border-t-2 relative border-third">
        <span className="absolute bottom-full left-0 right-0 mx-auto w-fit px-4 py-2 text-4xl font-bold translate-y-1/2 transform bg-[#f0f8ff] leading-none">
          <img
            src={tree}
            alt="tree.svg"
            className="w-8 h-auto md:w-10  lg:w-12  xl:w-20  aspect-square text-blue-500 filter drop-shadow-md"
          />
        </span>
      </div>
    </>
  );
}


// cooler

// https://coolors.co/palette/022b3a-1f7a8c-bfdbf7-e1e5f2-ffffff