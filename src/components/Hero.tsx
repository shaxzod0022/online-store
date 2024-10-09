import { FC } from "react";
import { heroImg1, LeftButton, RightButton } from "../assets";
import { styles } from "../util/style";
import Button from "./reusable/Button";

const Hero:FC = ():JSX.Element => {
  return (
    <div className="hero-gradient relative flex flex-wrap items-center px-[20px] sm:px-[80px] md:px-[100px] pt-20">
      <div className="w-full lg:w-[50%]  m-0 lg:py-16 py-15 md:px-[100px]">
        <h1 className={`${styles.heading1} text-white font-montserrat`}>
          Heading
        </h1>
        <p className={`${styles.paragraph} max-w-[550px]  text-white mb-4`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugiat
          quo assumenda vero nulla officia amet, quas mollitia accusamus, magni
          natus possimus libero reprehenderit exercitationem! Explicabo
          accusantium enim dicta quam?
        </p>
        <Button
          title="Our Product"
          calssName="bg-white sm:px-6 px-4 sm:py-3 py-2 text-greenCeladon hover:bg-slate-200"
        />
      </div>
      <div className="w-full md:w-[50%]">
        <img  className="clip w-full" src={heroImg1} alt="" />
      </div>
      <button className="absolute sm:top-[50%] top-[85%] position-left-right left-[100px]">
        <img className="sm:w-full w-[25px]" src={LeftButton} alt="" />
      </button>
      <button className="absolute sm:top-[50%] top-[85%] position-left-right right-[100px]">
        <img className="sm:w-full w-[25px]" src={RightButton} alt="" />
      </button>
      <ul className="list-none absolute sm:bottom-8 bottom-2 position-left-right left-[50%] flex gap-2">
        <li
          className={`w-[10px] bg-white h-[10px] border-2 cursor-pointer rounded-[50%]`}
        ></li>
        <li
          className={`w-[10px] h-[10px] border-2 cursor-pointer rounded-[50%]`}
        ></li>
        <li
          className={`w-[10px] h-[10px] border-2 cursor-pointer rounded-[50%]`}
        ></li>
      </ul>
    </div>
  );
};

export default Hero;
