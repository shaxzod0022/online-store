import { useNavigate } from "react-router";
import { addProduct } from "../app/productSlice";
import { productInfo } from "../util/constants";
import Button from "./reusable/Button";
import { useDispatch } from "react-redux";
import { styles } from "../util/style";
import { NavigationProduct, PriceRange } from "../assets";

const AllProducts = () => {
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
  return (
    <div className="flex flex-wrap w-full sm:px-[80px] md:px-[100px] px-[20px] md:pt-[180px] pt-[110px]">
      <div className="lg:w-[25%] w-full lg:mb-0 mb-20 text-start">
        <div className="flex gap-2 items-center mb-6">
          <span className="m-0">
            <i className="fa-solid fa-bars"></i>
          </span>
          <span className="m-0">Filter</span>
        </div>
        <h2 className={`${styles.heading2} font-normal mb-2`}>Brands</h2>
        <div className="flex flex-wrap items-center justify-start gap-3 mb-3">
          <Button
            title="7up"
            calssName="text-orangePortland font-semibold bg-bgButtonOrange px-4 rounded-[10px] py-2"
          />
          <Button
            title="Arya"
            calssName="text-orangePortland font-semibold bg-bgButtonOrange px-4 rounded-[10px] py-2"
          />
          <Button
            title="Asya"
            calssName="text-orangePortland font-semibold bg-bgButtonOrange px-4 rounded-[10px] py-2"
          />
        </div>
        <h2 className={`${styles.heading2} font-normal mb-2`}>Category</h2>
        <div className="flex flex-wrap items-center justify-start gap-3 mb-3">
          <Button
            title="Dairy"
            calssName="text-orangePortland font-semibold bg-bgButtonOrange px-4 rounded-[10px] py-2"
          />
          <Button
            title="Eggs"
            calssName="text-orangePortland font-semibold bg-bgButtonOrange px-4 rounded-[10px] py-2"
          />
          <Button
            title="Poultry"
            calssName="text-orangePortland font-semibold bg-bgButtonOrange px-4 rounded-[10px] py-2"
          />
          <Button
            title="Rice"
            calssName="text-orangePortland font-semibold bg-bgButtonOrange px-4 rounded-[10px] py-2"
          />
          <Button
            title="Beef/Mutton"
            calssName="text-orangePortland font-semibold bg-bgButtonOrange px-4 rounded-[10px] py-2"
          />
          <Button
            title="Drinks"
            calssName="text-orangePortland font-semibold bg-bgButtonOrange px-4 rounded-[10px] py-2"
          />
        </div>
        <div>
          <img className="m-0" src={PriceRange} alt="" />
        </div>
      </div>

      <ul className="list-none lg:w-[75%] w-full gap-4 flex sm:flex-row flex-wrap">
        {productInfo.map((product, idx) => {
          return (
            <li
              key={idx}
              onClick={() => handleProduct(product.id)}
              className="p-4 box-shadow relative border-2 rounded-[20px] sm:w-full w-[150px] max-w-[288px] sm:h-[220px] h-[150px] flex flex-col justify-end sm:mb-20 mb-10 cursor-pointer"
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
                  onClik={() => {}}
                  title=""
                  calssName="z-[98] bg-greenCeladon text-white hover:bg-teal-500 px-3 py-1 fa-solid fa-plus"
                />
              </div>
            </li>
          );
        })}
        <div className="w-full mb-10">
          <img src={NavigationProduct} alt="" />
        </div>
      </ul>
    </div>
  );
};

export default AllProducts;
