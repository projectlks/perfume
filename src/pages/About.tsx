import one from "../assets/svg/one.svg";
import two from "../assets/svg/two.svg";
import three from "../assets/svg/one.svg";
import four from "../assets/svg/two.svg";

interface Props {
  text: string;
  img: string;
}

export function Card({ text, img }: Props) {
  return (
    <span className="w-full py-4 border-r-2 mb-5 flex  space-x-1 md:space-x-3 items-center md:pr-5">
      <span className="block h-[50px] md:h-[100px]   aspect-square">
        <img src={img} alt="service icon" className="" />
      </span>
      <h3 className="md:text-[26px] text-base leading-tight font-semibold">
        {text}
      </h3>
    </span>
  );
}

export default function About() {
  return (
    <section className="w-full min-h-screen py-[400px]">
      <div className="w-[90%] mb-10 md:mb-16 xl:mb-32 mx-auto bg-primary aspect-[5/2] flex items-center justify-center">
        <div className="w-full md:w-[90%] lg:w-1/2 mx-auto p-6 md:p-8 text-center space-y-6">
          <h1 className="text-2xl md:text-4xl lg:text-4xl text-secondary font-bold">
            About Our Store
          </h1>
          <h1 className="text-2xl md:text-5xl lg:text-6xl text-third font-bold">
            Welcome To Olivia & Co.
          </h1>
          <p className="text-base md:text-lg text-pretty leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            aliquam! Quae, error dolor voluptate, fuga vero quidem numquam
            dolorum nisi quasi ea magni eos aperiam ipsam, molestiae provident
            excepturi voluptatibus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Delectus, aliquam! Quae, error dolor voluptate,
            fuga vero quidem numquam dolorum nisi quasi ea magni eos aperiam
            ipsam, molestiae provident excepturi voluptatibus. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Delectus, aliquam!
            voluptatibus.
          </p>
        </div>
      </div>

      <div className="w-[90%] overflow-x-hidden mx-auto grid xl:gap-x-20 gap-1  grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
        <Card text="Money Back Guarantee" img={one} />
        <Card text="Delivery in 1-2 Hours" img={two} />
        <Card text="Gift-wrapped Packaging" img={three} />
        <Card text="Free Shipping Worldwide" img={four} />
      </div>
    </section>
  );
}
