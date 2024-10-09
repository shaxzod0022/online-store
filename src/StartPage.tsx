import {
  AboutUs,
  Footer,
  Hero,
  LaunchSale,
  Navbar,
  Partners,
  Products,
  SliderImgs,
} from "./components";
import { styles } from "./util/style";

const StartPage = () => {
  return (
    <div className={`${styles.container}`}>
      <Navbar />
      <Hero />
      <Products />
      <AboutUs />
      <SliderImgs />
      <Partners />
      <LaunchSale />
      <Footer />
    </div>
  );
};

export default StartPage;
