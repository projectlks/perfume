// Card.tsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

interface CardProps {
  title: string;
  category: string;
  price: string;
  originalPrice: string;
  image: string;
}

export default function Card({
  title,
  category,
  price,
  originalPrice,
  image,
}: CardProps) {



  useEffect(() => {
    AOS.init();
  }, []);
 

  return (
    <div className="w-full mb-10 hover:scale-110 transition-all cursor-pointer ">
      <span data-aos = 'slide-up' className="w-full flex mb-6 justify-center items-center h-auto aspect-square overflow-hidden bg-[#f0f8ff] ">
        <img
          src={image}
          alt="Fragrance"
          className="h-[80%] w-auto rounded-2xl   mb-3 reflect-bottom"
        /> 
      </span>

      <div className="w-full px-7">
        <p className="text-secondary mb-2 font-semibold text-sm sm:text-base md:text-lg xl:text-xl tracking-wider">
          --- {category}
        </p>
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-3">
          {title}
        </h1>

        <p className="flex items-center space-x-2">
          <span className="text-base sm:text-lg md:text-xl font-bold text-green-600">
            ${price}
          </span>
          <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-400 line-through">
            ${originalPrice}
          </span>
        </p>
      </div>
    </div>
  );
}
