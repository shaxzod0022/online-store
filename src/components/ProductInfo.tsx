// src/components/ProductList.tsx
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import Button from "./reusable/Button";
import { styles } from "../util/style";
import {
  ProductsBtnImgToLeft,
  ProductsBtnImgToRight,
  User1,
  User2,
} from "../assets";
import { Reaviews } from ".";

const ProductList = () => {
  const products = useSelector((state: RootState) => state.products.products);
 
  return (
    <div className={`w-full pt-32 sm:px-[90px] md:-[120px] px-[20px] `}>
      {products.map((item, idx) => {
        return (
          <div key={idx} className={`flex flex-wrap w-full sm:`}>
            <div className="md:w-[50%] w-full">
              <div className="w-full bg-whiteHovering p-10 mb-5 rounded-[20px]">
                <img className="w-[60%]" src={item.img} alt="" />
              </div>
              <div className="flex mb-5 flex-wrap gap-5 justify-between w-full">
                <img
                  className="bg-whiteHovering p-10 rounded-[20px] lg:w-[30%] w-[40%]"
                  src={item.img}
                  alt=""
                />
                <img
                  className="bg-whiteHovering p-10 rounded-[20px] lg:w-[30%] w-[40%]"
                  src={item.img}
                  alt=""
                />
                <img
                  className="bg-whiteHovering p-10 rounded-[20px] lg:w-[30%] w-[40%]"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center ">
                  <h3 className={`${styles.heading2}`}>Write a Review</h3>
                  <Button
                    title="0/10"
                    calssName="border-2 text-orangePortland font-bold p-3 rounded-[15px]"
                  />
                </div>
                <div className="w-full mb-5">
                  <textarea
                    id="comment"
                    name="comment"
                    rows={6}
                    maxLength={500}
                    className="mt-2 p-3 w-full border border-gray-300 rounded-lg outline-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div className="flex flex-wrap gap-3 justify-between mb-5">
                  <input
                    className="border-gray-300 border  lg:w-[40%] w-full rounded-lg p-3 outline-none"
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className="border-gray-300 border rounded-lg lg:w-[40%] w-full p-3 outline-none"
                    type="text"
                    placeholder="Your Email"
                  />
                  <Button
                    title="Submit"
                    calssName="bg-orangePortland text-white font-bold py-3 px-5"
                  />
                </div>
              </div>
            </div>

            <div className="md:w-[50%] w-full md:px-10 px-0 m-0">
              <h2 className={`${styles.heading2} mb-5`}>{item.title}</h2>
              <p className="text-slate-300 mb-3">BY P&H EGGS</p>
              <div className="flex items-center gap-5 mb-4 justify-start">
                <span className="text-orangePortland m-0 p-2 bg-bgButtonOrange font-bold bg-">
                  {item.price}
                </span>
                <div className="m-0">
                  <p className="text-greenCeladon font-semibold font-montserrat">
                    Sale 12% off
                  </p>
                  <span className="font-montserrat">
                    Inclusive off all Taxes
                  </span>
                </div>
              </div>
              <p className={`${styles.paragraph} mb-4`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                optio ad debitis, ab deleniti quas distinctio blanditiis
                obcaecati quibusdam mollitia.
              </p>
              <div className="flex gap-10">
                <div className="relative justify-start m-0  gap-5 flex items-center">
                  <p className="absolute -top-2 left-0 m-0 text-[12px] text-slate-500">
                    QTY
                  </p>
                  <Button
                    title=""
                    calssName="fa-solid p-[5px] text-white rounded-[10px] fa-minus bg-orangePortland m-0"
                  />
                  <span className="font-bold">1</span>
                  <Button
                    title=""
                    calssName="fa-solid rounded-[10px] p-[5px] text-white fa-plus bg-greenCeladon m-0"
                  />
                </div>
                <Button
                  title="Add to Cart"
                  calssName="bg-orangePortland px-6 text-white font-semibold py-3"
                />
              </div>
              <div className="flex m-0 items-center justify-between">
                <h2 className={`${styles.heading2}`}>Reviews</h2>
                <div className="m-0 flex gap-3 ">
                  <button>
                    <img src={ProductsBtnImgToLeft} alt="" />
                  </button>
                  <button>
                    <img src={ProductsBtnImgToRight} alt="" />
                  </button>
                </div>
              </div>

              <Reaviews
                img={User1}
                className="mb-5"
                name="John Smith"
                title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nobis
          dicta labore delectus commodi obcaecati."
              />
              <Reaviews
                img={User2}
                className="mb-5"
                name="Debra Anderson"
                title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nobis
          dicta labore delectus commodi obcaecati."
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
