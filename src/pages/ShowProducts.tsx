import left from "../assets/imgs/l.jpg";
import right from "../assets/imgs/right.jpg";

interface Product {
  id: number;
  imageSrc: string;
  subtitle: string;
  title: string;
  description: string;
  discountText: string;
}

const products: Product[] = [
  {
    id: 1,
    imageSrc: left,
    subtitle: "Eau De Toilette",
    title: "We Like To Consider An Eau De Toilette The Summer Cousin",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni et similique rerum eos architecto labore quibusdam ullam, illum atque? Suscipit ipsam numquam rem cupiditate similique voluptas iste? Accusamus, eos iste.",
    discountText: "Shop Now - 33% OFF",
  },
  {
    id: 2,
    imageSrc: right,
    subtitle: "Eau De Toilette",
    title: "Perfume With A Slightly Higher Concentration Of Essential Oils",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni et similique rerum eos architecto labore quibusdam ullam, illum atque? Suscipit ipsam numquam rem cupiditate similique voluptas iste? Accusamus, eos iste.",
    discountText: "Shop Now - 33% OFF",
  },
];

export default function ShowProducts() {
  return (
    <section className="w-full py-[100px ]  px-4 xl:px-[100px]">
      {/* Map through the products array to render Article components */}
      {products.map((product) => (
        <article
          key={product.id}
          className={`w-full flex flex-col ${
            product.id % 2 === 0 ? "xl:flex-row-reverse " : " xl:flex-row"
          }  items-center mb-[150px] `}
        >
          <figure className="w-full xl:w-1/2 mb-10 flex justify-center items-center">
            <img
              src={product.imageSrc}
              alt="Product image"
              className="xl:w-[80%] w-[90%] max-w-[700px]"
            />
          </figure>

          <div className="w-[90%] mx-auto xl:w-1/2">
            <header>
              <p className="text-base md:text-3xl font-Dancing text-secondary">
                {product.subtitle}
              </p>
              <h1 className="text-4xl xl:text-7xl w-full font-lato text-balance mb-5">
                {product.title}
              </h1>
            </header>
            <p className="mb-5 text-xl">{product.description}</p>
            <span className="px-4 py-2 md:px-8 md:py-4 inline-block border text-secondary border-secondary cursor-pointer">
              {product.discountText}
            </span>
          </div>
        </article>
      ))}
    </section>
  );
}
