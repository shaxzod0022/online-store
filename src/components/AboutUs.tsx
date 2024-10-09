import { FC } from "react";
import { Signature, Tirnoq } from "../assets";
import { styles } from "../util/style";
import Button from "./reusable/Button";

const AboutUs: FC = (): JSX.Element => {
  return (
    <div className="flex justify-between sm:flex-row flex-col ss:px-[30px] sm:px-[60px] md:px-[100px] px-[20px] flex-wrap w-full">
      <div className="md:w-[50%] w-full m-0">
        <h2 className={`${styles.heading2} mb-5`}>Who We Are</h2>
        <p
          className={`${styles.paragraph} max-w-[490px] text-silverRoman mb-7 xs:w-[100%] w-full md:w-[80%]`}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ab
          dolores praesentium laudantium quidem saepe earum illo odio. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Repellat, atque?
        </p>
        <p
          className={`${styles.paragraph} md:w-[80%] text-silverRoman  mb-6 max-w-[490px] w-full`}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ab
          dolores praesentium laudantium quidem saepe earum illo odio. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Button title="Read More" calssName={`${styles.buttonCeladon} mb-4`} />
      </div>
      <div className="md:w-[50%] w-full m-0">
        <img className="m-0 mb-2" src={Tirnoq} alt="" />
        <div className="w-[80px] h-[4px] bg-black m-0 mb-5"></div>
        <p className="font-montserrat text-[20px] font-semibold mb-8 max-w-[490px] w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          praesentium corporis minima recusandae velit nostrum dolorum sunt
          sapiente ex quasi?
        </p>
        <img className="m-0" src={Signature} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
