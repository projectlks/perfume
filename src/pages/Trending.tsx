// Trending.tsx
import { useEffect, useState } from "react";
import Card from "../components/Card";
import img from "../assets/imgs/perfume.png";
import img2 from "../assets/imgs/dior.png";
import img3 from "../assets/imgs/coco.png";
import img4 from "../assets/imgs/redRose.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

interface Position {
  offsetLeft: number;
  offsetWidth: number;
}

interface CardItem {
  title: string;
  category: string;
  price: string;
  originalPrice: string;
  image: string;
}

const cardData: CardItem[] = [
  {
    title: "Attlas Men Perfume",
    category: "Floral",
    price: "35.00",
    originalPrice: "45.00",
    image: img,
  },
  {
    title: "Amber Wood",
    category: "Woody",
    price: "55.00",
    originalPrice: "70.00",
    image: img2,
  },
  {
    title: "Citrus Breeze",
    category: "Citrus",
    price: "40.00",
    originalPrice: "50.00",
    image: img3,
  },
  {
    title: "Mystic Oriental",
    category: "Oriental",
    price: "60.00",
    originalPrice: "75.00",
    image: img4,
  },
];

export default function Trending() {
  const [position, setPosition] = useState<Position>({
    offsetLeft: 0,
    offsetWidth: 0,
  });

  const liClass =
    "text-base md:text-lg font-semibold cursor-pointer px-3  md:px-4 py-2 text-third font-bold hover:text-secondary transition-colors";

  const handleItemClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;
    setPosition({
      offsetLeft: target.offsetLeft,
      offsetWidth: target.offsetWidth,
    });
  };


  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="w-full overflow-hidden bg-primary overflow-x-hidden py-10 md:py-16 xl:py-20 flex flex-col items-center">
      <p className="text-lg md:text-xl xl:text-2xl text-secondary font-bold mb-2 md:mb-4">
        Trending perfume this week
      </p>

      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-third font-bold mb-6 md:mb-10 xl:mb-12">
        Our Handpicked Fragrances
      </h1>

      <menu className="mb-20 w-full relative ">
        <ul className="flex  w-full  md:w-fit  md:space-x-10 justify-evenly mx-auto items-center">
          <li className={liClass} onClick={handleItemClick}>
            Floral
          </li>
          <li className={liClass} onClick={handleItemClick}>
            Woody
          </li>
          <li className={liClass} onClick={handleItemClick}>
            Citrus
          </li>
          <li className={liClass} onClick={handleItemClick}>
            Oriental
          </li>
          <li
            className={`${liClass}  hidden md:flex  `}
            onClick={handleItemClick}
          >
            Fresh
          </li>
        </ul>
        <span
          className="w-[0px] bg-secondary h-1 absolute top-full transition-all duration-300"
          style={{
            left: `${position.offsetLeft}px`,
            width: `${position.offsetWidth}px`,
          }}
        />
      </menu>

      <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 xl:gap-10">
        {cardData.map((card, index) => (
          <Card
          data-aos ='slide-down'
            key={index}
            title={card.title}
            category={card.category}
            price={card.price}
            originalPrice={card.originalPrice}
            image={card.image}
          />
        ))}
      </div>
    </section>
  );
}
