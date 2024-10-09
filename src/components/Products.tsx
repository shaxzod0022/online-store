import { useDispatch } from "react-redux";
import { ProductsBtnImgToLeft, ProductsBtnImgToRight } from "../assets";
import { productInfo } from "../util/constants";
import { styles } from "../util/style";
import Button from "./reusable/Button";
import { useNavigate } from "react-router-dom";
import { addProduct, setProducts } from "../app/productSlice";

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProduct = (id: number) => {
    let data = productInfo.find((item) => item.id === id);
    if (data) {
      dispatch(addProduct(data));
      // dispatch(setProducts(data));
    }
    navigate("/product_page");
  };

  const toAllProducts = (): void => {
    navigate("/all_products");
  };

  const hello = () => {
    console.log("hello world");
  };

  return (
    <div className="sm:py-20 py-10 md:px-[100px] px-[20px] ">
      <div className="flex justify-between items-center sm:mb-24 mb-20">
        <h2 className={`${styles.heading1} text-black font-bold`}>
          Featured Products
        </h2>
        <div className="flex justify-end m-0 gap-4">
          <button type="button" className="">
            <img src={ProductsBtnImgToLeft} alt="" />
          </button>
          <button type="button" className="">
            <img src={ProductsBtnImgToRight} alt="" />
          </button>
        </div>
      </div>
      <ul className="list-none gap-4 flex sm:flex-row flex-wrap">
        {productInfo.map((product, idx) => {
          return (
            <li
              key={idx}
              onClick={() => handleProduct(product.id)}
              className="p-4 box-shadow relative border-2 rounded-[20px] sm:w-full w-[150px] max-w-[288px] sm:h-[220px] h-[150px] flex flex-col justify-end sm:mb-20 mb-14 cursor-pointer"
            >
              <img
                src={product.img}
                alt={product.title}
                className="object-contain absolute top-[-25%] left-[15%] .position-left-right max-w-[200px] sm:w-full w-[100px]"
              />
              <div className="flex items-center justify-between m-0 ">
                <div className="flex flex-col gap-1 m-0">
                  <span className="m-0">{product.price}</span>
                  <h3 className={`${styles.heading3}`}>{product.title}</h3>
                </div>
                <Button
                  onClik={() => hello()}
                  title=""
                  calssName="z-[98] bg-greenCeladon text-white hover:bg-teal-500 px-3 py-1 fa-solid fa-plus"
                />
              </div>
            </li>
          );
        })}
      </ul>
      <div className="text-center">
        <Button
          onClik={() => toAllProducts()}
          title="View all Products"
          calssName={`${styles.buttonCeladon}`}
        />
      </div>
    </div>
  );
};

export default Products;
