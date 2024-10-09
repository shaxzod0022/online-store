import { Footer, LaunchSale, Navbar, OfCheckout } from "./components";
import { styles } from "./util/style";

const Checkout = () => {
  return (
    <div className={`${styles.container}`}>
      <Navbar />
      <OfCheckout />
      <LaunchSale />
      <Footer />
    </div>
  );
};

export default Checkout;
