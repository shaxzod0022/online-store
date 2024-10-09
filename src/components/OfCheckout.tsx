import { useSelector } from "react-redux";
import { PayPal } from "../assets";
import { Pay } from "../util/constants";
import { styles } from "../util/style";
import Button from "./reusable/Button";
import { RootState } from "../app/store";
import { useState } from "react";

const OfCheckout = () => {
  const products = useSelector((state: RootState) => state.products.products);
  let price: number[] = [];
  products.map((item) => {
    let result = Number(item.price.slice(1, 6));
    price.push(result);
  });
  const totalPrice: number = price.reduce(
    (accumulator, prices) => accumulator + prices,
    0
  );
  return (
    <div className="flex flex-wrap justify-between w-full md:pt-[150px] pt-[90px] md:px-[70px] lg:px-[100px] px-[20px]">
      <div className="flex lg:w-[45%] w-full  flex-col gap-4 m-0">
        <h2 className={`${styles.heading2}`}>Billing Details</h2>
        <div className="w-full flex flex-col justify-start">
          <label
            className="m-0 mb-2 text-[18px] font-semibold text-gray-500"
            htmlFor=""
          >
            First & last name
          </label>
          <input
            className="w-full border-2 outline-none rounded-md p-1.5"
            type="text"
            placeholder="i-e. John Smith"
          />
        </div>
        <div className="w-full flex flex-col justify-start">
          <label
            className="m-0 mb-2 text-[18px] font-semibold text-gray-500"
            htmlFor=""
          >
            Email address
          </label>
          <input
            className="w-full border-2 outline-none rounded-md p-1.5"
            type="text"
            placeholder="i-e. johnsmith@gmail.com"
          />
        </div>
        <div className="w-full flex flex-col justify-start">
          <label
            className="m-0 mb-2 text-[18px] font-semibold text-gray-500"
            htmlFor=""
          >
            Address
          </label>
          <input
            className="w-full mb-2 border-2 outline-none rounded-md p-1.5"
            type="text"
            placeholder="First line"
          />
          <input
            className="w-full border-2 outline-none rounded-md p-1.5"
            type="text"
            placeholder="Second line"
          />
        </div>
        <h2 className={`${styles.heading2}`}>Payment method</h2>
        <div className="flex flex-wrap justify-between w-full items-center border-2 px-3 py-2 border-orangePortland rounded-lg">
          <div className="flex gap-3 m-0">
            <input type="radio" className="m-0 w-[20px] text-orangePortland" />
            <p className={`${styles.paragraph}`}>Credit cart</p>
          </div>
          <ul className="m-0 flex gap-3 list-none items-center">
            {Pay.map((item, idText) => {
              return (
                <li
                  key={idText}
                  className="m-0 cursor-pointer rounded-[10px] items-center flex bg-white sm:w-[60px] box-shadow w-[40px] h-[30px] sm:h-[40px]"
                >
                  <img className="w-[60%]" src={item} alt={item} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full flex flex-col justify-start mb-5">
          <label
            className="m-0 mb-2 text-[18px] font-semibold text-gray-500"
            htmlFor=""
          >
            Cart number
          </label>
          <input
            className="w-full border-2 outline-none rounded-md p-1.5"
            type="text"
            placeholder="i.e. 4123 4567 123 9819"
          />
        </div>
        <div className="w-full flex flex-wrap justify-between mb-10">
          <div className="lg:w-[32%] w-40% flex flex-col m-0">
            <label
              className="m-0 mb-2 text-[18px] font-semibold text-gray-500"
              htmlFor=""
            >
              Expirition data
            </label>
            <input
              className="w-full border-2 outline-none rounded-md p-1.5"
              type="text"
              placeholder="Month"
            />
          </div>
          <div className="lg:w-[32%] w-40% flex flex-col m-0">
            <label
              className="m-0 mb-2 text-[18px] font-semibold text-gray-500"
              htmlFor=""
            >
              Year
            </label>
            <input
              className="w-full border-2 outline-none rounded-md p-1.5"
              type="text"
              placeholder="Year"
            />
          </div>
          <div className="lg:w-[32%] w-40% flex flex-col m-0">
            <label
              className="m-0 mb-2 text-[18px] font-semibold text-gray-500"
              htmlFor=""
            >
              Security code
            </label>
            <input
              className="w-full border-2 outline-none rounded-md p-1.5"
              type="text"
              placeholder="Three digits"
            />
          </div>
        </div>
        <div className="flex justify-between w-full items-center border-2 px-3 py-2 border-orangePortland rounded-lg">
          <div className="flex gap-3 m-0">
            <input type="radio" className="m-0 w-[20px] text-orangePortland" />
            <p className={`${styles.paragraph}`}>Paypal</p>
          </div>
          <div className="m-0">
            <img src={PayPal} alt="" />
          </div>
        </div>
        <div className="text-center">
          <p className={`${styles.paragraph} font-semibold text-gray-500`}>
            By clicking the button, you agree to the Terms and Conditions
          </p>
        </div>
        <Button
          title="Place order"
          calssName={`text-white text-[18px] bg-orangePortland w-full py-3 px-4 mb-3`}
        />
      </div>
      <div className="lg:w-[45%] w-full mb-5">
        <div className="border-2 rounded-lg p-[20px] box-shadow">
          <h2 className={`${styles.heading2} mb-3`}>Order Summary</h2>
          <ul className="flex w-full flex-col m-0 gap-3">
            {products.map((item, idx) => {
              return (
                <li className="flex items-center justify-between w-full m-0">
                  <div className="flex items-center m-0 gap-3">
                    <div className="rounded-md w-[100px] bg-whiteHovering p-3 m-0">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="m-0 flex flex-col gap-3">
                      <h3 className={`${styles.heading3}`}>{item.title}</h3>
                      <p className={`${styles.paragraph}`}>#{item.id}</p>
                    </div>
                  </div>
                  <div className="m-0">
                    <span className="font-semibold text-[16px] text-gray-400">
                      {item.price}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center justify-between border-t-2 mt-7 pt-5">
            <h3 className={`${styles.heading3}`}>Total</h3>
            <p className={`${styles.paragraph}`}>{totalPrice} £</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfCheckout;
