import { AllProducts, Footer, LaunchSale, Navbar } from "./components";
import { styles } from "./util/style";

const WievAllProduct = () => {
  return (
    <div className={`${styles.container}`}>
      <Navbar />
      <AllProducts />
      <LaunchSale />
      <Footer />
    </div>
  );
};

export default WievAllProduct;
