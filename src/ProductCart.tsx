import { Footer, LaunchSale, Navbar, ProductsCart } from "./components";
import { styles } from "./util/style";

const ProductCart = () => {
  return (
    <div>
      <div className={`${styles.container}`}>
        <Navbar />
        <ProductsCart />
        <LaunchSale />
        <Footer />
      </div>
    </div>
  );
};

export default ProductCart;
