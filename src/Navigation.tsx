import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./StartPage";
import ProductPage from "./ProductPage";
import ProductCart from "./ProductCart";
import WievAllProduct from "./WievAllProduct";
import Checkout from "./Checkout";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={StartPage} />
        <Route path="/product_page" Component={ProductPage} />
        <Route path="/product_cart" Component={ProductCart} />
        <Route path="/all_products" Component={WievAllProduct} />
        <Route path="/checkout" Component={Checkout} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
