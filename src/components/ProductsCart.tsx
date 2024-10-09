import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { styles } from "../util/style";
import Button from "./reusable/Button";
import { useNavigate } from "react-router";
import { Empty } from "../assets";

const ProductsCart = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const navigate = useNavigate();
  const toCheckout = (): void => {
    navigate("/checkout");
  };
  let price: number[] = [];
  products.map((item) => {
    let result = Number(item.price.slice(1, 6));
    price.push(result);
  });
  const totalPrice: number = price.reduce(
    (accumulator, prices) => accumulator + prices,
    0
  );

  const toAllProducts = (): void => {
    navigate("/all_products");
  };
  return (
    <div className="w-full sm:px-[80px] md:px-[100px] px-[20px] md:pt-[150px] pt-[110px] mb-4">
      <div
        className={`${
          products.length !== 0 ? "hidden" : "block"
        } items-center flex flex-col gap-5`}
      >
        <div>
          <img src={Empty} alt="" />
        </div>
        <div className="items-center flex flex-col">
          <h1 className={`${styles.heading1}`}>Cart is empty</h1>
          <p className={`${styles.paragraph}`}>Add some item to the cart</p>
        </div>
        <Button
          onClik={() => toAllProducts()}
          title="View all Products"
          calssName={`${styles.buttonCeladon}`}
        />
      </div>
      <div className={`${products.length === 0 ? "hidden" : "block"}`}>
        {products.map((item, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-wrap items-center justify-between mb-5"
            >
              <div className="flex items-center sm:w-[45%] w-full md:gap-10 gap-6 md:m-0 mb-5">
                <div className="w-[120px] p-3 rounded-lg bg-whiteHovering m-0">
                  <img className="w-full" src={item.img} alt="" />
                </div>
                <div className="text-start">
                  <h3 className={`${styles.heading3} mb-2`}>{item.title}</h3>
                  <p className={`${styles.paragraph}`}>#{item.id}</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-between items-center sm:w-[55%] w-full m-0">
                <div className="flex items-center gap-2 m-0">
                  <Button
                    title="-"
                    calssName="text-white bg-greenCeladon !rounded-[10px] text-[24px] px-2"
                  />
                  <span>1</span>
                  <Button
                    title="+"
                    calssName="text-white bg-orangePortland !rounded-[10px] text-[24px] px-2"
                  />
                </div>
                <h2 className={`${styles.heading2} text-gray-500`}>
                  {item.price}
                </h2>
                <Button
                  title="x"
                  calssName="text-white bg-greenCeladon !rounded-[10px] text-[24px] px-2"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={`flex md:justify-end justify-between items-center border-y-2 py-4 my-4 ${
          products.length === 0 ? "hidden" : "block"
        }`}
      >
        <div className="flex md:w-[55%] w-full items-center m-0 justify-between">
          <p className={`${styles.paragraph} font-bold `}>Subtotlal</p>
          <h2 className={`${styles.heading2} text-gray-500`}>{totalPrice} E</h2>
          <Button
            onClik={() => toCheckout()}
            calssName="text-white md:text-[18px] sm:text-[16px] text-[14px] bg-orangePortland md:px-10 !rounded-[10px] px-7 md:py-3 py-1"
            title="Checkout"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
