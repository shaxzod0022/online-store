import { Footer, LaunchSale, Navbar, ProductInfo } from "./components";
import { styles } from "./util/style";

const ProductPage = () => {
  return (
    <div className={`${styles.container}`}>
      <Navbar/>
      <ProductInfo />
      <LaunchSale/>
      <Footer/>
    </div>
  );
};

export default ProductPage;
