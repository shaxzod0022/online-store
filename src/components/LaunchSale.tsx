import { FC } from "react";
import { Abstract1, Abstract2, Abstract3, Abstrakt } from "../assets";
import Button from "./reusable/Button";
import { useNavigate } from "react-router";

const LaunchSale: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const toAllProducts = (): void => {
    navigate("/all_products");
  };
  return (
    <div className="px-[20px] sm:px-[80px] md:px-[100px] bg-style">
      <div className="bg-white border-2 flex flex-col justify-end box-shadow rounded-[50px] relative w-full lg:h-[500px] h-[300px]">
        <img
          className="absolute top-0 right-10 sm:w-auto w-[170px]"
          src={Abstrakt}
          alt=""
        />
        <img
          className="absolute top-0 md:right-[40%] right-[20%] sm:w-auto w-[170px]"
          src={Abstract1}
          alt=""
        />
        <img
          className="absolute top-0 left-0 sm:w-auto w-[170px]"
          src={Abstract2}
          alt=""
        />
        <img
          className="absolute bottom-0 sm:w-auto w-[170px] right-[20%]"
          src={Abstract3}
          alt=""
        />
        <div className="flex flex-wrap z-[98] m-0 items-center justify-between px-[60px] py-[40px]">
          <div className="flex justify-start flex-col m-0">
            <strong className="m-0 lg:text-[56px] md:text-[40px] text-[30px] md:leading-[75.6px] font-montserrat leading-[45px]">
              Launch Sale is On
            </strong>
            <span className="m-0 text-silverRoman lg:text-[49px] md:text-[30px] text-[20px] md:leading-[55.6px] leading-[30px] font-montserrat">
              Shop today
            </span>
          </div>
          <Button
            onClik={() => toAllProducts()}
            title="->"
            calssName="hover:bg-orangePortland fa-solid fa-arrow-right bg-whiteHovering p-7 rounded-[10px] text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default LaunchSale;
